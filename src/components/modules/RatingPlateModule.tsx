import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { audioEngine } from '@/lib/audioEngine';
import { 
  CheckCircle2, 
  ChevronRight,
  Radio
} from 'lucide-react';

export const RatingPlateModule: React.FC = () => {
  const [isDossierOpen, setIsDossierOpen] = useState(false);

  const toggleDossier = () => {
    audioEngine.playRelayClick();
    setIsDossierOpen((prev) => !prev);
  };

  return (
    <section id="badge" className="relative">
      {/* =========================================================================
          PHYSICAL LASER-ENGRAVED ANODIZED ALUMINUM RATING BADGE
          (Rests directly on the blue silicone mat, secured by corner Torx screws)
         ========================================================================= */}
      <div
        data-inspectable="true"
        data-inspect-label="CHASSIS RATING PLATE"
        className="relative border border-[#2D3342] shadow-[0_16px_36px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.08)] p-6 sm:p-8 overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #181B22 0%, #12141A 50%, #0E1014 100%)',
        }}
      >
        {/* 4 Physical CNC Torx Mounting Screws in Corners */}
        <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 rounded-full bg-[#222733] border border-[#3E465A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.8)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#0A0C10] rotate-45 border border-[#141822]"></div>
        </div>
        <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 rounded-full bg-[#222733] border border-[#3E465A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.8)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#0A0C10] rotate-45 border border-[#141822]"></div>
        </div>
        <div className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 rounded-full bg-[#222733] border border-[#3E465A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.8)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#0A0C10] rotate-45 border border-[#141822]"></div>
        </div>
        <div className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 rounded-full bg-[#222733] border border-[#3E465A] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_1px_2px_rgba(0,0,0,0.8)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-[#0A0C10] rotate-45 border border-[#141822]"></div>
        </div>

        {/* Brushed Metal Fine Linear Highlights */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0, transparent 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 3px)',
          }}
        ></div>

        {/* Stamped Content Area */}
        <div className="relative space-y-6">
          {/* Top Header Silkscreen Strip */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#232834] pb-3 gap-2 font-mono text-[10px] sm:text-[11px] text-text-dim tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-copper rounded-xs"></span>
              <span className="text-text-muted font-bold">
                MODEL: ADHITHYA-S // SPEC: SYS-ARCH-LNX // REV: 2026.04
              </span>
            </div>
            <div className="text-copper font-semibold">
              SERIAL: SN-240701017
            </div>
          </div>

          {/* Primary Engraved Identity Header with Angled QC Stamped Badge */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="font-mono text-[10px] text-text-dim tracking-widest uppercase">
                HARDWARE & SYSTEMS ENGINEERING SPECIFICATION
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans bg-clip-text text-transparent bg-gradient-to-r from-[#FFFFFF] via-[#E2E8F0] to-[#94A3B8]">
                {PORTFOLIO_DATA.profile.name}
              </h1>
              <div className="font-mono text-xs sm:text-sm text-copper font-bold tracking-wide">
                SYSTEMS & HARDWARE ARCHITECT // LOW-LEVEL KERNEL & EDGE AI
              </div>
            </div>

            {/* Angled Stamped Inspection Badge */}
            <div className="shrink-0 -rotate-3 border border-copper/70 bg-[#16120D] px-3.5 py-2 shadow-[0_4px_12px_rgba(217,119,54,0.15)]">
              <div className="flex items-center gap-2 font-mono text-[10px] text-copper font-bold tracking-wider">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-led opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-led"></span>
                </span>
                <span>QC PASSED // LAB CALIBRATED // BATCH 2026</span>
              </div>
              <div className="text-[9px] font-mono text-text-dim mt-0.5 text-right">
                STATUS: {PORTFOLIO_DATA.profile.qcStatus}
              </div>
            </div>
          </div>

          {/* Tabular Silkscreen Specification Table (Separated by Fine 1px Lines) */}
          <div className="border-t border-[#232834] divide-y divide-[#232834] font-mono text-xs">
            {/* Row 1: Operating Environment */}
            <div className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 items-baseline">
              <div className="md:col-span-4 text-copper font-bold text-[11px] tracking-wider flex items-center gap-2">
                <span>[ OPERATING ENVIRONMENT ]</span>
              </div>
              <div className="md:col-span-8 text-text-main font-sans text-xs leading-relaxed">
                CachyOS / Arch Linux x86-64-v4 <span className="text-copper font-mono text-[11px] font-bold">//</span> BORE & EEVDF Low-Latency Schedulers <span className="text-copper font-mono text-[11px] font-bold">//</span> Limine Direct Bootloader & Fish Shell
              </div>
            </div>

            {/* Row 2: Transit Systems Telemetry */}
            <div className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 items-baseline">
              <div className="md:col-span-4 text-cyan font-bold text-[11px] tracking-wider flex items-center gap-2">
                <span>[ TRANSIT SYSTEMS TELEMETRY ]</span>
              </div>
              <div className="md:col-span-8 text-text-main font-sans text-xs leading-relaxed">
                Chennai Metro Rail Limited (CMRL) <span className="text-cyan font-mono text-[11px] font-bold">//</span> Mass Transit Signaling, Commuter Flow Density & SCADA System Telemetry
              </div>
            </div>

            {/* Row 3: Embedded Edge Runtimes */}
            <div className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 items-baseline">
              <div className="md:col-span-4 text-led font-bold text-[11px] tracking-wider flex items-center gap-2">
                <span>[ EMBEDDED EDGE RUNTIMES ]</span>
              </div>
              <div className="md:col-span-8 text-text-main font-sans text-xs leading-relaxed">
                Eazythings Technology <span className="text-led font-mono text-[11px] font-bold">//</span> Quantized INT8 TinyML Microcontroller Deployment & Ultra-Low-Power Wake Gating
              </div>
            </div>

            {/* Row 4: Core Engineering Philosophy */}
            <div className="py-3.5 grid grid-cols-1 md:grid-cols-12 gap-2 items-baseline">
              <div className="md:col-span-4 text-gold font-bold text-[11px] tracking-wider flex items-center gap-2">
                <span>[ BENCHMARK DISCIPLINE ]</span>
              </div>
              <div className="md:col-span-8 text-text-muted font-sans text-xs leading-relaxed">
                Zero AI API Wrappers • Local Deterministic Sandboxes (&lt;50ms) • Hardware Thermal & Silicon Profiling
              </div>
            </div>
          </div>

          {/* Expandable Engineering Dossier & Calibration Report */}
          <div className="pt-2 border-t border-[#232834]">
            <div className="flex items-center justify-between">
              <button
                onClick={toggleDossier}
                data-inspectable="true"
                data-inspect-label="TOGGLE DOSSIER DETAILS"
                className="flex items-center gap-2 text-xs font-mono text-copper hover:text-gold transition-colors py-1 font-semibold"
              >
                <ChevronRight
                  className={`w-3.5 h-3.5 transition-transform duration-150 ${
                    isDossierOpen ? 'rotate-90' : ''
                  }`}
                />
                <span>
                  {isDossierOpen
                    ? '[ CLOSE PRACTICUM DELIVERABLES & CALIBRATION DOSSIER ]'
                    : '[ INSPECT PRACTICUM DELIVERABLES & CALIBRATION DOSSIER ]'}
                </span>
              </button>

              <div className="flex items-center gap-2 font-mono text-[10px] text-text-dim hidden sm:inline-flex">
                <Radio className="w-3 h-3 text-led" />
                <span>CALIBRATION: 2026.04.14 // LAB VERIFIED</span>
              </div>
            </div>

            {isDossierOpen && (
              <div className="mt-4 p-4 border border-[#262C3A] bg-[#0A0C10] font-mono text-xs space-y-4 leading-relaxed shadow-inner">
                {/* Practicum Deliverables Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PORTFOLIO_DATA.internships.map((intern, idx) => (
                    <div key={idx} className="border border-[#222734] bg-[#0D1016] p-3.5 space-y-2">
                      <div className="flex items-center justify-between border-b border-[#1E2330] pb-1.5 text-[11px]">
                        <span className="text-copper font-bold">{intern.organization}</span>
                        <span className="text-text-dim text-[10px]">{intern.period}</span>
                      </div>
                      <div className="text-text-main font-sans text-xs font-semibold">
                        {intern.role}
                      </div>
                      <ul className="space-y-1 text-[11px] text-text-muted font-sans pt-1">
                        {intern.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5">
                            <span className="text-copper font-mono text-[10px] mt-0.5">▸</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-[#1E2330] text-[10px] text-cyan font-mono">
                        STAMP: {intern.telemetryStamp}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Architecture Guardrail Statement */}
                <div className="p-3 border border-[#222734] bg-[#08090C] space-y-2">
                  <div className="text-text-main font-semibold flex items-center gap-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-led" />
                    HARDWARE-FIRST SYSTEMS DISCIPLINE
                  </div>
                  <p className="text-text-muted font-sans text-xs">
                    Engineering is not about bundling third-party cloud APIs into web wrappers. It begins at the physical level: how silicon dissipates heat, how audio transducers move air, how subpixels radiate light, how the Linux kernel schedules execution threads, and how memory boundaries prevent exfiltration.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
