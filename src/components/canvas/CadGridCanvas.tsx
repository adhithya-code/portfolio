import React, { useEffect, useRef } from 'react';

interface TraceSegment {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
  color: string;
}

export const CadGridCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tracesRef = useRef<TraceSegment[]>([]);
  const mouseRef = useRef<{ x: number; y: number; lastX: number; lastY: number }>({
    x: -100,
    y: -100,
    lastX: -100,
    lastY: -100,
  });
  const scrollYRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const GRID_SIZE = 24;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    handleResize();
    handleScroll();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      const mouse = mouseRef.current;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (mouse.lastX === -100) {
        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;
        return;
      }

      const dx = mouse.x - mouse.lastX;
      const dy = mouse.y - mouse.lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 16) {
        const snapX1 = Math.round(mouse.lastX / GRID_SIZE) * GRID_SIZE;
        const snapY1 = Math.round(mouse.lastY / GRID_SIZE) * GRID_SIZE;
        const snapX2 = Math.round(mouse.x / GRID_SIZE) * GRID_SIZE;
        const snapY2 = Math.round(mouse.y / GRID_SIZE) * GRID_SIZE;

        const isCopper = Math.random() > 0.35;
        const traceColor = isCopper ? '#D97736' : '#00F0FF';

        const midX = snapX1 + (Math.abs(snapX2 - snapX1) > Math.abs(snapY2 - snapY1) ? snapX2 - snapX1 : 0);
        const midY = snapY1 + (Math.abs(snapX2 - snapX1) > Math.abs(snapY2 - snapY1) ? 0 : snapY2 - snapY1);

        tracesRef.current.push({
          x1: snapX1,
          y1: snapY1,
          x2: midX,
          y2: midY,
          opacity: 1.0,
          color: traceColor,
        });

        tracesRef.current.push({
          x1: midX,
          y1: midY,
          x2: snapX2,
          y2: snapY2,
          opacity: 1.0,
          color: traceColor,
        });

        mouse.lastX = mouse.x;
        mouse.lastY = mouse.y;

        if (tracesRef.current.length > 45) {
          tracesRef.current.splice(0, tracesRef.current.length - 45);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // =========================================================================
    // HELPER: DRAW MOLDED RECTANGULAR WELL WITH INSET BEVEL SHADOWS
    // =========================================================================
    const drawMoldedWell = (
      x: number,
      y: number,
      w: number,
      h: number,
      radius: number,
      label?: string
    ) => {
      ctx.save();
      // Outer molded recess stroke
      ctx.beginPath();
      ctx.roundRect(x, y, w, h, radius);
      ctx.fillStyle = '#061626';
      ctx.fill();

      // Inset dark top/left shadow
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)';
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Inset bright bottom/right highlight
      ctx.beginPath();
      ctx.roundRect(x + 1, y + 1, w - 2, h - 2, radius);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.14)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Deep pocket interior gradient
      const innerGrad = ctx.createLinearGradient(x, y, x, y + h);
      innerGrad.addColorStop(0, '#04101D');
      innerGrad.addColorStop(0.3, '#071828');
      innerGrad.addColorStop(1, '#0B2236');
      ctx.fillStyle = innerGrad;
      ctx.beginPath();
      ctx.roundRect(x + 1.5, y + 1.5, w - 3, h - 3, radius - 1);
      ctx.fill();

      if (label) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.font = '7px monospace';
        ctx.fillText(label, x + 3.5, y + 9);
      }
      ctx.restore();
    };

    // =========================================================================
    // HELPER: DRAW CIRCULAR MAGNETIC RECESS WELL
    // =========================================================================
    const drawMagneticCup = (cx: number, cy: number, r: number, label?: string) => {
      ctx.save();
      // Outer shadow basin
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fillStyle = '#04101D';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.9)';
      ctx.lineWidth = 1.6;
      ctx.stroke();

      // Concentric metallic ring
      ctx.beginPath();
      ctx.arc(cx, cy, r - 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#142230';
      ctx.fill();
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Center magnet disc
      ctx.beginPath();
      ctx.arc(cx, cy, r - 8, 0, Math.PI * 2);
      ctx.fillStyle = '#071522';
      ctx.fill();
      ctx.strokeStyle = '#D97736';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      if (label) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.font = '6px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(label, cx, cy + r + 8);
        ctx.textAlign = 'left';
      }
      ctx.restore();
    };

    // =========================================================================
    // HELPER: DRAW AUTHENTIC 3D METALLIC TORX / PHILLIPS M2 SCREW
    // (Threaded cylindrical shank, countersunk chamfer head, Torx star socket)
    // =========================================================================
    const draw3DScrew = (
      x: number,
      y: number,
      angleDeg: number,
      isAnodizedBlack = false,
      shankLength = 10
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate((angleDeg * Math.PI) / 180);

      // 1. Contact Drop Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
      ctx.beginPath();
      ctx.ellipse(3, 4 + shankLength / 2, 6, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Threaded Cylindrical Shank
      if (shankLength > 0) {
        // Shank Base Cylinder
        const shankGrad = ctx.createLinearGradient(-2, 0, 2, 0);
        if (isAnodizedBlack) {
          shankGrad.addColorStop(0, '#333D4B');
          shankGrad.addColorStop(0.5, '#1A212B');
          shankGrad.addColorStop(1, '#0C1016');
        } else {
          shankGrad.addColorStop(0, '#E2E8F0');
          shankGrad.addColorStop(0.4, '#A0AEC0');
          shankGrad.addColorStop(0.8, '#4A5568');
          shankGrad.addColorStop(1, '#2D3748');
        }
        ctx.fillStyle = shankGrad;
        ctx.fillRect(-2, 3, 4, shankLength);

        // Thread Spiral Ridges
        ctx.strokeStyle = isAnodizedBlack ? '#11171E' : '#CBD5E0';
        ctx.lineWidth = 0.9;
        for (let t = 4; t < 3 + shankLength; t += 2.2) {
          ctx.beginPath();
          ctx.moveTo(-2.5, t);
          ctx.lineTo(2.5, t + 1.2);
          ctx.stroke();
        }

        // Tapered Thread Tip
        ctx.fillStyle = isAnodizedBlack ? '#1A212B' : '#718096';
        ctx.beginPath();
        ctx.moveTo(-2, 3 + shankLength);
        ctx.lineTo(2, 3 + shankLength);
        ctx.lineTo(0, 3 + shankLength + 3);
        ctx.closePath();
        ctx.fill();
      }

      // 3. Countersunk Chamfered Screw Head
      const headGrad = ctx.createLinearGradient(-5, -5, 5, 5);
      if (isAnodizedBlack) {
        headGrad.addColorStop(0, '#4A5568');
        headGrad.addColorStop(0.4, '#1E2530');
        headGrad.addColorStop(1, '#0D1117');
      } else {
        headGrad.addColorStop(0, '#FFFFFF');
        headGrad.addColorStop(0.3, '#CBD5E0');
        headGrad.addColorStop(0.7, '#718096');
        headGrad.addColorStop(1, '#2D3748');
      }

      ctx.fillStyle = headGrad;
      ctx.beginPath();
      ctx.arc(0, 0, 5.2, 0, Math.PI * 2);
      ctx.fill();

      // Outer Bevel Lip
      ctx.strokeStyle = isAnodizedBlack ? '#141820' : '#4A5568';
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Top Specular Light Reflection Catch
      ctx.beginPath();
      ctx.arc(0, 0, 4.4, -Math.PI * 0.75, -Math.PI * 0.2);
      ctx.strokeStyle = isAnodizedBlack ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.85)';
      ctx.lineWidth = 0.9;
      ctx.stroke();

      // 4. Recessed 6-Point Torx Star Socket
      ctx.fillStyle = isAnodizedBlack ? '#07090D' : '#1A202C';
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        const r = i % 2 === 0 ? 2.6 : 1.3;
        const px = r * Math.cos(a);
        const py = r * Math.sin(a);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.fill();

      // Inner Star Notch Specular Tick
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath();
      ctx.arc(-0.8, -0.8, 0.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    // =========================================================================
    // RENDER MAIN WORKSPACE ENVIRONMENT WITH SCROLL PHYSICS
    // =========================================================================
    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      const scrollY = scrollYRef.current;

      // 1. BASE MATERIAL: AUTHENTIC ESD REPAIR SILICONE BLUE
      const matGrad = ctx.createLinearGradient(0, 0, 0, height);
      matGrad.addColorStop(0, '#184A78');
      matGrad.addColorStop(0.5, '#133D64');
      matGrad.addColorStop(1, '#0F3050');
      ctx.fillStyle = matGrad;
      ctx.fillRect(0, 0, width, height);

      // 2. PRECISION SILICONE 24px ALIGNMENT GRID (SCROLLS WITH WORKBENCH)
      const gridOffsetY = -(scrollY % GRID_SIZE);
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';

      ctx.beginPath();
      for (let x = 0; x < width; x += GRID_SIZE) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = gridOffsetY; y < height; y += GRID_SIZE) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();

      // Major 5x Grid Crosshairs
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.28)';
      ctx.lineWidth = 1;
      const MAJOR_GRID = GRID_SIZE * 5;
      const majorOffsetY = -(scrollY % MAJOR_GRID);
      ctx.beginPath();
      for (let x = MAJOR_GRID; x < width; x += MAJOR_GRID) {
        for (let y = majorOffsetY; y < height; y += MAJOR_GRID) {
          ctx.moveTo(x - 4, y);
          ctx.lineTo(x + 4, y);
          ctx.moveTo(x, y - 4);
          ctx.lineTo(x, y + 4);
        }
      }
      ctx.stroke();

      // =======================================================================
      // PHYSICAL MAT ARTIFACTS (ANCHORED TO SCROLL FLOW: y - scrollY)
      // =======================================================================
      ctx.save();
      ctx.translate(0, -scrollY);

      // Outer molded silicone bevel rim around main mat
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(6, 6, width - 12, 4000);
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.strokeRect(8, 8, width - 16, 4000);

      // 3. TOP HORIZONTAL METRIC RULER STRIP (0 to 1000mm)
      ctx.fillStyle = 'rgba(10, 28, 48, 0.75)';
      ctx.fillRect(8, 8, width - 16, 24);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.font = '9px monospace';

      ctx.beginPath();
      for (let x = 50; x < width - 120; x += 10) {
        const isMajor = x % 50 === 0;
        const isMid = x % 10 === 0 && !isMajor;
        const tickHeight = isMajor ? 12 : isMid ? 6 : 4;

        ctx.moveTo(x, 32);
        ctx.lineTo(x, 32 - tickHeight);

        if (isMajor && x + 30 < width - 120) {
          ctx.fillText(`${x / 10}cm`, x - 8, 18);
        }
      }
      ctx.stroke();

      // 4. TOP-LEFT CLUSTERED MAGNET SCREW BINS (3x4 Grid + Troughs + Magnet Wells)
      // Modeled after iFixit / JerryRigEverything repair teardown mats
      const leftColX = 14;
      let clusterY = 44;

      // 3x4 Grid of Magnetic Screw Wells (A1-A4, B1-B4, C1-C4)
      const binW = 32;
      const binH = 26;
      const binLabels = [
        ['A1', 'A2', 'A3', 'A4'],
        ['B1', 'B2', 'B3', 'B4'],
        ['C1', 'C2', 'C3', 'C4'],
      ];

      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 4; c++) {
          const bx = leftColX + c * (binW + 4);
          const by = clusterY + r * (binH + 4);
          drawMoldedWell(bx, by, binW, binH, 3, binLabels[r][c]);

          // Scattered 3D Torx Screws
          if (r === 0 && c === 1) draw3DScrew(bx + 16, by + 12, 38, false, 9);
          if (r === 1 && c === 0) draw3DScrew(bx + 15, by + 13, -55, true, 8);
          if (r === 1 && c === 3) draw3DScrew(bx + 17, by + 11, 72, false, 11);
          if (r === 2 && c === 2) draw3DScrew(bx + 16, by + 14, -20, true, 6);
        }
      }

      clusterY += 3 * (binH + 4) + 6;

      // Elongated Rectangular Trough 01 (Ribbon cables / Tweezers bay)
      drawMoldedWell(leftColX, clusterY, 140, 26, 4, 'TROUGH 01 // CABLE & SPUDGER');
      clusterY += 32;

      // Elongated Rectangular Trough 02 (Hardware Spares)
      drawMoldedWell(leftColX, clusterY, 140, 26, 4, 'TROUGH 02 // SPARE M2 FASTENERS');
      draw3DScrew(leftColX + 45, clusterY + 13, 15, false, 10);
      draw3DScrew(leftColX + 90, clusterY + 12, -42, true, 8);
      clusterY += 32;

      // Two Circular Magnetic Recess Wells (MAG-A & MAG-B)
      drawMagneticCup(leftColX + 32, clusterY + 22, 20, 'MAG-A');
      draw3DScrew(leftColX + 32, clusterY + 22, 45, false, 0);

      drawMagneticCup(leftColX + 104, clusterY + 22, 20, 'MAG-B');
      draw3DScrew(leftColX + 104, clusterY + 22, -65, true, 0);

      // 5. TOP-RIGHT CLUSTERED MAGNET SCREW BINS
      const rightColX = width - 154;
      let rClusterY = 44;

      const rBinLabels = [
        ['D1', 'D2', 'D3', 'D4'],
        ['E1', 'E2', 'E3', 'E4'],
        ['F1', 'F2', 'F3', 'F4'],
      ];

      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 4; c++) {
          const bx = rightColX + c * (binW + 4);
          const by = rClusterY + r * (binH + 4);
          drawMoldedWell(bx, by, binW, binH, 3, rBinLabels[r][c]);

          // Scattered 3D Torx Screws
          if (r === 0 && c === 2) draw3DScrew(bx + 16, by + 12, -30, false, 8);
          if (r === 1 && c === 1) draw3DScrew(bx + 15, by + 13, 65, true, 10);
          if (r === 2 && c === 0) draw3DScrew(bx + 16, by + 11, -75, false, 7);
        }
      }

      rClusterY += 3 * (binH + 4) + 6;
      drawMoldedWell(rightColX, rClusterY, 140, 26, 4, 'COMP 01 // SCREW LOCK');
      draw3DScrew(rightColX + 70, rClusterY + 13, 22, false, 9);
      rClusterY += 32;

      drawMagneticCup(rightColX + 70, rClusterY + 22, 20, 'MAG-C');
      draw3DScrew(rightColX + 70, rClusterY + 22, 10, true, 0);

      // 6. TOP-RIGHT BRASS ESD GROUND SNAP STUD & COILED BANANA PLUG WIRE
      const studX = width - 45;
      const studY = 20;

      // Coiled ESD grounding cable lead
      ctx.strokeStyle = '#D97736';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(studX, studY);
      ctx.bezierCurveTo(studX + 25, studY + 10, studX + 5, studY + 30, studX + 30, studY + 45);
      ctx.bezierCurveTo(studX + 10, studY + 60, studX + 30, studY + 75, width - 6, studY + 80);
      ctx.stroke();

      // Brass outer snap ring
      ctx.beginPath();
      ctx.arc(studX, studY, 11, 0, Math.PI * 2);
      ctx.fillStyle = '#B8860B';
      ctx.fill();
      ctx.strokeStyle = '#FFD700';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Brass center snap post
      ctx.beginPath();
      ctx.arc(studX, studY, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFE17D';
      ctx.fill();

      // ESD Silkscreen text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '8px monospace';
      ctx.fillText('ESD GROUND 10^6-10^9 Ω', studX - 115, studY + 3);

      ctx.restore();

      // 7. CONDUCTIVE COPPER TRACE PROPAGATION (SCREEN SPACE)
      for (let i = tracesRef.current.length - 1; i >= 0; i--) {
        const trace = tracesRef.current[i];
        trace.opacity -= 0.015;

        if (trace.opacity <= 0) {
          tracesRef.current.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = trace.color;
        ctx.globalAlpha = trace.opacity;
        ctx.lineWidth = 2.2;

        ctx.beginPath();
        ctx.moveTo(trace.x1, trace.y1);
        ctx.lineTo(trace.x2, trace.y2);
        ctx.stroke();

        ctx.fillStyle = trace.color;
        ctx.beginPath();
        ctx.arc(trace.x2, trace.y2, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};
