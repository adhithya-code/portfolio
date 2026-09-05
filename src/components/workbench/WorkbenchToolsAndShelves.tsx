import React from 'react';

// =========================================================================
// PHOTOREALISTIC iFixit PRECISION SCREWDRIVER (SVG)
// =========================================================================
export const PrecisionScrewdriver: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      data-inspectable="true"
      data-inspect-label="iFixit PRECISION SCREWDRIVER // T5 TORX"
      className={`relative select-none pointer-events-auto cursor-crosshair ${className}`}
      style={{
        filter: 'drop-shadow(6px 12px 16px rgba(0, 0, 0, 0.75))',
      }}
    >
      <svg width="42" height="260" viewBox="0 0 42 260" fill="none">
        {/* Free-Spinning Swivel Top Cap (Anodized Blue/Copper) */}
        <rect x="11" y="4" width="20" height="14" rx="3" fill="#D97736" stroke="#FFE17D" strokeWidth="1" />
        <rect x="15" y="18" width="12" height="6" fill="#1A202C" />

        {/* Upper Handle Segment (Brushed Dark Aluminum) */}
        <rect x="13" y="24" width="16" height="50" rx="2" fill="url(#handleGrad)" stroke="#384252" strokeWidth="1" />

        {/* Diamond Knurled Grip Zone (High Friction Texture) */}
        <rect x="12" y="74" width="18" height="65" fill="#141822" stroke="#4A5568" strokeWidth="1" />
        {/* Knurl hatch lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1="12"
            y1={78 + i * 5}
            x2="30"
            y2={83 + i * 5}
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.8"
          />
        ))}
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`rev-${i}`}
            x1="12"
            y1={83 + i * 5}
            x2="30"
            y2={78 + i * 5}
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.8"
          />
        ))}

        {/* Lower Handle Taper */}
        <path d="M 13 139 L 29 139 L 26 175 L 16 175 Z" fill="url(#handleGrad)" stroke="#384252" strokeWidth="1" />

        {/* Magnetic Chuck Collar */}
        <rect x="16" y="175" width="10" height="18" fill="#2D3748" stroke="#718096" strokeWidth="1" />
        <line x1="16" y1="184" x2="26" y2="184" stroke="#000" strokeWidth="1.5" />

        {/* Chrome-Vanadium Torx Bit Shaft (T5 Bit) */}
        <rect x="18.5" y="193" width="5" height="52" fill="url(#steelGrad)" stroke="#CBD5E0" strokeWidth="0.8" />

        {/* Torx Fluted Tip */}
        <path d="M 18.5 245 L 23.5 245 L 22 258 L 20 258 Z" fill="#E2E8F0" stroke="#718096" strokeWidth="0.8" />

        {/* Laser Stamped Spec on Bit */}
        <text x="22" y="225" fill="#1A202C" fontSize="5" fontFamily="monospace" transform="rotate(90, 22, 225)" textAnchor="middle">
          T5-TORX
        </text>

        {/* Gradients */}
        <defs>
          <linearGradient id="handleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4A5568" />
            <stop offset="35%" stopColor="#2D3748" />
            <stop offset="70%" stopColor="#1A202C" />
            <stop offset="100%" stopColor="#2D3748" />
          </linearGradient>
          <linearGradient id="steelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="50%" stopColor="#A0AEC0" />
            <stop offset="100%" stopColor="#CBD5E0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// =========================================================================
// PHOTOREALISTIC ESD-15 CURVED PRECISION TWEEZERS (SVG)
// =========================================================================
export const EsdTweezers: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      data-inspectable="true"
      data-inspect-label="ESD-15 CURVED ANTI-STATIC TWEEZERS"
      className={`relative select-none pointer-events-auto cursor-crosshair ${className}`}
      style={{
        filter: 'drop-shadow(6px 10px 14px rgba(0, 0, 0, 0.7))',
      }}
    >
      <svg width="40" height="240" viewBox="0 0 40 240" fill="none">
        {/* Solid Joined Rear Tail */}
        <path d="M 16 10 L 24 10 L 24 35 L 16 35 Z" fill="#10141D" stroke="#2D3748" strokeWidth="1" />

        {/* Left Tweezers Arm */}
        <path
          d="M 16 35 C 14 80, 10 140, 12 180 C 13 205, 17 225, 23 238"
          stroke="#10141D"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Right Tweezers Arm */}
        <path
          d="M 24 35 C 26 80, 30 140, 28 180 C 27 205, 23 225, 24 238"
          stroke="#10141D"
          strokeWidth="4.5"
          strokeLinecap="round"
        />

        {/* Precision Silver Ground Contact Tips */}
        <path d="M 21 228 C 22 233, 23 236, 23.5 240" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" />
        <path d="M 25 228 C 24.5 233, 24 236, 23.5 240" stroke="#CBD5E0" strokeWidth="2" strokeLinecap="round" />

        {/* Laser Etched ESD-15 Silkscreen text */}
        <text x="21" y="95" fill="rgba(255,255,255,0.7)" fontSize="6" fontFamily="monospace" transform="rotate(90, 21, 95)" textAnchor="middle">
          ESD-15 ANTI-STATIC
        </text>
      </svg>
    </div>
  );
};

// =========================================================================
// HEAVY-DUTY CNC EXTRUDED ALUMINUM SHELF BEAM (TIER DIVIDER)
// =========================================================================
export const CncShelfBeam: React.FC<{
  tierLabel: string;
  subLabel?: string;
  rackUnit?: string;
}> = ({ tierLabel, subLabel = 'CHASSIS GROUND: 0.0Ω', rackUnit = '1U' }) => {
  return (
    <div className="relative my-6 select-none">
      {/* Aluminum Extrusion Beam Bar */}
      <div
        className="h-7 w-full border-t border-[#4A5568] border-b border-[#0A0C10] shadow-[0_4px_10px_rgba(0,0,0,0.85)] flex items-center justify-between px-4 sm:px-6 font-mono text-[10px]"
        style={{
          background: 'linear-gradient(180deg, #2A313D 0%, #1E232B 50%, #12151B 100%)',
        }}
      >
        {/* Left Stamped Silkscreen Rack Identification */}
        <div className="flex items-center gap-3">
          {/* Black Hex Mounting Bolt */}
          <div className="w-3.5 h-3.5 rounded-full bg-[#0E1117] border border-[#3E475A] shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#2A313D] rotate-45 border border-[#10141D]"></div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-copper font-bold tracking-wider">{tierLabel}</span>
            <span className="text-text-dim">|</span>
            <span className="text-text-muted hidden sm:inline">{subLabel}</span>
          </div>
        </div>

        {/* Right Edge Rack Unit & ESD Status */}
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 border border-[#2D3545] bg-[#0A0C10] text-cyan font-bold">
            {rackUnit}
          </span>

          {/* Right Hex Mounting Bolt */}
          <div className="w-3.5 h-3.5 rounded-full bg-[#0E1117] border border-[#3E475A] shadow-inner flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-[#2A313D] rotate-45 border border-[#10141D]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
