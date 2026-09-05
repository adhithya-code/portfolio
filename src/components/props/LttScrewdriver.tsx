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

  return (
    <div
      data-inspectable="true"
      data-inspect-label="OFFICIAL LTT RATCHETING SCREWDRIVER // BLACK & ORANGE 1:1"
      className={`relative select-none pointer-events-auto cursor-crosshair ${className}`}
      style={{
        width: isVertical ? '96px' : '640px',
        height: isVertical ? '640px' : '96px',
        ...style,
      }}
    >
      <svg
        viewBox={isVertical ? '0 0 96 640' : '0 0 640 96'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          filter:
            'drop-shadow(0 14px 20px rgba(0, 0, 0, 0.75)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.5))',
        }}
      >
        <defs>
          {/* =================================================================
              1. CONTACT OCCLUSION SHADOWS
             ================================================================= */}
          <radialGradient id="ao-handle" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="ao-linear" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* =================================================================
              2. PH2 S2 STEEL BIT (DARK PHOSPHATE MATTE FINISH)
             ================================================================= */}
          <linearGradient id="s2-bit-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3E4756" />
            <stop offset="25%" stopColor="#2A313C" />
            <stop offset="65%" stopColor="#181D24" />
            <stop offset="100%" stopColor="#0B0E12" />
          </linearGradient>

          {/* =================================================================
              3. HIGH-GLOSS CHROMED SHAFT (STEEL MIRROR POLISH)
             ================================================================= */}
          <linearGradient id="chrome-mirror-shaft" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="12%" stopColor="#FFFFFF" />
            <stop offset="26%" stopColor="#F1F5F9" />
            <stop offset="48%" stopColor="#CBD5E1" />
            <stop offset="72%" stopColor="#64748B" />
            <stop offset="90%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="chrome-collar-bevel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Authentic CNC Diamond Knurling Texture */}
          <pattern id="knurl-pattern-1to1" width="3" height="3" patternUnits="userSpaceOnUse">
            <path d="M0 3 L3 0 M0 0 L3 3" stroke="#475569" strokeWidth="0.75" />
            <path d="M0 3 L3 0 M0 0 L3 3" stroke="#FFFFFF" strokeWidth="0.3" strokeOpacity="0.7" />
          </pattern>

          {/* =================================================================
              4. COMPOSITE RATCHET SELECTOR RING
             ================================================================= */}
          <linearGradient id="ratchet-matte-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#333A45" />
            <stop offset="16%" stopColor="#485261" />
            <stop offset="35%" stopColor="#2B323D" />
            <stop offset="65%" stopColor="#1A1F26" />
            <stop offset="90%" stopColor="#101318" />
            <stop offset="100%" stopColor="#080A0C" />
          </linearGradient>

          <linearGradient id="ratchet-front-chamfer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4B5563" />
            <stop offset="30%" stopColor="#2D3748" />
            <stop offset="80%" stopColor="#181D26" />
            <stop offset="100%" stopColor="#0D1015" />
          </linearGradient>

          {/* =================================================================
              5. SIGNATURE LTT ORANGE ACCENT WASHER RING
             ================================================================= */}
          <linearGradient id="ltt-orange-accent-ring" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFA662" />
            <stop offset="25%" stopColor="#FF731D" />
            <stop offset="60%" stopColor="#DE4B00" />
            <stop offset="88%" stopColor="#9C2E00" />
            <stop offset="100%" stopColor="#5E1A00" />
          </linearGradient>

          {/* =================================================================
              6. ERGONOMIC MATTE BLACK TRI-LOBE HANDLE
             ================================================================= */}
          {/* Upper Facet (Daylight Ambient Reflection) */}
          <linearGradient id="handle-facet-upper" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38414E" />
            <stop offset="14%" stopColor="#4D5666" />
            <stop offset="32%" stopColor="#323945" />
            <stop offset="65%" stopColor="#1E232B" />
            <stop offset="100%" stopColor="#12151B" />
          </linearGradient>

          {/* Lower Facet (Soft Ground Drop Shade) */}
          <linearGradient id="handle-facet-lower" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1C2027" />
            <stop offset="40%" stopColor="#13161C" />
            <stop offset="85%" stopColor="#0B0D10" />
            <stop offset="100%" stopColor="#050608" />
          </linearGradient>

          {/* Specular Longitudinal Light Sweep */}
          <linearGradient id="handle-specular-ridge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* =================================================================
              7. SIGNATURE LTT VIBRANT ORANGE ENDCAP
             ================================================================= */}
          <linearGradient id="ltt-orange-endcap-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFA662" />
            <stop offset="15%" stopColor="#FF7A24" />
            <stop offset="45%" stopColor="#EB5300" />
            <stop offset="75%" stopColor="#B33600" />
            <stop offset="92%" stopColor="#802300" />
            <stop offset="100%" stopColor="#4A1400" />
          </linearGradient>

          <linearGradient id="orange-dome-radial-highlight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE4D1" stopOpacity="0.85" />
            <stop offset="45%" stopColor="#FFAA75" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D94800" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Rotational Container: maps horizontal 640x96 coordinates to 96x640 with tip pointing TOP */}
        <g transform={isVertical ? 'rotate(90) translate(0, -96)' : undefined}>
          {/* =================================================================
              1. CONTACT DROP SHADOWS UNDERNEATH
             ================================================================= */}
          <ellipse cx="450" cy="62" rx="140" ry="12" fill="url(#ao-handle)" opacity="0.8" />
          <ellipse cx="300" cy="58" rx="40" ry="7" fill="url(#ao-linear)" opacity="0.6" />
          <ellipse cx="160" cy="54" rx="80" ry="5" fill="url(#ao-linear)" opacity="0.4" />

          {/* =================================================================
              2. DARK S2 PH2 PHILLIPS BIT (TIP AT LEFT / TOP)
             ================================================================= */}
          {/* Tapered Cross Tip */}
          <path
            d="M 36 48 L 48 43 L 58 43.5 L 58 52.5 L 48 53 Z"
            fill="url(#s2-bit-metal)"
          />
          {/* Cutaway Phillips Flutes */}
          <path d="M 36 48 L 46 45 L 56 46 L 46 48 L 56 50 L 46 51 Z" fill="#0E1116" />
          {/* Specular Edge Highlights */}
          <line x1="38" y1="48" x2="58" y2="48" stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.7" />
          <line x1="48" y1="43.5" x2="48" y2="52.5" stroke="#1E293B" strokeWidth="0.7" />

          {/* 1/4" Hex Shank Collar */}
          <rect x="58" y="43" width="8" height="10" fill="url(#s2-bit-metal)" />
          <line x1="58" y1="44" x2="66" y2="44" stroke="#CBD5E1" strokeWidth="0.6" strokeOpacity="0.6" />

          {/* =================================================================
              3. STEPPED POLISHED CHROME SHAFT WITH KNURLED TWIRL ZONE
             ================================================================= */}
          {/* 1. Front Smooth Polished Barrel */}
          <rect
            x="66"
            y="41"
            width="94"
            height="14"
            rx="1"
            fill="url(#chrome-mirror-shaft)"
          />
          {/* Razor-Sharp Specular Highlights */}
          <line x1="68" y1="43" x2="158" y2="43" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="68" y1="45" x2="158" y2="45" stroke="#F8FAFC" strokeWidth="0.8" strokeOpacity="0.75" />
          {/* Underside Reflected Shadow */}
          <line x1="67" y1="53.5" x2="159" y2="53.5" stroke="#1E293B" strokeWidth="1" strokeOpacity="0.8" />

          {/* Stepped Transition Shoulder */}
          <rect x="160" y="41.5" width="4" height="13" rx="0.5" fill="url(#chrome-collar-bevel)" />

          {/* 2. Precision Diamond Knurled Twirl Zone */}
          <rect
            x="164"
            y="42"
            width="78"
            height="12"
            fill="url(#chrome-mirror-shaft)"
          />
          <rect
            x="164"
            y="42"
            width="78"
            height="12"
            fill="url(#knurl-pattern-1to1)"
          />
          {/* Knurl Specular Catch */}
          <line x1="164" y1="43.5" x2="242" y2="43.5" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.55" />
          <line x1="164" y1="52.5" x2="242" y2="52.5" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.65" />

          {/* 3. Rear Stepped Collar Entering Ratchet */}
          <rect x="242" y="41.5" width="6" height="13" rx="0.5" fill="url(#chrome-collar-bevel)" />
          <rect x="248" y="41" width="18" height="14" fill="url(#chrome-mirror-shaft)" />
          <line x1="248" y1="43" x2="266" y2="43" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
          <rect x="264" y="40" width="3" height="16" rx="0.5" fill="#1E293B" />

          {/* =================================================================
              4. TEXTURED RATCHET SELECTOR RING (COMPOSITE BLACK)
             ================================================================= */}
          {/* Front Chamfer Transition */}
          <path
            d="M 267 38 L 278 33 L 278 63 L 267 58 Z"
            fill="url(#ratchet-front-chamfer)"
          />
          <line x1="268" y1="38" x2="278" y2="33" stroke="#64748B" strokeWidth="0.8" strokeOpacity="0.65" />

          {/* Main Cylindrical Ratchet Body */}
          <rect
            x="278"
            y="32"
            width="56"
            height="32"
            rx="1.5"
            fill="url(#ratchet-matte-body)"
          />
          {/* Top Curvature Highlight */}
          <path
            d="M 278 34.5 L 334 34.5"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.35"
          />

          {/* Precision Fluted Grip Splines (Vertical Grooves) */}
          {[283, 288, 293, 298, 303, 308, 313, 318, 323, 328].map((x) => (
            <g key={x}>
              <line x1={x} y1="35" x2={x} y2="61" stroke="#080A0D" strokeWidth="1.8" />
              <line
                x1={x + 0.8}
                y1="35"
                x2={x + 0.8}
                y2="61"
                stroke="#6B7280"
                strokeWidth="0.7"
                strokeOpacity="0.5"
              />
            </g>
          ))}

          {/* Ratchet Direction Indicator Chevron (< | >) */}
          <g transform="translate(301, 45)" opacity="0.7">
            <path d="M 0 3 L 4 0 L 4 6 Z" fill="#94A3B8" />
            <rect x="6" y="0" width="1.5" height="6" fill="#E2E8F0" />
            <path d="M 13 3 L 9 0 L 9 6 Z" fill="#94A3B8" />
          </g>

          {/* =================================================================
              5. SIGNATURE LTT VIBRANT ORANGE ACCENT WASHER RING
             ================================================================= */}
          <rect
            x="334"
            y="33"
            width="5.5"
            height="30"
            rx="1"
            fill="url(#ltt-orange-accent-ring)"
          />
          <line x1="335" y1="34" x2="335" y2="62" stroke="#FFD8B3" strokeWidth="0.9" strokeOpacity="0.9" />
          <line x1="339" y1="34" x2="339" y2="62" stroke="#4A1400" strokeWidth="0.8" />

          {/* =================================================================
              6. CONTOURED ERGONOMIC MATTE BLACK HANDLE
             ================================================================= */}
          {/* 1. Upper Light-Catching Facet (Exact Ergonomic Profile from Photograph) */}
          <path
            d="M 339.5 33.5
               C 346 33.5, 355 34.5, 368 35.5
               C 382 36.5, 396 30, 420 29
               L 556 29
               C 564 29, 570 31, 573 34
               L 573 48
               L 339.5 48
               Z"
            fill="url(#handle-facet-upper)"
          />

          {/* 2. Lower Underbelly Facet (Dark in Soft Ambient Shadow) */}
          <path
            d="M 339.5 48
               L 573 48
               L 573 62
               C 570 65, 564 67, 556 67
               L 420 67
               C 396 66, 382 59.5, 368 60.5
               C 355 61.5, 346 62.5, 339.5 62.5
               Z"
            fill="url(#handle-facet-lower)"
          />

          {/* 3. Smooth Facet Apex Blend Line */}
          <line
            x1="342"
            y1="48"
            x2="572"
            y2="48"
            stroke="rgba(255, 255, 255, 0.09)"
            strokeWidth="1.2"
          />

          {/* 4. Top Soft Specular Sweep along Handle Arch */}
          <path
            d="M 345 35
               C 370 36, 395 30.5, 425 30
               L 550 30"
            stroke="url(#handle-specular-ridge)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* 5. Precision Cartridge Pull Seam */}
          <line x1="573" y1="29.5" x2="573" y2="66.5" stroke="#040608" strokeWidth="2" />
          <line x1="574" y1="30" x2="574" y2="66" stroke="#334155" strokeWidth="0.6" strokeOpacity="0.65" />

          {/* =================================================================
              7. SIGNATURE LTT VIBRANT ORANGE ROTATING ENDCAP
             ================================================================= */}
          {/* Main Orange Endcap D-Dome Body */}
          <path
            d="M 574 30.5
               L 596 31
               C 607 32, 616 38, 616 48
               C 616 58, 607 64, 596 65
               L 574 65.5
               Z"
            fill="url(#ltt-orange-endcap-body)"
          />

          {/* Top Dome Specular Arc */}
          <path
            d="M 576 33
               C 592 34, 608 39, 612 46"
            stroke="url(#orange-dome-radial-highlight)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Tactile Pull Flutes / Grip Ribs on Orange Endcap */}
          {[581, 587, 593, 599].map((x) => (
            <g key={x}>
              <line
                x1={x}
                y1="36"
                x2={x}
                y2="60"
                stroke="#8A2400"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <line
                x1={x + 0.7}
                y1="36"
                x2={x + 0.7}
                y2="60"
                stroke="#FFAA70"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeOpacity="0.75"
              />
            </g>
          ))}

          {/* Rear Dome Debossed Accent */}
          <ellipse cx="613" cy="48" rx="2" ry="7" fill="#6B1B00" opacity="0.75" />
        </g>
      </svg>
    </div>
  );
};
