import React from 'react';
import { LttScrewdriver } from '../props/LttScrewdriver';

export const WorkbenchParallaxProps: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* =========================================================================
          1. WARM SPOTLIGHT RADIAL CONE (Projected from Top-Left Bench Lamp)
         ========================================================================= */}
      <div
        className="absolute top-0 left-0 w-full h-[1100px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 700px 500px at 15% 10%, rgba(255,250,235,0.12) 0%, rgba(255,250,235,0.03) 40%, transparent 80%)',
        }}
      />

      {/* =========================================================================
          2. REALISTIC OVERHEAD TOP-DOWN TASK/BENCH LAMP (Top-Left Corner, Absolute)
         ========================================================================= */}
      <div
        className="hidden md:block absolute top-0 left-0 pointer-events-auto"
        data-inspectable="true"
        data-inspect-label="OVERHEAD 5000K LED TASK LAMP // DIE-CAST ALUMINUM"
        style={{
          filter: 'drop-shadow(8px 18px 26px rgba(0, 0, 0, 0.85))',
        }}
      >
        <svg width="220" height="180" viewBox="0 0 220 180" fill="none">
          {/* Desk Edge Heavy C-Clamp Base */}
          <rect x="4" y="4" width="28" height="42" rx="3" fill="#12151C" stroke="#2D3545" strokeWidth="1.2" />
          <circle cx="18" cy="25" r="5" fill="#1E2430" stroke="#4A5568" strokeWidth="1" />
          <circle cx="18" cy="25" r="2" fill="#D97736" />

          {/* Articulated Double-Strut Armature (Top-Down Orthographic View) */}
          <path d="M 28 20 L 95 65" stroke="#1C212B" strokeWidth="7" strokeLinecap="round" />
          <path d="M 28 30 L 95 75" stroke="#1C212B" strokeWidth="7" strokeLinecap="round" />
          <path d="M 28 20 L 95 65" stroke="#3E495C" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 28 30 L 95 75" stroke="#3E495C" strokeWidth="1.5" strokeLinecap="round" />

          {/* Articulation Elbow Joint with Knurled Tension Knob */}
          <circle cx="95" cy="70" r="11" fill="#181D26" stroke="#4A5568" strokeWidth="1.5" />
          <circle cx="95" cy="70" r="5" fill="#2E3748" stroke="#D97736" strokeWidth="1" />
          {/* Tension knob teeth */}
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={95 + 8 * Math.cos((i * Math.PI) / 4)}
              y1={70 + 8 * Math.sin((i * Math.PI) / 4)}
              x2={95 + 11 * Math.cos((i * Math.PI) / 4)}
              y2={70 + 11 * Math.sin((i * Math.PI) / 4)}
              stroke="#CBD5E0"
              strokeWidth="1"
            />
          ))}

          {/* Secondary Arm Neck */}
          <path d="M 95 70 L 140 100" stroke="#1C212B" strokeWidth="8" strokeLinecap="round" />
          <path d="M 95 70 L 140 100" stroke="#3E495C" strokeWidth="1.5" strokeLinecap="round" />

          {/* Top-Down Cylindrical/Rectangular Anodized Aluminum Lamp Head */}
          <g transform="rotate(35, 160, 115)">
            {/* Lamp Head Outer Anodized Casing */}
            <rect
              x="130"
              y="90"
              width="95"
              height="38"
              rx="6"
              fill="url(#lampHeadMetal)"
              stroke="#384355"
              strokeWidth="1.5"
            />

            {/* Rear Heat Dissipation Cooling Fins */}
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={i}
                x1={136 + i * 4}
                y1="93"
                x2={136 + i * 4}
                y2="125"
                stroke="#121620"
                strokeWidth="1.5"
              />
            ))}

            {/* Front Frosted Diffuser Panel (Warm LED Emitter Array) */}
            <rect
              x="165"
              y="94"
              width="55"
              height="30"
              rx="4"
              fill="#FFFBE8"
              fillOpacity="0.95"
              stroke="#FFE17D"
              strokeWidth="1.2"
            />
            {/* Inner LED Array Glow */}
            <rect
              x="170"
              y="98"
              width="45"
              height="22"
              rx="2"
              fill="#FFFFFF"
              filter="blur(1px)"
            />

            {/* Laser Stamped Identification on Lamp Housing */}
            <text
              x="148"
              y="112"
              fill="#8B949E"
              fontSize="4.5"
              fontFamily="monospace"
              transform="rotate(90, 148, 112)"
              textAnchor="middle"
            >
              5000K-95CRI
            </text>
          </g>

          <defs>
            <linearGradient id="lampHeadMetal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#2A3240" />
              <stop offset="45%" stopColor="#181D26" />
              <stop offset="100%" stopColor="#0E1118" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* =========================================================================
          3. 1:1 SCALE AUTHENTIC LTT SCREWDRIVER (Top-Right Flank, Absolute)
         ========================================================================= */}
      <div className="hidden lg:block absolute top-[120px] right-3 sm:right-6 xl:right-10 pointer-events-auto z-20">
        <LttScrewdriver />
      </div>

      {/* =========================================================================
          4. ESD-15 CURVED TWEEZERS (Left Flank, Absolute)
         ========================================================================= */}
      <div
        className="hidden lg:block absolute top-[360px] left-3 sm:left-6 pointer-events-auto cursor-crosshair -rotate-6"
        data-inspectable="true"
        data-inspect-label="ESD-15 CURVED ANTI-STATIC TWEEZERS"
        style={{
          filter: 'drop-shadow(4px 10px 14px rgba(0, 0, 0, 0.65))',
        }}
      >
        <svg width="42" height="220" viewBox="0 0 42 220" fill="none">
          {/* Solid Joined Rear Tail */}
          <path d="M 16 6 L 26 6 L 26 30 L 16 30 Z" fill="#0D1117" stroke="#2D3748" strokeWidth="1" />

          {/* Left Tweezers Arm */}
          <path
            d="M 16 30 C 14 70, 10 120, 12 160 C 13 185, 17 205, 23 218"
            stroke="#0E1219"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Right Tweezers Arm */}
          <path
            d="M 26 30 C 28 70, 32 120, 30 160 C 29 185, 25 205, 24 218"
            stroke="#0E1219"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Precision Ground Silver Tips */}
          <path d="M 22 208 C 23 213, 23.5 216, 24 220" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" />
          <path d="M 26 208 C 25 213, 24.5 216, 24 220" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" />

          {/* Laser Etched Silkscreen */}
          <text
            x="21"
            y="85"
            fill="rgba(255,255,255,0.7)"
            fontSize="6"
            fontFamily="monospace"
            transform="rotate(90, 21, 85)"
            textAnchor="middle"
          >
            ESD-15 ANTI-STATIC
          </text>
        </svg>
      </div>

      {/* =========================================================================
          5. DISASSEMBLED LAPTOP BOTTOM HALF-CHASSIS (Right Flank Mid-Page, Absolute)
         ========================================================================= */}
      <div
        className="hidden xl:block absolute top-[740px] -right-16 pointer-events-auto"
        data-inspectable="true"
        data-inspect-label="DISASSEMBLED CHASSIS // COPPER HEATPIPE & MOTHERBOARD"
        style={{
          filter: 'drop-shadow(-8px 16px 24px rgba(0, 0, 0, 0.75))',
        }}
      >
        <svg width="220" height="300" viewBox="0 0 220 300" fill="none">
          {/* Outer CNC Aluminum Lower Shell */}
          <rect x="10" y="10" width="210" height="280" rx="8" fill="#12161F" stroke="#2D3545" strokeWidth="2" />
          <rect x="18" y="18" width="202" height="264" rx="4" fill="#0A0D13" />

          {/* Internal Motherboard PCB Substrate (Matte Green) */}
          <rect x="25" y="25" width="195" height="135" rx="3" fill="#0B261A" stroke="#164E33" strokeWidth="1" />

          {/* Gold PCB Solder Traces */}
          <path d="M 35 40 L 90 40 L 110 60 L 160 60" stroke="#D97736" strokeWidth="1.2" strokeDasharray="3 2" />
          <path d="M 45 70 L 80 70 L 100 90 L 180 90" stroke="#D97736" strokeWidth="1.2" strokeDasharray="4 2" />
          <path d="M 35 110 L 120 110 L 140 130" stroke="#00F0FF" strokeWidth="1" strokeDasharray="2 2" />

          {/* SMT IC Chip Package */}
          <rect x="65" y="55" width="45" height="45" rx="2" fill="#141822" stroke="#3E475A" strokeWidth="1" />
          <circle cx="72" cy="62" r="1.5" fill="#00E599" />
          <text x="87" y="80" fill="#CBD5E0" fontSize="6" fontFamily="monospace" textAnchor="middle">
            SOC DIE
          </text>

          {/* Copper Heatpipe Assembly & Cooling Fin Stack */}
          <path
            d="M 110 75 L 180 75 L 180 35 L 210 35"
            stroke="#D97736"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Sintered Fin Stack */}
          <rect x="185" y="28" width="35" height="35" fill="#1A1F2B" stroke="#D97736" strokeWidth="1" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={188 + i * 4}
              y1="28"
              x2={188 + i * 4}
              y2="63"
              stroke="#D97736"
              strokeWidth="1"
            />
          ))}

          {/* Flexible Ribbon Cable Connectors (FPC) */}
          <rect x="40" y="135" width="30" height="8" fill="#D97736" stroke="#FFE17D" strokeWidth="0.8" />
          <line x1="40" y1="139" x2="70" y2="139" stroke="#000" strokeWidth="1" />

          {/* Empty Lithium Battery Bay Cavity */}
          <rect x="25" y="170" width="195" height="100" rx="3" fill="#080A0E" stroke="#222836" strokeWidth="1" />
          <text x="75" y="225" fill="#4B5363" fontSize="8" fontFamily="monospace">
            [ 75Wh BATTERY CAVITY ]
          </text>
          {/* Battery Pin Terminals */}
          <rect x="35" y="177" width="20" height="6" fill="#D97736" />
        </svg>
      </div>
    </div>
  );
};
