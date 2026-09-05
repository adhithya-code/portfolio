import React, { useState } from 'react';
import { PORTFOLIO_DATA, HardwareRig } from '@/data/portfolioData';
import { audioEngine } from '@/lib/audioEngine';
import { 
  Laptop, 
  Headphones, 
  Monitor, 
  Cpu, 
  Flame, 
  Sliders, 
  Activity, 
  Crosshair,
  ShieldCheck
} from 'lucide-react';

export const TeardownBlueprintsModule: React.FC = () => {
  const [selectedRigId, setSelectedRigId] = useState<string>(PORTFOLIO_DATA.hardwareRigs[0].id);
  const [activeZoneIndex, setActiveZoneIndex] = useState<number | null>(0);

  const selectedRig: HardwareRig =
    PORTFOLIO_DATA.hardwareRigs.find((r) => r.id === selectedRigId) || PORTFOLIO_DATA.hardwareRigs[0];

  const handleSelectRig = (rigId: string) => {
    audioEngine.playRelayClick();
    setSelectedRigId(rigId);
    setActiveZoneIndex(0);
  };

  const handleSelectZone = (index: number) => {
    audioEngine.playRotaryTick();
    setActiveZoneIndex(index);
  };

  const getRigIcon = (id: string) => {
    if (id === 'zenbook-oled') return <Laptop className="w-4 h-4" />;
    if (id === 'momentum-4') return <Headphones className="w-4 h-4" />;
    return <Monitor className="w-4 h-4" />;
  };

  const activeZone = activeZoneIndex !== null ? selectedRig.inspectableZones[activeZoneIndex] : null;

  return (
    <section id="teardowns" className="space-y-4">
      {/* Hardware Rig Switcher Tabs Resting Directly on the Mat */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {PORTFOLIO_DATA.hardwareRigs.map((rig) => {
          const isSelected = rig.id === selectedRigId;
          return (
            <button
              key={rig.id}
              onClick={() => handleSelectRig(rig.id)}
              data-inspectable="true"
              data-inspect-label={rig.name}
              className={`tactile-button p-3 border text-left font-mono transition-all flex items-center gap-3 ${
                isSelected
                  ? 'border-copper bg-[#181D26] text-text-main font-semibold shadow-lg tactile-button-pressed'
                  : 'border-[#262B36] bg-[#0A0C10] text-text-muted hover:border-copper/60 hover:text-text-main'
              }`}
            >
              <div
                className={`p-2 border ${
                  isSelected
                    ? 'border-copper/40 bg-copper/10 text-copper'
                    : 'border-[#232732] bg-[#08090C] text-text-dim'
                }`}
              >
                {getRigIcon(rig.id)}
              </div>
              <div className="truncate">
                <div className="text-xs font-bold font-sans tracking-tight truncate">
                  {rig.name}
                </div>
                <div className="text-[10px] text-text-dim truncate">
                  {rig.classification.split('//')[0].trim()}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Full Wide-Format Blueprint Viewport & Telemetry Inspector (Rests Directly on Mat) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* EXPANSIVE 1:1 CAD BLUEPRINT VIEWPORT (7 cols, 540px min-height) */}
        <div className="lg:col-span-7 border-2 border-[#2A313E] bg-[#07090D] p-4 sm:p-5 relative flex flex-col justify-between min-h-[540px] shadow-[0_16px_36px_rgba(0,0,0,0.85)]">
          {/* Top Blueprint Silkscreen Label */}
          <div className="flex items-center justify-between border-b border-[#1E2330] pb-2.5 font-mono text-xs">
            <div className="flex items-center gap-2 text-cyan">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span className="font-bold">CAD BLUEPRINT: {selectedRig.name.toUpperCase()}</span>
            </div>
            <span className="text-[10px] text-text-dim">ORTHO_TOP_DOWN // 1:1 SCALE</span>
          </div>

          {/* Expansive SVG Vector Geometry Viewport */}
          <div className="relative my-3 flex items-center justify-center min-h-[420px]">
            <div className="w-full h-[420px] relative border border-dashed border-[#222734] bg-[#080B10] p-3 flex items-center justify-center overflow-hidden">
              {/* 1. ASUS ZENBOOK 14 OLED (EXPANSIVE 1:1 TOP-DOWN BLUEPRINT) */}
              {selectedRig.id === 'zenbook-oled' && (
                <svg className="w-full h-full text-chamfer" viewBox="0 0 460 380" fill="none" stroke="currentColor">
                  {/* TOP HALF: 16:10 LUMINA OLED DISPLAY LID */}
                  <rect x="30" y="15" width="400" height="150" rx="4" strokeWidth="2" stroke="#3A4356" fill="#0F1218" />
                  <rect x="42" y="24" width="376" height="132" rx="2" strokeWidth="1.2" stroke="#00F0FF" strokeOpacity="0.5" fill="rgba(0, 240, 255, 0.03)" />
                  <rect x="210" y="17" width="40" height="5" rx="2" fill="#1C212B" stroke="#3A4356" />
                  <circle cx="225" cy="19.5" r="1.5" fill="#00E599" />
                  <circle cx="235" cy="19.5" r="1.5" fill="#E85D04" />
                  <line x1="42" y1="55" x2="418" y2="55" stroke="#00F0FF" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.25" />
                  <line x1="42" y1="90" x2="418" y2="90" stroke="#00F0FF" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.25" />
                  <line x1="42" y1="125" x2="418" y2="125" stroke="#00F0FF" strokeWidth="0.5" strokeDasharray="3 3" strokeOpacity="0.25" />
                  <text x="145" y="94" fill="#00F0FF" fontSize="10" fontFamily="monospace" fontWeight="bold" opacity="0.85">
                    14" 2.8K 120Hz LUMINA OLED (0.2ms)
                  </text>

                  {/* Dual Solid Hinge Joints */}
                  <rect x="80" y="166" width="50" height="8" rx="1.5" fill="#1E232E" stroke="#3A4356" />
                  <rect x="330" y="166" width="50" height="8" rx="1.5" fill="#1E232E" stroke="#3A4356" />

                  {/* BOTTOM HALF: CHASSIS BASE & KEYBOARD DECK */}
                  <rect x="20" y="176" width="420" height="190" rx="4" strokeWidth="2" stroke="#3A4356" fill="#0D1016" />

                  {/* 75% ANSI Keyboard Matrix Well */}
                  <rect x="40" y="186" width="380" height="95" rx="3" strokeWidth="1.2" stroke="#262B36" fill="#08090D" />
                  {Array.from({ length: 5 }).map((_, rIdx) => (
                    <g key={rIdx}>
                      {Array.from({ length: 14 }).map((_, cIdx) => (
                        <rect
                          key={cIdx}
                          x={48 + cIdx * 26}
                          y={192 + rIdx * 17}
                          width="22"
                          height="13"
                          rx="1.5"
                          stroke="#1E2330"
                          strokeWidth="1"
                          fill="#12151C"
                        />
                      ))}
                    </g>
                  ))}

                  {/* Glass Ergonomic Touchpad */}
                  <rect x="160" y="290" width="140" height="68" rx="3" strokeWidth="1.2" stroke="#3A4356" fill="#121620" />
                  <text x="205" y="328" fill="#8B949E" fontSize="9" fontFamily="monospace">TOUCHPAD</text>

                  {/* Intel Core Ultra 7 155H Package Tile */}
                  <rect x="60" y="200" width="80" height="65" rx="2" strokeWidth="2" stroke="#00F0FF" fill="rgba(0, 240, 255, 0.15)" />
                  <text x="70" y="222" fill="#00F0FF" fontSize="9" fontFamily="monospace" fontWeight="bold">INTEL U7</text>
                  <text x="70" y="235" fill="#00F0FF" fontSize="7" fontFamily="monospace">155H TILE</text>
                  <text x="70" y="247" fill="#00E599" fontSize="7" fontFamily="monospace">NPU ACTIVE</text>

                  {/* Sintered Copper Dual Heatpipes */}
                  <path d="M140 215 L260 215 L260 235 L330 235" stroke="#D97736" strokeWidth="5" strokeLinecap="round" />
                  <path d="M140 235 L245 235 L245 250 L330 250" stroke="#D97736" strokeWidth="5" strokeLinecap="round" />

                  {/* Radial Blower Fan Impeller */}
                  <circle cx="355" cy="242" r="24" stroke="#E85D04" strokeWidth="2" fill="rgba(232, 93, 4, 0.18)" />
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={i}
                      x1="355"
                      y1="242"
                      x2={355 + 20 * Math.cos((i * Math.PI) / 4)}
                      y2={242 + 20 * Math.sin((i * Math.PI) / 4)}
                      stroke="#E85D04"
                      strokeWidth="1.2"
                    />
                  ))}

                  {/* 75Wh Lithium Battery Bank */}
                  <rect x="40" y="290" width="105" height="68" rx="2" stroke="#2D3545" strokeWidth="1" fill="#0A0D13" />
                  <text x="50" y="328" fill="#8B949E" fontSize="8" fontFamily="monospace">75Wh BATTERY</text>
                </svg>
              )}

              {/* 2. SENNHEISER MOMENTUM 4 (EXPANSIVE OVER-EAR BLUEPRINT) */}
              {selectedRig.id === 'momentum-4' && (
                <svg className="w-full h-full text-chamfer" viewBox="0 0 460 380" fill="none" stroke="currentColor">
                  {/* Fabric Headband Arc */}
                  <path d="M110 210 C110 60, 350 60, 350 210" stroke="#3A4356" strokeWidth="18" strokeLinecap="round" fill="none" />
                  <path d="M130 180 C130 85, 330 85, 330 180" stroke="#262B36" strokeWidth="6" strokeDasharray="6 3" fill="none" />
                  <text x="175" y="70" fill="#8B949E" fontSize="9" fontFamily="monospace" fontWeight="bold">FABRIC PADDED ARCH</text>

                  {/* Metal Pivot Yokes */}
                  <path d="M110 195 L110 240" stroke="#D97736" strokeWidth="5" strokeLinecap="round" />
                  <path d="M350 195 L350 240" stroke="#D97736" strokeWidth="5" strokeLinecap="round" />
                  <circle cx="110" cy="225" r="6" fill="#181D26" stroke="#D97736" strokeWidth="2" />
                  <circle cx="350" cy="225" r="6" fill="#181D26" stroke="#D97736" strokeWidth="2" />

                  {/* Left Transducer Cutaway */}
                  <rect x="65" y="215" width="90" height="130" rx="28" strokeWidth="2" stroke="#3A4356" fill="#0F1218" />
                  <circle cx="110" cy="280" r="32" stroke="#00F0FF" strokeWidth="2" fill="rgba(0, 240, 255, 0.1)" />
                  <circle cx="110" cy="280" r="16" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="3 3" />
                  <text x="88" y="284" fill="#00F0FF" fontSize="9" fontFamily="monospace" fontWeight="bold">42mm DRV</text>

                  {/* Right Hybrid ANC DSP */}
                  <rect x="305" y="215" width="90" height="130" rx="28" strokeWidth="2" stroke="#3A4356" fill="#0F1218" />
                  <rect x="325" y="250" width="50" height="55" rx="3" stroke="#00E599" strokeWidth="2" fill="rgba(0, 229, 153, 0.12)" />
                  <text x="333" y="278" fill="#00E599" fontSize="9" fontFamily="monospace" fontWeight="bold">ANC DSP</text>
                  <text x="331" y="292" fill="#00E599" fontSize="7" fontFamily="monospace">60H BATT</text>

                  {/* Acoustic Baffle Vectors */}
                  <line x1="110" y1="245" x2="165" y2="280" stroke="#E85D04" strokeWidth="2" strokeDasharray="4 2" />
                  <line x1="350" y1="245" x2="295" y2="280" stroke="#E85D04" strokeWidth="2" strokeDasharray="4 2" />
                </svg>
              )}

              {/* 3. CUSTOM DESKTOP & WORKSTATION (EXPANSIVE BLUEPRINT) */}
              {selectedRig.id === 'custom-desktop' && (
                <svg className="w-full h-full text-chamfer" viewBox="0 0 460 380" fill="none" stroke="currentColor">
                  {/* Primary 16:10 4K OLED Display */}
                  <rect x="30" y="30" width="220" height="145" rx="3" strokeWidth="2" stroke="#00F0FF" fill="rgba(0, 240, 255, 0.05)" />
                  <text x="75" y="105" fill="#00F0FF" fontSize="10" fontFamily="monospace" fontWeight="bold">4K OLED 120Hz REF</text>
                  <line x1="140" y1="175" x2="140" y2="205" stroke="#3A4356" strokeWidth="4" />
                  <rect x="100" y="205" width="80" height="8" fill="#262B36" />

                  {/* Secondary Fast IPS Monitor */}
                  <rect x="270" y="30" width="160" height="145" rx="3" strokeWidth="2" stroke="#00E599" fill="rgba(0, 229, 153, 0.05)" />
                  <text x="300" y="105" fill="#00E599" fontSize="10" fontFamily="monospace" fontWeight="bold">240Hz FAST IPS</text>
                  <line x1="350" y1="175" x2="350" y2="205" stroke="#3A4356" strokeWidth="4" />
                  <rect x="315" y="205" width="70" height="8" fill="#262B36" />

                  {/* Logitech G502 HERO Mouse */}
                  <path d="M200 235 C200 220, 265 220, 265 235 L272 320 C272 345, 192 345, 192 320 Z" stroke="#D97736" strokeWidth="2" fill="#14171E" />
                  <path d="M192 270 C175 285, 175 320, 192 325 Z" stroke="#D97736" strokeWidth="1.5" fill="#10131A" />
                  <rect x="227" y="230" width="11" height="24" rx="3" fill="#262B36" stroke="#D97736" strokeWidth="1.5" />
                  <circle cx="232" cy="290" r="7" stroke="#E85D04" strokeWidth="2" fill="#E85D04" fillOpacity="0.4" />
                  <text x="202" y="360" fill="#EDEDED" fontSize="9" fontFamily="monospace" fontWeight="bold">1000Hz HERO SENSOR</text>
                </svg>
              )}

              {/* Interactive Hot-Zone Pins */}
              {selectedRig.inspectableZones.map((zone, zIdx) => {
                const isActive = activeZoneIndex === zIdx;
                return (
                  <button
                    key={zIdx}
                    onClick={() => handleSelectZone(zIdx)}
                    data-inspectable="true"
                    data-inspect-label={zone.title}
                    style={{
                      left: `${zone.coord.x}%`,
                      top: `${zone.coord.y}%`,
                    }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-transform hover:scale-125 z-20 ${
                      isActive ? 'scale-110' : ''
                    }`}
                  >
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          isActive ? 'bg-copper' : 'bg-cyan'
                        }`}
                      ></span>
                      <span
                        className={`relative inline-flex rounded-full h-4 w-4 border text-[9px] font-mono items-center justify-center font-bold ${
                          isActive
                            ? 'border-white bg-copper text-chassis shadow-[0_0_12px_#D97736]'
                            : 'border-cyan bg-chassis text-cyan'
                        }`}
                      >
                        {zIdx + 1}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Hot-Zone Quick Selector Bar */}
          <div className="border-t border-[#1E2330] pt-2.5 flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
            <span className="text-text-dim text-[11px]">INSPECT HOT-ZONE:</span>
            <div className="flex flex-wrap gap-1.5">
              {selectedRig.inspectableZones.map((zone, zIdx) => (
                <button
                  key={zIdx}
                  onClick={() => handleSelectZone(zIdx)}
                  data-inspectable="true"
                  data-inspect-label={zone.title}
                  className={`tactile-button px-2.5 py-1 text-[11px] border transition-colors ${
                    activeZoneIndex === zIdx
                      ? 'border-copper bg-copper text-chassis font-bold tactile-button-pressed'
                      : 'border-[#2D3340] bg-[#12151B] text-text-muted hover:text-text-main'
                  }`}
                >
                  0{zIdx + 1}. {zone.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Deep R&D Verdict & Tuning Parameters Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-3 font-mono text-xs">
          {/* Active Inspectable Hot-Zone Card */}
          {activeZone && (
            <div className="border border-copper/70 bg-[#161B23] p-4 space-y-2 relative shadow-md">
              <div className="flex items-center justify-between border-b border-[#232834] pb-2">
                <div className="flex items-center gap-1.5 text-copper font-bold">
                  <Crosshair className="w-3.5 h-3.5" />
                  <span>[ZONE 0{(activeZoneIndex || 0) + 1}] {activeZone.title.toUpperCase()}</span>
                </div>
                <span className="text-[10px] text-text-dim">RETICLE LOCKED</span>
              </div>

              <div className="text-cyan font-semibold text-xs">
                SPEC: {activeZone.spec}
              </div>
              <p className="text-text-muted font-sans text-xs leading-relaxed">
                {activeZone.detail}
              </p>
            </div>
          )}

          {/* Rig Specifications Summary */}
          <div className="border border-[#262C3A] bg-[#0A0C10] p-4 space-y-3 shadow-md">
            <div className="text-text-dim text-[10px] uppercase tracking-wider flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-copper" />
              Physical Die & Architecture
            </div>
            <div className="text-text-main font-semibold leading-snug">
              {selectedRig.dieArchitecture}
            </div>

            <div className="text-text-dim text-[10px] uppercase tracking-wider flex items-center gap-1.5 pt-1 border-t border-[#1E2330]">
              <Flame className="w-3.5 h-3.5 text-gold" />
              Power, Dissipation & Transducers
            </div>
            <div className="text-text-main font-semibold leading-snug">
              {selectedRig.powerAndThermals}
            </div>
          </div>

          {/* Custom Tuning Parameters */}
          <div className="border border-[#262C3A] bg-[#0A0C10] p-4 space-y-2.5 shadow-md">
            <div className="text-text-dim text-[10px] uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-cyan" />
              Firmware Modifications & Tuning Parameters
            </div>
            <ul className="space-y-1.5 text-xs text-text-muted font-sans">
              {selectedRig.tuningOffsets.map((offset, oIdx) => (
                <li key={oIdx} className="flex items-start gap-1.5">
                  <span className="text-copper font-mono text-[11px] mt-0.5">▸</span>
                  <span>{offset}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Personal R&D Engineering Verdict */}
          <div className="border border-[#262C3A] bg-[#08090C] p-4 space-y-2 shadow-md">
            <div className="flex items-center gap-1.5 text-led font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>LAB TEARDOWN & R&D VERDICT</span>
            </div>
            <p className="text-xs text-text-muted font-sans leading-relaxed">
              {selectedRig.rdVerdict}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
