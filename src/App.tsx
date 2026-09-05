import React, { useState, useEffect } from 'react';
import { CadGridCanvas } from './components/canvas/CadGridCanvas';
import { ReticleCursor } from './components/reticle/ReticleCursor';
import { HeaderNav } from './components/nav/HeaderNav';
import { RatingPlateModule } from './components/modules/RatingPlateModule';
import { KvmBenchModule } from './components/modules/KvmBenchModule';
import { TeardownBlueprintsModule } from './components/modules/TeardownBlueprintsModule';
import { MotherboardBusModule } from './components/modules/MotherboardBusModule';
import { RearIoPanelModule } from './components/modules/RearIoPanelModule';
import { WorkbenchParallaxProps } from './components/workbench/WorkbenchParallaxProps';
import { PORTFOLIO_DATA } from './data/portfolioData';
import { ChevronUp, ShieldCheck } from 'lucide-react';
import { audioEngine } from './lib/audioEngine';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('badge');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['badge', 'kvm', 'teardowns', 'bus', 'io-panel'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    audioEngine.playRelayClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0F3050] text-text-main font-sans selection:bg-copper/30 selection:text-white pb-16 overflow-x-hidden">
      {/* Background ESD Silicone Teardown Mat Canvas (with Varied Wells, Rulers & Traces) */}
      <CadGridCanvas />

      {/* Photorealistic Scroll-Linked Workbench Parallax Props */}
      <WorkbenchParallaxProps />

      {/* Optical Reticle Inspection Cursor Overlay */}
      <ReticleCursor />

      {/* Sticky Telemetry Header & Navigation */}
      <HeaderNav activeSection={activeSection} />

      {/* =========================================================================
          MAIN ENGINEERING WORKBENCH LAYOUT (RESTS DIRECTLY ON SILICONE MAT)
         ========================================================================= */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-8 sm:py-12 space-y-12 sm:space-y-16">
        {/* Module 10: Laser-Engraved Anodized Aluminum Rating Plate */}
        <RatingPlateModule />

        {/* Module 08: Standalone 4K Reference Display & Surface-Mounted KVM Console */}
        <section id="kvm">
          <KvmBenchModule />
        </section>

        {/* Module 07: 1:1 Orthographic CAD Blueprints & R&D Teardowns */}
        <TeardownBlueprintsModule />

        {/* Module 09: Motherboard Chipset Pinout & Skills Matrix */}
        <MotherboardBusModule />

        {/* Module 11: Single Stamped Brushed-Steel Motherboard Rear I/O Backplate */}
        <RearIoPanelModule />
      </main>

      {/* Engineering Footer & ESD Grounding Telemetry */}
      <footer className="relative z-10 border-t border-[#1E2E3E] bg-[#0A0C10]/95 mt-20 px-4 py-8 text-xs font-mono text-text-muted">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <span className="text-copper font-bold">
              [ {PORTFOLIO_DATA.profile.serialNumber} ]
            </span>
            <span className="text-text-dim">|</span>
            <span>{PORTFOLIO_DATA.profile.name} SYSTEMS ARCHITECTURE</span>
          </div>

          <div className="flex items-center space-x-6 text-[11px]">
            <div className="flex items-center gap-1.5 text-led">
              <ShieldCheck className="w-4 h-4 text-led" />
              <span>CHASSIS GROUND: 0.0Ω</span>
            </div>
            <div className="text-text-dim hidden sm:inline">
              NO AI WRAPPERS // 100% DETERMINISTIC TELEMETRY
            </div>
            <button
              onClick={scrollToTop}
              data-inspectable="true"
              data-inspect-label="SCROLL TO TOP OF CHASSIS"
              className="flex items-center gap-1 px-2.5 py-1 border border-[#2D3545] bg-[#12151B] hover:border-copper hover:text-copper transition-colors"
            >
              <span>TOP OF CHASSIS</span>
              <ChevronUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
