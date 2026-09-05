import React from 'react';

interface LttScrewdriverProps {
  className?: string;
  style?: React.CSSProperties;
  orientation?: 'horizontal' | 'vertical';
}

export const LttScrewdriver: React.FC<LttScrewdriverProps> = ({
  className = '',
  style,
  orientation = 'vertical',
}) => {
  const isVertical = orientation === 'vertical';

  // Prominent High-Visibility Scale (Preserving exact 6.0:1 real-world proportion)
  return (
    <div
      data-inspectable="true"
      data-inspect-label="OFFICIAL LTT RATCHETING SCREWDRIVER // BLACK & ORANGE"
      className={`relative select-none pointer-events-auto cursor-crosshair ${className}`}
      style={{
        width: isVertical ? '76px' : '360px',
        height: isVertical ? '360px' : '76px',
        ...style,
      }}
    >
      <svg
        viewBox={isVertical ? '0 0 48 230' : '0 0 230 48'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          filter:
            'drop-shadow(3px 10px 16px rgba(0, 0, 0, 0.75)) drop-shadow(8px 20px 30px rgba(0, 0, 0, 0.55))',
        }}
      >
        <defs>
          {/* =================================================================
              1. CONTACT OCCLUSION SHADOWS UNDERNEATH
             ================================================================= */}
          <linearGradient id="ltt-contact-shadow-1to1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* =================================================================
              2. S2 PH2 STEEL BIT (DARK PHOSPHATE COATING)
             ================================================================= */}
          <linearGradient id="bit-steel-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#475262" />
            <stop offset="25%" stopColor="#2D3540" />
            <stop offset="65%" stopColor="#1B2028" />
            <stop offset="100%" stopColor="#0D1015" />
          </linearGradient>

          {/* =================================================================
              3. HIGH-GLOSS CHROMED SHAFT (MIRROR STEEL POLISH)
             ================================================================= */}
          <linearGradient id="chrome-shaft-1to1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="15%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#F1F5F9" />
            <stop offset="55%" stopColor="#94A3B8" />
            <stop offset="80%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Knurling Grid Pattern for Finger Twirling Collar */}
          <pattern id="knurl-mesh" width="2.4" height="2.4" patternUnits="userSpaceOnUse">
            <path d="M0 2.4 L2.4 0 M0 0 L2.4 2.4" stroke="#475569" strokeWidth="0.6" />
            <path d="M0 2.4 L2.4 0 M0 0 L2.4 2.4" stroke="#FFFFFF" strokeWidth="0.25" strokeOpacity="0.5" />
          </pattern>

          {/* =================================================================
              4. COMPOSITE MATTE BLACK RATCHET SELECTOR RING
             ================================================================= */}
          <linearGradient id="ratchet-ring-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="20%" stopColor="#4B5563" />
            <stop offset="45%" stopColor="#28303C" />
            <stop offset="75%" stopColor="#171C23" />
            <stop offset="100%" stopColor="#0B0D11" />
          </linearGradient>

          {/* =================================================================
              5. SIGNATURE LTT VIBRANT ORANGE ACCENT WASHER
             ================================================================= */}
          <linearGradient id="ltt-orange-ring-1to1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFA662" />
            <stop offset="25%" stopColor="#FF7019" />
            <stop offset="65%" stopColor="#DE4B00" />
            <stop offset="100%" stopColor="#661F00" />
          </linearGradient>

          {/* =================================================================
              6. ERGONOMIC MATTE BLACK TRI-LOBE HANDLE
             ================================================================= */}
          <linearGradient id="handle-shell-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38414E" />
            <stop offset="18%" stopColor="#4D5666" />
            <stop offset="38%" stopColor="#323945" />
            <stop offset="70%" stopColor="#1E232B" />
            <stop offset="100%" stopColor="#0E1116" />
          </linearGradient>

          <linearGradient id="handle-top-specular" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="20%" stopColor="#FFFFFF" stopOpacity="0.28" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* =================================================================
              7. SIGNATURE LTT VIBRANT ORANGE ROTATING ENDCAP
             ================================================================= */}
          <linearGradient id="orange-endcap-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFA662" />
            <stop offset="20%" stopColor="#FF7A24" />
            <stop offset="50%" stopColor="#EB5300" />
            <stop offset="80%" stopColor="#B33600" />
            <stop offset="100%" stopColor="#4A1400" />
          </linearGradient>
        </defs>

        {isVertical ? (
          /* =================================================================
              VERTICAL LAYOUT (TIP FACING UP / TOP)
              Total height: 230px, Total width: 48px
              Center X = 24px
             ================================================================= */
          <g>
            {/* Ambient Occlusion Ground Contact Shadow */}
            <ellipse cx="27" cy="155" rx="16" ry="50" fill="url(#ltt-contact-shadow-1to1)" opacity="0.6" />
            <ellipse cx="26" cy="70" rx="8" ry="35" fill="url(#ltt-contact-shadow-1to1)" opacity="0.35" />

            {/* 1. Dark Phosphate S2 PH2 Phillips Bit (y: 6 to 20) */}
            <path
              d="M 24 6 L 21.5 13 L 21 18 L 27 18 L 26.5 13 Z"
              fill="url(#bit-steel-grad)"
              stroke="#11151A"
              strokeWidth="0.6"
            />
            {/* Flute cutaways */}
            <path d="M 24 6 L 23 11 L 21.5 14 L 24 13 L 26.5 14 L 25 11 Z" fill="#0C0E12" />
            <line x1="24" y1="6" x2="24" y2="18" stroke="#94A3B8" strokeWidth="0.6" strokeOpacity="0.6" />

            {/* Bit Shank Base (y: 18 to 22) */}
            <rect x="21" y="18" width="6" height="4" fill="url(#bit-steel-grad)" stroke="#11151A" strokeWidth="0.5" />

            {/* 2. Front Smooth Polished Chrome Shaft (y: 22 to 58) */}
            <rect
              x="20.5"
              y="22"
              width="7"
              height="36"
              rx="0.5"
              fill="url(#chrome-shaft-1to1)"
              stroke="#64748B"
              strokeWidth="0.5"
            />
            {/* Razor-Sharp Chrome Specular Streak */}
            <line x1="22" y1="22" x2="22" y2="58" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" />

            {/* Stepped Transition Shoulder (y: 58 to 60) */}
            <rect x="20" y="58" width="8" height="2" rx="0.3" fill="url(#chrome-shaft-1to1)" stroke="#475569" strokeWidth="0.4" />

            {/* 3. Diamond Knurled Twirling Shaft Collar (y: 60 to 86) */}
            <rect x="20.5" y="60" width="7" height="26" fill="url(#chrome-shaft-1to1)" stroke="#475569" strokeWidth="0.5" />
            <rect x="20.5" y="60" width="7" height="26" fill="url(#knurl-mesh)" />
            {/* Knurl Light Highlight */}
            <line x1="22" y1="60" x2="22" y2="86" stroke="#FFFFFF" strokeWidth="0.7" strokeOpacity="0.5" />

            {/* 4. Rear Stepped Shaft Collar Entering Ratchet (y: 86 to 96) */}
            <rect x="20" y="86" width="8" height="2" rx="0.3" fill="url(#chrome-shaft-1to1)" stroke="#475569" strokeWidth="0.4" />
            <rect x="20.5" y="88" width="7" height="8" fill="url(#chrome-shaft-1to1)" stroke="#64748B" strokeWidth="0.5" />
            <line x1="22" y1="88" x2="22" y2="96" stroke="#FFFFFF" strokeWidth="0.9" />

            {/* 5. Composite Matte Black Ratchet Selector Ring (y: 96 to 120) */}
            {/* Front Chamfer (y: 96 to 100) */}
            <path
              d="M 20 96 L 12 100 L 36 100 L 28 96 Z"
              fill="url(#ratchet-ring-grad)"
              stroke="#1F2937"
              strokeWidth="0.5"
            />
            {/* Ratchet Ring Body (y: 100 to 120, width 24px: x: 12 to 36) */}
            <rect
              x="12"
              y="100"
              width="24"
              height="20"
              rx="1"
              fill="url(#ratchet-ring-grad)"
              stroke="#111827"
              strokeWidth="0.6"
            />
            {/* Top Curvature Specular Highlight */}
            <line x1="15" y1="100" x2="15" y2="120" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.3" />

            {/* Vertical Fluted Grip Splines (Horizontal Lines across the ring) */}
            {[103, 106, 109, 112, 115, 118].map((y) => (
              <g key={y}>
                <line x1="13" y1={y} x2="35" y2={y} stroke="#090B0E" strokeWidth="1.2" />
                <line x1="13" y1={y + 0.4} x2="35" y2={y + 0.4} stroke="#6B7280" strokeWidth="0.5" strokeOpacity="0.4" />
              </g>
            ))}

            {/* Ratchet Direction Indicator Chevron (< | >) in Center */}
            <g transform="translate(24, 110)" opacity="0.65">
              <path d="M -4 2 L -2 0 L -2 4 Z" fill="#94A3B8" />
              <line x1="0" y1="-2" x2="0" y2="2" stroke="#E2E8F0" strokeWidth="0.8" />
              <path d="M 4 2 L 2 0 L 2 4 Z" fill="#94A3B8" />
            </g>

            {/* 6. Signature LTT Vibrant Orange Accent Washer Ring (y: 120 to 123) */}
            <rect
              x="13"
              y="120"
              width="22"
              height="3"
              rx="0.5"
              fill="url(#ltt-orange-ring-1to1)"
              stroke="#7C2D12"
              strokeWidth="0.4"
            />
            <line x1="14" y1="120.5" x2="34" y2="120.5" stroke="#FED7AA" strokeWidth="0.5" strokeOpacity="0.8" />

            {/* 7. Ergonomic Contoured Matte Black Handle (y: 123 to 198) */}
            {/* Exact Silhouette Matching Reference Photo */}
            <path
              d="M 13 123
                 C 12 132, 10 144, 9 160
                 C 8 178, 10 192, 11 198
                 L 37 198
                 C 38 192, 40 178, 39 160
                 C 38 144, 36 132, 35 123
                 Z"
              fill="url(#handle-shell-grad)"
              stroke="#181F2A"
              strokeWidth="0.8"
            />

            {/* Longitudinal Light-Catching Specular Ridge */}
            <path
              d="M 17 125
                 C 15 138, 14 158, 16 195"
              stroke="#FFFFFF"
              strokeWidth="1.2"
              strokeOpacity="0.2"
              strokeLinecap="round"
            />

            {/* Subtle Tri-Lobe Center Facet Shadow Line */}
            <path
              d="M 24 123 C 24 145, 24 175, 24 198"
              stroke="rgba(0, 0, 0, 0.4)"
              strokeWidth="1"
            />

            {/* Precision Cartridge Pull Seam (y: 198) */}
            <line x1="11" y1="198" x2="37" y2="198" stroke="#05070A" strokeWidth="1.2" />
            <line x1="11" y1="198.6" x2="37" y2="198.6" stroke="#374151" strokeWidth="0.4" strokeOpacity="0.6" />

            {/* 8. Signature LTT Vibrant Orange Rotating Endcap (y: 199 to 222) */}
            {/* Orange Endcap Main Dome */}
            <path
              d="M 11 199
                 L 11 212
                 C 12 219, 17 222, 24 222
                 C 31 222, 36 219, 37 212
                 L 37 199
                 Z"
              fill="url(#orange-endcap-grad)"
              stroke="#9A3412"
              strokeWidth="0.7"
            />

            {/* Vertical Tactile Grip Flutes on Orange Endcap */}
            {[15, 19, 24, 29, 33].map((x) => (
              <g key={x}>
                <line x1={x} y1="202" x2={x} y2="216" stroke="#7C2D12" strokeWidth="1" strokeLinecap="round" />
                <line x1={x + 0.4} y1="202" x2={x + 0.4} y2="216" stroke="#FED7AA" strokeWidth="0.4" strokeOpacity="0.6" />
              </g>
            ))}

            {/* Rounded End Dome Debossed Accent Circle */}
            <ellipse cx="24" cy="220" rx="4" ry="1.2" fill="#7C2D12" opacity="0.65" />
          </g>
        ) : (
          /* =================================================================
              HORIZONTAL LAYOUT
              Total width: 230px, Total height: 48px
              Center Y = 24px
             ================================================================= */
          <g>
            {/* Ambient Occlusion Ground Contact Shadow */}
            <ellipse cx="155" cy="27" rx="50" ry="16" fill="url(#ltt-contact-shadow-1to1)" opacity="0.6" />

            {/* 1. Dark Bit (x: 6 to 22) */}
            <path d="M 6 24 L 13 21.5 L 18 21 L 18 27 L 13 26.5 Z" fill="url(#bit-steel-grad)" stroke="#11151A" strokeWidth="0.6" />
            <rect x="18" y="21" width="4" height="6" fill="url(#bit-steel-grad)" stroke="#11151A" strokeWidth="0.5" />

            {/* 2. Smooth Chrome Shaft (x: 22 to 58) */}
            <rect x="22" y="20.5" width="36" height="7" rx="0.5" fill="url(#chrome-shaft-1to1)" stroke="#64748B" strokeWidth="0.5" />
            <line x1="22" y1="22" x2="58" y2="22" stroke="#FFFFFF" strokeWidth="0.9" strokeLinecap="round" />

            {/* Stepped Collar */}
            <rect x="58" y="20" width="2" height="8" rx="0.3" fill="url(#chrome-shaft-1to1)" stroke="#475569" strokeWidth="0.4" />

            {/* 3. Knurled Shaft Zone (x: 60 to 86) */}
            <rect x="60" y="20.5" width="26" height="7" fill="url(#chrome-shaft-1to1)" stroke="#475569" strokeWidth="0.5" />
            <rect x="60" y="20.5" width="26" height="7" fill="url(#knurl-mesh)" />

            {/* 4. Rear Collar (x: 86 to 96) */}
            <rect x="86" y="20" width="2" height="8" rx="0.3" fill="url(#chrome-shaft-1to1)" stroke="#475569" strokeWidth="0.4" />
            <rect x="88" y="20.5" width="8" height="7" fill="url(#chrome-shaft-1to1)" stroke="#64748B" strokeWidth="0.5" />

            {/* 5. Ratchet Selector Ring (x: 96 to 120) */}
            <path d="M 96 20 L 100 12 L 100 36 L 96 28 Z" fill="url(#ratchet-ring-grad)" stroke="#1F2937" strokeWidth="0.5" />
            <rect x="100" y="12" width="20" height="24" rx="1" fill="url(#ratchet-ring-grad)" stroke="#111827" strokeWidth="0.6" />

            {/* 6. Orange Accent Ring (x: 120 to 123) */}
            <rect x="120" y="13" width="3" height="22" rx="0.5" fill="url(#ltt-orange-ring-1to1)" stroke="#7C2D12" strokeWidth="0.4" />

            {/* 7. Ergonomic Black Handle (x: 123 to 198) */}
            <path
              d="M 123 13 C 132 12, 144 10, 160 9 C 178 8, 192 10, 198 11 L 198 37 C 192 38, 178 40, 160 39 C 144 38, 132 36, 123 35 Z"
              fill="url(#handle-shell-grad)"
              stroke="#181F2A"
              strokeWidth="0.8"
            />
            <line x1="198" y1="11" x2="198" y2="37" stroke="#05070A" strokeWidth="1.2" />

            {/* 8. Orange Endcap (x: 199 to 222) */}
            <path
              d="M 199 11 L 212 11 C 219 12, 222 17, 222 24 C 222 31, 219 36, 212 37 L 199 37 Z"
              fill="url(#orange-endcap-grad)"
              stroke="#9A3412"
              strokeWidth="0.7"
            />
          </g>
        )}
      </svg>
    </div>
  );
};
