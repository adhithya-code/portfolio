import React from 'react';

export const LttScrewdriver: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div
      data-inspectable="true"
      data-inspect-label="LTT RATCHETING SCREWDRIVER // BLACK & ORANGE EDITION"
      className={`relative select-none pointer-events-auto cursor-crosshair ${className}`}
      style={{
        filter:
          'drop-shadow(2px 6px 8px rgba(0, 0, 0, 0.75)) drop-shadow(8px 18px 26px rgba(0, 0, 0, 0.55))',
      }}
    >
      <svg width="58" height="310" viewBox="0 0 58 310" fill="none">
        <defs>
          {/* Shaft Steel Gradient */}
          <linearGradient id="lttShaftGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#E5E7EB" />
            <stop offset="25%" stopColor="#F3F4F6" />
            <stop offset="60%" stopColor="#9CA3AF" />
            <stop offset="100%" stopColor="#4B5563" />
          </linearGradient>

          {/* Knurled Collar Steel Gradient */}
          <linearGradient id="lttCollarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9CA3AF" />
            <stop offset="30%" stopColor="#D1D5DB" />
            <stop offset="70%" stopColor="#4B5563" />
            <stop offset="100%" stopColor="#1F2937" />
          </linearGradient>

          {/* Signature LTT Orange Ratchet Ring Gradient */}
          <linearGradient id="lttOrangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FB923C" />
            <stop offset="35%" stopColor="#F97316" />
            <stop offset="75%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#C2410C" />
          </linearGradient>

          {/* Tri-Lobe Textured Matte Black Handle Gradient */}
          <linearGradient id="lttHandleBodyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#22272E" />
            <stop offset="20%" stopColor="#313844" />
            <stop offset="50%" stopColor="#1B1F27" />
            <stop offset="80%" stopColor="#12151B" />
            <stop offset="100%" stopColor="#0B0D11" />
          </linearGradient>

          {/* Handle Facet Ridge Highlight */}
          <linearGradient id="lttRidgeHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
          </linearGradient>

          {/* Endcap Dome Gradient */}
          <linearGradient id="lttEndcapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#282E38" />
            <stop offset="40%" stopColor="#1D222A" />
            <stop offset="85%" stopColor="#101317" />
            <stop offset="100%" stopColor="#080A0C" />
          </linearGradient>
        </defs>

        {/* =====================================================================
            1. 1/4" MAGNETIC BIT & TIP (TOP)
           ===================================================================== */}
        {/* Chrome Chamfered Bit Head (PH2 / T6 Bit) */}
        <path
          d="M 26 4 L 32 4 L 31 16 L 27 16 Z"
          fill="url(#lttShaftGrad)"
          stroke="#9CA3AF"
          strokeWidth="0.8"
        />
        {/* Bit Flutes & Specular Tip Highlight */}
        <line x1="29" y1="4" x2="29" y2="15" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.9" />
        <line x1="27" y1="7" x2="31" y2="7" stroke="#6B7280" strokeWidth="0.8" />

        {/* 1/4" Hexagonal Bit Shank Body */}
        <rect
          x="26.5"
          y="16"
          width="5"
          height="14"
          fill="url(#lttShaftGrad)"
          stroke="#6B7280"
          strokeWidth="0.7"
        />
        {/* Laser Stamped Spec on Bit */}
        <text
          x="29"
          y="25"
          fill="#111827"
          fontSize="4"
          fontFamily="monospace"
          fontWeight="bold"
          transform="rotate(90, 29, 25)"
          textAnchor="middle"
        >
          PH2-S2
        </text>

        {/* =====================================================================
            2. STEPPED PRECISION SHAFT WITH MEASUREMENT HASH MARKS
           ===================================================================== */}
        {/* Front Stepped Collar Taper */}
        <path
          d="M 25 30 L 33 30 L 32.5 40 L 25.5 40 Z"
          fill="url(#lttCollarGrad)"
          stroke="#4B5563"
          strokeWidth="0.8"
        />

        {/* Solid Machined Stainless Steel Main Shaft */}
        <rect
          x="26"
          y="40"
          width="6"
          height="54"
          fill="url(#lttShaftGrad)"
          stroke="#4B5563"
          strokeWidth="0.8"
        />
        {/* Longitudinal Light Catch Reflection along Shaft */}
        <line x1="27.5" y1="40" x2="27.5" y2="94" stroke="#FFFFFF" strokeWidth="1" opacity="0.75" />

        {/* Laser-Engraved Metric Measurement Hash Ticks along Shaft */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={i}>
            <line
              x1="26"
              y1={46 + i * 6}
              x2={i % 2 === 0 ? "29.5" : "28"}
              y2={46 + i * 6}
              stroke="#374151"
              strokeWidth="0.7"
            />
          </g>
        ))}

        {/* Front Knurled Collar Ring before Ratchet Housing */}
        <rect
          x="24.5"
          y="94"
          width="9"
          height="14"
          rx="1"
          fill="url(#lttCollarGrad)"
          stroke="#374151"
          strokeWidth="0.8"
        />
        {/* Collar Knurl Crosshatch pattern */}
        {Array.from({ length: 5 }).map((_, i) => (
          <line
            key={i}
            x1="24.5"
            y1={96 + i * 2.5}
            x2="33.5"
            y2={97.5 + i * 2.5}
            stroke="rgba(255,255,255,0.3)"
            strokeWidth="0.6"
          />
        ))}

        {/* =====================================================================
            3. SIGNATURE LTT ORANGE RATCHETING SELECTOR RING (< | >)
           ===================================================================== */}
        {/* Ratchet Transition Bevel */}
        <path
          d="M 23.5 108 L 34.5 108 L 37.5 115 L 20.5 115 Z"
          fill="url(#lttOrangeGrad)"
          stroke="#C2410C"
          strokeWidth="0.9"
        />

        {/* Primary High-Vis Orange Ratchet Ring Body */}
        <rect
          x="19.5"
          y="115"
          width="19"
          height="16"
          rx="1.5"
          fill="url(#lttOrangeGrad)"
          stroke="#9A3412"
          strokeWidth="1"
        />

        {/* Ratchet Knurled Grip Ridges & Directional Chevron Grooves (< | >) */}
        {/* Left Chevron (<) */}
        <path
          d="M 24 123 L 22.5 120 L 24 117"
          stroke="#7C2D12"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Center Lock Position (|) */}
        <line
          x1="29"
          y1="117"
          x2="29"
          y2="123"
          stroke="#7C2D12"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* Right Chevron (>) */}
        <path
          d="M 34 117 L 35.5 120 L 34 123"
          stroke="#7C2D12"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ratchet Top Light Highlight */}
        <line
          x1="20"
          y1="116"
          x2="38"
          y2="116"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="0.9"
        />

        {/* =====================================================================
            4. ERGONOMIC TRI-LOBE HANDLE BODY (MATTE TEXTURED BLACK)
           ===================================================================== */}
        {/* Upper Handle Shoulder Flare */}
        <path
          d="M 19 131 L 39 131 L 43 148 L 15 148 Z"
          fill="url(#lttHandleBodyGrad)"
          stroke="#2D333E"
          strokeWidth="1"
        />

        {/* Main Tri-Lobe Faceted Handle Barrel */}
        <path
          d="M 15 148 C 12 175, 11 210, 14 245 L 44 245 C 47 210, 46 175, 43 148 Z"
          fill="url(#lttHandleBodyGrad)"
          stroke="#2A303C"
          strokeWidth="1.2"
        />

        {/* Facet Light Reflection Ridges (Simulating 3D Tri-Lobe Curvature) */}
        {/* Left Facet Highlight */}
        <path
          d="M 20 148 C 17 175, 17 210, 20 245"
          stroke="url(#lttRidgeHighlight)"
          strokeWidth="1.2"
        />
        {/* Center Specular Ridge */}
        <path
          d="M 29 131 L 29 245"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.4"
        />
        {/* Right Facet Shadow Ridge */}
        <path
          d="M 38 148 C 41 175, 41 210, 38 245"
          stroke="rgba(0,0,0,0.6)"
          strokeWidth="1.5"
        />

        {/* Recessed Geometric Grip Indents running down the handle */}
        {Array.from({ length: 6 }).map((_, i) => {
          const yPos = 158 + i * 14;
          return (
            <g key={i}>
              {/* Left Grip Pocket */}
              <rect
                x="16"
                y={yPos}
                width="7"
                height="8"
                rx="1.5"
                fill="#0A0C0F"
                stroke="#252A34"
                strokeWidth="0.8"
              />
              {/* Center Grip Flute */}
              <rect
                x="25.5"
                y={yPos}
                width="7"
                height="8"
                rx="1.5"
                fill="#0A0C0F"
                stroke="#252A34"
                strokeWidth="0.8"
              />
              {/* Right Grip Pocket */}
              <rect
                x="35"
                y={yPos}
                width="7"
                height="8"
                rx="1.5"
                fill="#0A0C0F"
                stroke="#252A34"
                strokeWidth="0.8"
              />
            </g>
          );
        })}

        {/* Laser-Etched Subtle LTT Signature Stamped Identifier */}
        <text
          x="29"
          y="200"
          fill="#4A5568"
          fontSize="4.5"
          fontFamily="monospace"
          fontWeight="bold"
          letterSpacing="0.8"
          transform="rotate(90, 29, 200)"
          textAnchor="middle"
        >
          LTT // RATCHET-V1
        </text>

        {/* =====================================================================
            5. BIT-STORAGE ROTATING ENDCAP & SEAM
           ===================================================================== */}
        {/* Bit Cartridge Pull-Out Seam Line */}
        <line x1="14" y1="247" x2="44" y2="247" stroke="#000000" strokeWidth="1.8" />
        <line x1="14" y1="248" x2="44" y2="248" stroke="#374151" strokeWidth="0.6" />

        {/* Rotating Endcap Body */}
        <path
          d="M 14 249 L 44 249 C 43 270, 40 288, 36 298 L 22 298 C 18 288, 15 270, 14 249 Z"
          fill="url(#lttEndcapGrad)"
          stroke="#2A303C"
          strokeWidth="1.2"
        />

        {/* Endcap Bevel Groove & Directional Grip Ring */}
        <path
          d="M 16 270 L 42 270"
          stroke="#11151B"
          strokeWidth="1.4"
        />
        <path
          d="M 16 271 L 42 271"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="0.6"
        />

        {/* Rounded Tail Dome with Debossed Accent Circle */}
        <path
          d="M 22 298 C 22 305, 36 305, 36 298 Z"
          fill="#12151B"
          stroke="#2A303C"
          strokeWidth="1"
        />
        <circle
          cx="29"
          cy="295"
          r="4.5"
          fill="#0B0D11"
          stroke="#F97316"
          strokeWidth="0.8"
          opacity="0.85"
        />
        <circle
          cx="29"
          cy="295"
          r="1.8"
          fill="#F97316"
        />
      </svg>
    </div>
  );
};
