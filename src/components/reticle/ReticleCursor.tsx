import React, { useEffect, useState, useRef } from 'react';
import { audioEngine } from '@/lib/audioEngine';

interface SnapTarget {
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
}

export const ReticleCursor: React.FC = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [coords, setCoords] = useState({ x: -100, y: -100 });
  const [snapTarget, setSnapTarget] = useState<SnapTarget | null>(null);
  const prevTargetRef = useRef<Element | null>(null);

  useEffect(() => {
    // Check if device is touch-primary
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) {
      setIsTouchDevice(true);
      return;
    }

    let frameId: number;

    const updateSnapFromElement = (element: Element | null) => {
      if (!element) {
        setSnapTarget(null);
        return;
      }
      const rect = element.getBoundingClientRect();
      const label = element.getAttribute('data-inspect-label') || undefined;
      setSnapTarget({
        x: rect.left,
        y: rect.top,
        width: rect.width,
        height: rect.height,
        label,
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        setCoords({ x: e.clientX, y: e.clientY });

        // Check if cursor is over an inspectable element
        const target = (e.target as HTMLElement)?.closest('[data-inspectable="true"]');
        if (target && target !== prevTargetRef.current) {
          prevTargetRef.current = target;
          updateSnapFromElement(target);
          audioEngine.playReticleLock();
        } else if (!target && prevTargetRef.current) {
          prevTargetRef.current = null;
          setSnapTarget(null);
        } else if (target && prevTargetRef.current) {
          updateSnapFromElement(target);
        }
      });
    };

    const handleScrollOrResize = () => {
      if (prevTargetRef.current) {
        updateSnapFromElement(prevTargetRef.current);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (isTouchDevice || coords.x < 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {/* 1. Precision Crosshair Cursor */}
      <div
        className="absolute top-0 left-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${coords.x}px, ${coords.y}px, 0)`,
        }}
      >
        {/* Optical Crosshair Lines */}
        <div className="relative -top-[10px] -left-[10px] w-5 h-5 flex items-center justify-center">
          <div className="absolute w-3 h-[1px] bg-copper/90"></div>
          <div className="absolute h-3 w-[1px] bg-copper/90"></div>
          <div className="w-1.5 h-1.5 rounded-full border border-copper"></div>
        </div>

        {/* Telemetry Coordinate Label */}
        <div className="absolute left-3.5 top-3.5 flex items-center gap-1.5 px-1.5 py-0.5 bg-chassis/95 border border-chamfer text-[9px] font-mono text-text-muted shadow-md whitespace-nowrap">
          <span className="text-copper font-semibold">LOC</span>
          <span>
            X:<span className="text-text-main font-semibold">{Math.round(coords.x).toString().padStart(4, '0')}</span>
          </span>
          <span>
            Y:<span className="text-text-main font-semibold">{Math.round(coords.y).toString().padStart(4, '0')}</span>
          </span>
        </div>
      </div>

      {/* 2. Rigid Component Perimeter Snap Brackets [ ] */}
      {snapTarget && (
        <div
          className="absolute transition-all duration-180 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
          style={{
            transform: `translate3d(${snapTarget.x - 4}px, ${snapTarget.y - 4}px, 0)`,
            width: `${snapTarget.width + 8}px`,
            height: `${snapTarget.height + 8}px`,
          }}
        >
          {/* Top-Left Bracket */}
          <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-copper"></div>
          {/* Top-Right Bracket */}
          <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-copper"></div>
          {/* Bottom-Left Bracket */}
          <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-copper"></div>
          {/* Bottom-Right Bracket */}
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-copper"></div>

          {/* Snap Header Tag */}
          {snapTarget.label && (
            <div className="absolute -top-5 left-0 px-2 py-0.5 bg-chassis border border-copper text-[9px] font-mono text-copper font-semibold tracking-wider uppercase shadow-md">
              [INSPECT: {snapTarget.label}]
            </div>
          )}
        </div>
      )}
    </div>
  );
};
