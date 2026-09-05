import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { audioEngine } from '@/lib/audioEngine';
import { 
  Copy, 
  Check, 
  ExternalLink, 
  FileText, 
  Github, 
  Linkedin, 
  Radio
} from 'lucide-react';

export const RearIoPanelModule: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    audioEngine.playRelayClick();
    navigator.clipboard.writeText(PORTFOLIO_DATA.endpoints.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePortClick = () => {
    audioEngine.playPortConnect();
  };

  return (
    <section id="io-panel" className="space-y-4">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-chamfer pb-2.5 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-copper font-mono text-xs font-semibold px-2 py-0.5 border border-copper/30 bg-copper/10">
            MODULE 11
          </span>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-text-main font-sans">
            Machined Rear Motherboard I/O Shield & Contact Endpoints
          </h2>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-text-muted">
          <span className="text-text-dim text-[11px]">SPEC: UNIFIED CNC STAMPED BACKPLATE</span>
        </div>
      </div>

      {/* =========================================================================
          SINGLE, UNIFIED MACHINED BRUSHED-STEEL REAR I/O SHIELD (NOT 4 CARDS)
         ========================================================================= */}
      <div
        className="relative border-2 border-[#384252] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95),inset_0_1px_1px_rgba(255,255,255,0.18)]"
        style={{
          background: 'linear-gradient(180deg, #1C2028 0%, #141720 40%, #101217 100%)',
        }}
      >
        {/* 4 Stamped Silver/Black Phillips-Head Screws in the Corners */}
        <div className="screw-head absolute top-3 left-3"></div>
        <div className="screw-head absolute top-3 right-3"></div>
        <div className="screw-head absolute bottom-3 left-3"></div>
        <div className="screw-head absolute bottom-3 right-3"></div>

        {/* Brushed Metal Linear Highlights Texture */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0, transparent 2px, rgba(255,255,255,0.06) 2px, rgba(255,255,255,0.06) 3px)',
          }}
        ></div>

        {/* Stamped Laser Silkscreen Top Header Bar */}
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#2A313E] pb-3 mb-6 gap-3 font-mono text-xs">
          <div>
            <div className="text-copper font-bold tracking-widest text-[11px] uppercase">
              ASUS PROART // HIGH-BANDWIDTH CONTACT SHIELD
            </div>
            <div className="text-text-muted text-[11px] mt-0.5 font-sans">
              Single continuous backplate. Click any recessed port socket directly to dispatch signals.
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] text-text-dim">
            <span className="px-2 py-0.5 border border-[#2D3545] bg-[#0E1117] text-text-muted">
              CHASSIS GROUND: 0.0Ω
            </span>
            <span className="px-2 py-0.5 border border-led/40 bg-led/10 text-led font-semibold">
              ESD 15kV RATED
            </span>
          </div>
        </div>

        {/* =========================================================================
            TRUE RECESSED PORT SOCKETS DIRECTLY STAMPED INTO THE SINGLE PLATE
           ========================================================================= */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* =====================================================================
              1. RECESSED USB-C / THUNDERBOLT 4 SOCKET (EMAIL)
             ===================================================================== */}
          <a
            href={`mailto:${PORTFOLIO_DATA.endpoints.email}`}
            onClick={handlePortClick}
            data-inspectable="true"
            data-inspect-label="RECESSED USB-C PORT"
            className="group block p-4 border border-[#2A313E] bg-[#0A0C10] hover:border-copper transition-all relative shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)]"
          >
            {/* Silkscreen Label */}
            <div className="flex items-center justify-between font-mono text-[9px] text-text-dim pb-2 border-b border-[#1E2330]">
              <span className="text-copper font-bold">PORT 01</span>
              <span>40 Gbps // TB4</span>
            </div>

            {/* Recessed Pill-Shaped USB-C Port Cavity */}
            <div className="my-5 flex flex-col items-center justify-center space-y-2">
              <div className="w-24 h-11 rounded-[12px] bg-[#141822] border border-[#353D4E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.8)] flex items-center justify-center p-1 group-hover:border-copper transition-colors">
                <div className="w-full h-full rounded-[8px] bg-[#040507] shadow-[inset_0_3px_8px_rgba(0,0,0,0.95)] flex items-center justify-center">
                  {/* Central Gold / Copper Contact Tongue */}
                  <div className="w-12 h-2 bg-gradient-to-r from-copper via-gold to-copper rounded-xs flex items-center justify-evenly px-1">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="w-[1px] h-1.5 bg-[#FFE17D]"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Laser Stamped Silkscreen */}
              <div className="font-mono text-[10px] text-text-dim tracking-wider uppercase flex items-center gap-1">
                <span className="text-copper">⚡</span>
                <span>USB-C / TB4</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1E2330] text-center font-mono">
              <div className="text-xs font-bold font-sans text-text-main group-hover:text-copper transition-colors">
                DIRECT EMAIL
              </div>
              <div className="text-[9px] text-text-dim truncate mt-0.5">
                {PORTFOLIO_DATA.endpoints.email}
              </div>
            </div>
          </a>

          {/* =====================================================================
              2. RECESSED DISPLAYPORT 2.1 KEYED SOCKET (GITHUB)
             ===================================================================== */}
          <a
            href={PORTFOLIO_DATA.endpoints.github}
            target="_blank"
            rel="noreferrer"
            onClick={handlePortClick}
            data-inspectable="true"
            data-inspect-label="RECESSED DISPLAYPORT"
            className="group block p-4 border border-[#2A313E] bg-[#0A0C10] hover:border-cyan transition-all relative shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)]"
          >
            {/* Silkscreen Label */}
            <div className="flex items-center justify-between font-mono text-[9px] text-text-dim pb-2 border-b border-[#1E2330]">
              <span className="text-cyan font-bold">PORT 02</span>
              <span>80 Gbps // UHBR20</span>
            </div>

            {/* Recessed Asymmetrical Keyed DisplayPort Cavity */}
            <div className="my-5 flex flex-col items-center justify-center space-y-2">
              <div
                className="w-24 h-11 bg-[#141822] border border-[#353D4E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.8)] flex items-center justify-center p-1 group-hover:border-cyan transition-colors"
                style={{
                  clipPath: 'polygon(0 0, 80% 0, 100% 38%, 100% 100%, 0 100%)',
                }}
              >
                <div
                  className="w-full h-full bg-[#040507] shadow-[inset_0_3px_8px_rgba(0,0,0,0.95)] flex flex-col justify-between p-1"
                  style={{
                    clipPath: 'polygon(0 0, 80% 0, 100% 38%, 100% 100%, 0 100%)',
                  }}
                >
                  <div className="flex justify-evenly px-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="w-[1.5px] h-1.5 bg-[#FFD166]"></div>
                    ))}
                  </div>
                  <div className="w-full h-1 bg-[#10131A]"></div>
                  <div className="flex justify-evenly px-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className="w-[1.5px] h-1.5 bg-[#FFD166]"></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Laser Stamped Silkscreen */}
              <div className="font-mono text-[10px] text-text-dim tracking-wider uppercase flex items-center gap-1">
                <span className="text-cyan font-bold">P</span>
                <span>DISPLAYPORT 2.1</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1E2330] text-center font-mono">
              <div className="text-xs font-bold font-sans text-text-main group-hover:text-cyan transition-colors">
                GITHUB REPOS
              </div>
              <div className="text-[9px] text-text-dim truncate mt-0.5">
                github.com/adhithya-code
              </div>
            </div>
          </a>

          {/* =====================================================================
              3. RECESSED RJ45 10GbE METAL JACK WITH LIGHT PIPES (LINKEDIN)
             ===================================================================== */}
          <a
            href={PORTFOLIO_DATA.endpoints.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={handlePortClick}
            data-inspectable="true"
            data-inspect-label="RECESSED RJ45 10GbE PORT"
            className="group block p-4 border border-[#2A313E] bg-[#0A0C10] hover:border-led transition-all relative shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)]"
          >
            {/* Silkscreen Label & Dual LED Light Pipes */}
            <div className="flex items-center justify-between font-mono text-[9px] text-text-dim pb-2 border-b border-[#1E2330]">
              <span className="text-led font-bold">PORT 03</span>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[7px]">LNK</span>
                  <div className="w-2.5 h-1.5 bg-led rounded-2xs shadow-[0_0_6px_#00E599]"></div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[7px]">ACT</span>
                  <div className="w-2.5 h-1.5 bg-gold rounded-2xs animate-pulse shadow-[0_0_6px_#E85D04]"></div>
                </div>
              </div>
            </div>

            {/* Recessed Metal RJ45 Jack Frame */}
            <div className="my-5 flex flex-col items-center justify-center space-y-2">
              <div className="w-20 h-12 bg-[#141822] border border-[#353D4E] shadow-[inset_0_2px_4px_rgba(255,255,255,0.12),0_2px_6px_rgba(0,0,0,0.8)] flex flex-col items-center justify-between p-1.5 group-hover:border-led transition-colors">
                <div className="w-6 h-1.5 bg-[#040507] rounded-b-xs"></div>
                <div className="w-14 h-5 bg-[#040507] shadow-inner flex items-center justify-evenly px-1">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="w-[1.5px] h-3 bg-gradient-to-b from-[#FFE17D] to-[#997A15]"></div>
                  ))}
                </div>
              </div>

              {/* Laser Stamped Silkscreen */}
              <div className="font-mono text-[10px] text-text-dim tracking-wider uppercase flex items-center gap-1">
                <span>10GbE LAN // BASE-T</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1E2330] text-center font-mono">
              <div className="text-xs font-bold font-sans text-text-main group-hover:text-led transition-colors">
                LINKEDIN NETWORK
              </div>
              <div className="text-[9px] text-text-dim truncate mt-0.5">
                linkedin.com/in/adhithya-s
              </div>
            </div>
          </a>

          {/* =====================================================================
              4. THREADED BRASS SMA RF ANTENNA POSTS (RESUME PDF)
             ===================================================================== */}
          <a
            href={PORTFOLIO_DATA.endpoints.resumePdf}
            download
            onClick={handlePortClick}
            data-inspectable="true"
            data-inspect-label="THREADED SMA RF ANTENNA PORT"
            className="group block p-4 border border-[#2A313E] bg-[#0A0C10] hover:border-gold transition-all relative shadow-[inset_0_4px_12px_rgba(0,0,0,0.95)]"
          >
            {/* Silkscreen Label */}
            <div className="flex items-center justify-between font-mono text-[9px] text-text-dim pb-2 border-b border-[#1E2330]">
              <span className="text-gold font-bold">PORT 04</span>
              <span>SMA RF // 50Ω DOC_TX</span>
            </div>

            {/* Recessed Brass Knurled Nut & Threaded Coaxial Socket */}
            <div className="my-5 flex flex-col items-center justify-center space-y-2">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#8A5A13] via-[#E8B923] to-[#61420C] border border-[#FFE17D] shadow-[0_4px_10px_rgba(0,0,0,0.9)] flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                <div
                  className="w-full h-full rounded-full border border-[#61420C] flex items-center justify-center"
                  style={{
                    backgroundImage:
                      'repeating-conic-gradient(#E8B923 0deg 10deg, #8A5A13 10deg 20deg)',
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#120F05] border border-[#FFE17D] flex items-center justify-center shadow-inner">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFE17D] flex items-center justify-center shadow-[0_0_4px_#FFE17D]">
                      <div className="w-1 h-1 rounded-full bg-[#000]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laser Stamped Silkscreen */}
              <div className="font-mono text-[10px] text-text-dim tracking-wider uppercase flex items-center gap-1">
                <span className="text-gold">⚲</span>
                <span>SMA RF COAXIAL</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1E2330] text-center font-mono">
              <div className="text-xs font-bold font-sans text-text-main group-hover:text-gold transition-colors">
                RESUME (PDF)
              </div>
              <div className="text-[9px] text-text-dim truncate mt-0.5">
                Adhithya_S_Systems_Resume.pdf
              </div>
            </div>
          </a>
        </div>

        {/* =========================================================================
            INSTANT 1-CLICK ACTION ROW (FOR IMMEDIATE RECRUITMENT ACCESS)
           ========================================================================= */}
        <div className="relative z-10 pt-5 mt-6 border-t border-[#2A313E] flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-2 text-text-muted">
            <Radio className="w-3.5 h-3.5 text-copper" />
            <span className="text-[11px] font-bold">1-CLICK TEXT ACTIONS:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleCopyEmail}
              data-inspectable="true"
              data-inspect-label="COPY EMAIL TO CLIPBOARD"
              className="tactile-button flex items-center gap-1.5 px-3 py-1.5 border border-[#353D4E] bg-[#12161F] hover:border-copper text-text-main transition-colors text-[11px]"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-led" />
                  <span className="text-led font-semibold">EMAIL COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-copper" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>

            <a
              href={PORTFOLIO_DATA.endpoints.github}
              target="_blank"
              rel="noreferrer"
              data-inspectable="true"
              data-inspect-label="OPEN GITHUB REPO"
              className="tactile-button flex items-center gap-1.5 px-3 py-1.5 border border-[#353D4E] bg-[#12161F] hover:border-cyan text-text-main transition-colors text-[11px]"
            >
              <Github className="w-3.5 h-3.5 text-cyan" />
              <span>GITHUB</span>
              <ExternalLink className="w-3 h-3 text-text-dim" />
            </a>

            <a
              href={PORTFOLIO_DATA.endpoints.linkedin}
              target="_blank"
              rel="noreferrer"
              data-inspectable="true"
              data-inspect-label="OPEN LINKEDIN PROFILE"
              className="tactile-button flex items-center gap-1.5 px-3 py-1.5 border border-[#353D4E] bg-[#12161F] hover:border-led text-text-main transition-colors text-[11px]"
            >
              <Linkedin className="w-3.5 h-3.5 text-led" />
              <span>LINKEDIN</span>
              <ExternalLink className="w-3 h-3 text-text-dim" />
            </a>

            <a
              href={PORTFOLIO_DATA.endpoints.resumePdf}
              download
              data-inspectable="true"
              data-inspect-label="DOWNLOAD RESUME PDF"
              className="tactile-button flex items-center gap-1.5 px-3 py-1.5 border border-gold bg-[#241C10] hover:bg-gold hover:text-chassis text-gold font-semibold transition-colors text-[11px]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>DOWNLOAD RESUME</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
