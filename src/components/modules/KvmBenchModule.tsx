import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_DATA, ProjectData } from '@/data/portfolioData';
import { audioEngine } from '@/lib/audioEngine';
import { 
  Github, 
  ExternalLink, 
  Send, 
  Cpu, 
  HardDrive, 
  Layers, 
  Zap, 
  ArrowRight,
  Monitor
} from 'lucide-react';

export const KvmBenchModule: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [syncStatus, setSyncStatus] = useState<'locked' | 'unplugged' | 'handshake'>('locked');

  const selectedProject = PORTFOLIO_DATA.projects[activeIndex] || PORTFOLIO_DATA.projects[0];

  // Channel X positions in SVG viewBox coordinates (width: 400)
  const channelSvgX = [50, 150, 250, 350];
  const targetX = channelSvgX[activeIndex] ?? 50;

  const handleChannelSwitch = (_project: ProjectData, targetIndex: number) => {
    if (targetIndex === activeIndex || isTransitioning) return;

    // Lock interactions during the extended 800ms mechanical transition window
    setIsTransitioning(true);

    // =========================================================================
    // PHASE 1: UNPLUG & DESYNC (0ms - 150ms)
    // =========================================================================
    audioEngine.playPortConnect(); // Metallic friction disconnect
    setSyncStatus('unplugged');

    // =========================================================================
    // PHASE 2: ROUTE & SNAP-IN (150ms - 450ms)
    // =========================================================================
    setTimeout(() => {
      setActiveIndex(targetIndex);
    }, 150);

    // =========================================================================
    // PHASE 3: EDID HANDSHAKE & SCAN SWEEP (450ms - 750ms)
    // =========================================================================
    setTimeout(() => {
      audioEngine.playRelayClick(); // Sharp 12ms relay impulse
      setSyncStatus('handshake');
    }, 450);

    // =========================================================================
    // PHASE 4: SYNC LOCKED & DATA DISPLAY (750ms+)
    // =========================================================================
    setTimeout(() => {
      setSyncStatus('locked');
      setIsTransitioning(false);
    }, 750);
  };

  // Construct smooth cubic Bézier spline terminating behind the monitor's rear I/O cavity
  const monitorPortX = 200;
  const cableEndY = syncStatus === 'unplugged' ? 16 : 0;
  const cablePathD = `M ${targetX} 52 C ${targetX} 24, ${monitorPortX} ${28 + cableEndY}, ${monitorPortX} ${cableEndY}`;

  return (
    <div className="space-y-4">
      {/* Module Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-chamfer pb-2.5 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-copper font-mono text-xs font-semibold px-2 py-0.5 border border-copper/30 bg-copper/10">
            MODULE 08
          </span>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-text-main font-sans">
            Studio 4K Reference Display & Physical KVM Routing Deck
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <Monitor className="w-4 h-4 text-cyan" />
          <span>PROART CALIBRATION // 3840×2160 @ 120Hz</span>
        </div>
      </div>

      {/* =========================================================================
          FIXED-DIMENSION STRUCTURAL WORKBENCH CONTAINER (PREVENTS ANY LAYOUT SHIFTS)
         ========================================================================= */}
      <div className="relative mx-auto max-w-6xl w-full">
        {/* =====================================================================
            1. THE PHYSICAL 4K STUDIO REFERENCE MONITOR (Z-INDEX: 20 - ON TOP OF CABLE)
           ===================================================================== */}
        <div className="relative z-20 border-[3px] border-[#1C2028] bg-[#0A0C10] shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden">
          {/* Top Edge Status Silkscreen */}
          <div className="bg-[#12151B] px-4 py-1.5 border-b border-[#1E2330] flex items-center justify-between font-mono text-[11px]">
            <div className="flex items-center gap-2 text-text-main">
              <span className="flex h-2 w-2 relative">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  syncStatus === 'locked' ? 'bg-led' : syncStatus === 'handshake' ? 'bg-gold' : 'bg-red-500'
                }`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${
                  syncStatus === 'locked' ? 'bg-led' : syncStatus === 'handshake' ? 'bg-gold' : 'bg-red-500'
                }`}></span>
              </span>
              <span className="font-bold tracking-wider">DISP-4K // PRO-BENCH</span>
              <span className="text-text-dim hidden md:inline">|</span>
              <span className="text-text-dim text-[10px] hidden md:inline">
                COLOR ACCURACY: ΔE &lt; 1.0 • 10-BIT RGB
              </span>
            </div>

            {/* High-Density OSD Status Badge */}
            <div className="flex items-center gap-2 text-[10px]">
              <span className={`px-2 py-0.5 border font-bold ${
                syncStatus === 'locked'
                  ? 'border-cyan/40 bg-cyan/10 text-cyan'
                  : syncStatus === 'handshake'
                  ? 'border-gold/40 bg-gold/10 text-gold'
                  : 'border-red-500/40 bg-red-500/10 text-red-400'
              }`}>
                {syncStatus === 'locked' && `LOCKED: [${selectedProject.kvmChannel}]`}
                {syncStatus === 'handshake' && `HANDSHAKE: [${selectedProject.kvmChannel}]`}
                {syncStatus === 'unplugged' && 'NO SIGNAL // TMDS SUSPENDED'}
              </span>
              <span className="px-2 py-0.5 border border-[#2D3545] bg-[#161B24] text-text-muted hidden sm:inline">
                3840×2160 @ 120Hz
              </span>
            </div>
          </div>

          {/* RECESSED DISPLAY GLASS (Strict Fixed Height h-[480px] to Prevent Any Layout Shift) */}
          <div className="p-4 sm:p-7 bg-[#07080B] min-h-[480px] h-[480px] flex flex-col justify-between relative shadow-[inset_0_2px_14px_rgba(0,0,0,0.95)] overflow-hidden">
            {syncStatus === 'unplugged' ? (
              /* Phase 1: Cable Disconnected 60Hz Desync Flash */
              <div className="h-full flex flex-col items-center justify-center space-y-3 font-mono relative">
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-red-500/40 to-transparent animate-pulse top-1/2"></div>
                <div className="w-16 h-1 bg-red-500/80 animate-pulse"></div>
                <div className="text-red-400 text-xs font-bold tracking-widest uppercase">
                  [TMDS DESYNC] CABLE RETRACTED FROM PORT BAY...
                </div>
                <div className="text-text-dim text-[11px]">
                  HOT-PLUG DETECT: LOW // SHIFTING TRANSMISSION BUS
                </div>
              </div>
            ) : syncStatus === 'handshake' ? (
              /* Phase 3: EDID Renegotiating Handshake with Horizontal Scan Sweep */
              <div className="h-full flex flex-col items-center justify-center space-y-4 font-mono relative overflow-hidden">
                {/* Horizontal Scan Sweep Bar */}
                <motion.div
                  initial={{ top: '-10%' }}
                  animate={{ top: '110%' }}
                  transition={{ duration: 0.35, ease: 'linear' }}
                  className="absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-cyan/20 to-transparent pointer-events-none"
                />

                <div className="w-10 h-10 border-2 border-copper border-t-transparent animate-spin"></div>
                
                {/* OSD Handshake Banner */}
                <div className="border border-gold/60 bg-[#14100B] px-5 py-3 text-center space-y-1 shadow-lg">
                  <div className="text-gold text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-ping"></span>
                    <span>HANDSHAKE: [{selectedProject.kvmChannel}] // NEGOTIATING EDID...</span>
                  </div>
                  <div className="text-text-dim text-[10px]">
                    PIXEL CLOCK: 594.0 MHz • 3840×2160 @ 120Hz • COLOR: RGB 4:4:4
                  </div>
                </div>
              </div>
            ) : (
              /* Phase 4: Active Project Architecture & Constraints Telemetry */
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="h-full flex flex-col justify-between space-y-4"
                >
                  {/* 1. Project Header & Architecture Details */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 border-b border-[#181C26] pb-4">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] font-mono text-copper mb-1">
                        <span className="px-1.5 py-0.2 bg-copper/10 border border-copper/30 font-bold">
                          {selectedProject.category}
                        </span>
                        <span>//</span>
                        <span className="text-text-dim">{selectedProject.metrics.boundary}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-text-main font-sans tracking-tight">
                        {selectedProject.name}
                      </h3>
                      <p className="text-text-muted text-xs sm:text-sm mt-0.5 font-sans">
                        {selectedProject.tagline}
                      </p>
                    </div>

                    {/* External GitHub Action Button */}
                    <div className="shrink-0">
                      <a
                        href={selectedProject.repoUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-inspectable="true"
                        data-inspect-label="OPEN REPO"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-copper/60 bg-[#1C1814] text-copper hover:bg-copper hover:text-chassis font-mono text-xs font-bold transition-all shadow-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>OPEN REPO</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* 2. System Execution Pipeline Blocks */}
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-text-dim mb-2">
                      <span className="text-copper font-semibold text-[11px] flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        DETERMINISTIC LATENCY PIPELINE: INGESTION ➔ INFERENCE ➔ STORAGE ➔ DISPATCH
                      </span>
                      <span className="text-[10px] hidden sm:inline text-text-dim">
                        ZERO-EXFILTRATION ISOLATION
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 font-mono text-xs">
                      {/* Stage 1 */}
                      <div className="border border-[#222836] bg-[#0E1117] p-3 space-y-1">
                        <div className="text-[10px] text-copper font-bold flex items-center justify-between">
                          <span>01. INGESTION</span>
                          <Send className="w-3.5 h-3.5 text-copper" />
                        </div>
                        <div className="text-text-main text-xs font-semibold leading-snug">
                          {selectedProject.pipeline.ingestion}
                        </div>
                      </div>

                      {/* Stage 2 */}
                      <div className="border border-[#222836] bg-[#0E1117] p-3 space-y-1">
                        <div className="text-[10px] text-cyan font-bold flex items-center justify-between">
                          <span>02. LOCAL INFERENCE</span>
                          <Cpu className="w-3.5 h-3.5 text-cyan" />
                        </div>
                        <div className="text-text-main text-xs font-semibold leading-snug">
                          {selectedProject.pipeline.compute}
                        </div>
                      </div>

                      {/* Stage 3 */}
                      <div className="border border-[#222836] bg-[#0E1117] p-3 space-y-1">
                        <div className="text-[10px] text-led font-bold flex items-center justify-between">
                          <span>03. STATE MEMORY</span>
                          <HardDrive className="w-3.5 h-3.5 text-led" />
                        </div>
                        <div className="text-text-main text-xs font-semibold leading-snug">
                          {selectedProject.pipeline.storage}
                        </div>
                      </div>

                      {/* Stage 4 */}
                      <div className="border border-[#222836] bg-[#0E1117] p-3 space-y-1">
                        <div className="text-[10px] text-gold font-bold flex items-center justify-between">
                          <span>04. BUS DISPATCH</span>
                          <Layers className="w-3.5 h-3.5 text-gold" />
                        </div>
                        <div className="text-text-main text-xs font-semibold leading-snug">
                          {selectedProject.pipeline.output}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Constraints & Hardware Telemetry Matrix */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 font-mono text-xs">
                    <div className="border border-[#1E2330] bg-[#0B0D12] p-2">
                      <div className="text-[9px] text-text-dim uppercase tracking-wider">LATENCY (P99)</div>
                      <div className="text-copper font-bold text-xs mt-0.5">
                        {selectedProject.metrics.latency}
                      </div>
                    </div>

                    <div className="border border-[#1E2330] bg-[#0B0D12] p-2">
                      <div className="text-[9px] text-text-dim uppercase tracking-wider">RESIDENT MEMORY</div>
                      <div className="text-cyan font-bold text-xs mt-0.5">
                        {selectedProject.metrics.memoryLimit}
                      </div>
                    </div>

                    <div className="border border-[#1E2330] bg-[#0B0D12] p-2">
                      <div className="text-[9px] text-text-dim uppercase tracking-wider">HARDWARE ENVELOPE</div>
                      <div className="text-led font-bold text-xs mt-0.5">
                        {selectedProject.metrics.throughputOrPower}
                      </div>
                    </div>

                    <div className="border border-[#1E2330] bg-[#0B0D12] p-2">
                      <div className="text-[9px] text-text-dim uppercase tracking-wider">ISOLATION BOUNDARY</div>
                      <div className="text-text-main font-bold text-xs mt-0.5 truncate">
                        {selectedProject.metrics.boundary}
                      </div>
                    </div>
                  </div>

                  {/* 4. Trade-Off Analysis & Highlights */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2.5 pt-1">
                    <div className="lg:col-span-2 border border-[#1E2330] bg-[#0B0D12] p-3 space-y-1">
                      <div className="font-mono text-[10px] text-copper font-bold uppercase tracking-wider">
                        ENGINEERING TRADE-OFF ANALYSIS
                      </div>
                      <p className="text-xs text-text-muted font-sans leading-relaxed">
                        {selectedProject.tradeoffs}
                      </p>
                    </div>

                    <div className="border border-[#1E2330] bg-[#0B0D12] p-3 space-y-1">
                      <div className="font-mono text-[10px] text-cyan font-bold uppercase tracking-wider">
                        SYSTEM HIGHLIGHTS
                      </div>
                      <ul className="space-y-1 text-xs text-text-muted font-sans">
                        {selectedProject.technicalHighlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-1">
                            <ArrowRight className="w-3 h-3 text-cyan shrink-0 mt-0.5" />
                            <span className="truncate">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Anodized Aluminum Bottom Chin Bar */}
          <div className="bg-gradient-to-r from-[#181C26] via-[#222836] to-[#181C26] border-t border-[#353D4E] px-4 py-2 flex items-center justify-between font-mono text-[10px]">
            <div className="flex items-center gap-2 text-text-dim tracking-widest font-semibold">
              <span className="w-1.5 h-1.5 bg-copper rounded-full"></span>
              <span>ASUS PROART LAB MATRIX // PA32UCG-KVM</span>
            </div>
            <div className="flex items-center gap-3 text-text-muted">
              <span>EDID VER: 2.1</span>
              <span>CALIBRATED: DCI-P3 100%</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            2. PHYSICAL DESKTOP STAND (Z-INDEX: 15 - IN FRONT OF CABLE)
           ========================================================================= */}
        <div className="relative z-15 flex flex-col items-center">
          {/* Vertical Aluminum Neck */}
          <div className="w-28 h-12 bg-gradient-to-b from-[#2A2F3D] via-[#1E232E] to-[#141720] border-x border-[#384050] shadow-[0_10px_20px_rgba(0,0,0,0.6)] flex items-center justify-center">
            {/* Cable Pass-Through Hole */}
            <div className="w-8 h-4 rounded-full bg-[#080A0D] border border-[#2D3545] shadow-inner"></div>
          </div>

          {/* Pedestal Base Plate Sitting on the CAD Grid */}
          <div className="w-72 sm:w-96 h-3 bg-gradient-to-r from-[#181C24] via-[#2A303E] to-[#181C24] border-t border-[#3E475A] border-x border-[#2A2F3D] shadow-2xl"></div>
        </div>

        {/* =========================================================================
            3. SVG CABLE LAYER (Z-INDEX: 0 - SINK BEHIND MONITOR & STAND)
           ========================================================================= */}
        <div className="relative z-0 -mt-8 max-w-2xl mx-auto pointer-events-none">
          {/* Framer Motion Animated Braided Cable with Dynamic Cubic Bezier Interpolation */}
          <svg className="w-full h-20 overflow-visible" viewBox="0 0 400 55" fill="none">
            {/* Cable Drop Shadow */}
            <motion.path
              animate={{ d: cablePathD }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              stroke="rgba(0, 0, 0, 0.75)"
              strokeWidth="7"
              strokeLinecap="round"
            />
            {/* Copper Braided Cable Outer Sheathing */}
            <motion.path
              animate={{ d: cablePathD }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              stroke="#D97736"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeDasharray="4 2"
            />
            {/* Internal Signal Line Core */}
            <motion.path
              animate={{ d: cablePathD }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              stroke="#FFE17D"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            {/* Active Cable Snapped Connector Head Pip at Breakout Port */}
            <motion.circle
              animate={{ cx: targetX, cy: 52 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              r="4.5"
              fill="#00E599"
              stroke="#000"
              strokeWidth="1.2"
            />
            {/* Top Monitor Port Connector Collar Tucked Inside Monitor Cavity */}
            <motion.rect
              animate={{
                x: monitorPortX - 6,
                y: cableEndY - 4,
                opacity: syncStatus === 'unplugged' ? 0.7 : 1,
              }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              width="12"
              height="6"
              rx="1.5"
              fill="#1C212B"
              stroke="#D97736"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* =========================================================================
            4. BREAKOUT CONTROLLER CONSOLE DECK (Z-INDEX: 10 - ON TOP OF BENCH SHELF)
           ========================================================================= */}
        <div className="relative z-10 -mt-2 max-w-2xl mx-auto">
          <div className="relative bg-[#10131A] border-2 border-[#2A303E] shadow-[0_15px_30px_rgba(0,0,0,0.85)] p-3 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#1E2330] text-[10px] text-text-dim">
              <span className="text-copper font-bold tracking-wider uppercase">
                BREAKOUT INPUT CONSOLE // 4-CHANNEL HOT-PLUG
              </span>
              <span className="text-cyan">
                {isTransitioning ? 'ROUTING SIGNAL CABLE...' : 'STATUS: HOT-PLUG READY'}
              </span>
            </div>

            {/* 4 Tactile Channel Push-Buttons on the Deck */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {PORTFOLIO_DATA.projects.map((proj, idx) => {
                const isSelected = idx === activeIndex;
                return (
                  <button
                    key={proj.id}
                    disabled={isTransitioning}
                    onClick={() => handleChannelSwitch(proj, idx)}
                    data-inspectable="true"
                    data-inspect-label={`KVM HOT-PLUG: ${proj.kvmChannel}`}
                    className={`tactile-button p-2.5 border text-left flex flex-col justify-between transition-all ${
                      isSelected
                        ? 'border-copper bg-[#1F2532] text-text-main font-bold shadow-md tactile-button-pressed'
                        : 'border-[#262C3A] bg-[#0A0C10] text-text-muted hover:border-chamfer-active hover:text-text-main'
                    } ${isTransitioning ? 'opacity-80 cursor-wait' : ''}`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-copper text-[11px] font-bold">{proj.kvmChannel}</span>
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isSelected
                            ? syncStatus === 'locked'
                              ? 'bg-led shadow-[0_0_8px_#00E599]'
                              : 'bg-gold shadow-[0_0_8px_#E85D04]'
                            : 'bg-[#252A36]'
                        }`}
                      ></span>
                    </div>
                    <div className="text-[11px] font-sans font-semibold truncate text-text-main">
                      {proj.name}
                    </div>
                    <div className="text-[9px] text-text-dim truncate">
                      {proj.category.split('(')[0].trim()}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
