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
      data-inspect-label="OFFICIAL LTT RATCHETING SCREWDRIVER // BLACK & ORANGE"
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
            'drop-shadow(0 16px 22px rgba(0, 0, 0, 0.7)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.45))',
        }}
      >
        <defs>
          {/* =================================================================
              1. SHADOW & AMBIENT OCCLUSION GRADIENTS
             ================================================================= */}
          <linearGradient id="ltt-contact-ao" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.75" />
            <stop offset="60%" stopColor="#000000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* =================================================================
              2. PH2 S2 STEEL BIT SHADERS
             ================================================================= */}
          <linearGradient id="bit-body-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#475262" />
            <stop offset="25%" stopColor="#2D3540" />
            <stop offset="65%" stopColor="#1B2028" />
            <stop offset="100%" stopColor="#0D1015" />
          </linearGradient>

          <linearGradient id="bit-tip-flute" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1C2129" />
            <stop offset="50%" stopColor="#0F1217" />
            <stop offset="100%" stopColor="#050709" />
          </linearGradient>

          {/* =================================================================
              3. HIGH-GLOSS CHROMED SHAFT GRADIENTS
             ================================================================= */}
          <linearGradient id="chrome-shaft-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E2E7ED" />
            <stop offset="12%" stopColor="#FFFFFF" />
            <stop offset="24%" stopColor="#F8FAFC" />
            <stop offset="42%" stopColor="#CBD5E1" />
            <stop offset="68%" stopColor="#64748B" />
            <stop offset="88%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          <linearGradient id="chrome-collar-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#CBD5E1" />
            <stop offset="70%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>

          {/* Precision Diamond Knurling Pattern */}
          <pattern id="ltt-knurl-pattern" width="3.2" height="3.2" patternUnits="userSpaceOnUse">
            <path d="M0 3.2 L3.2 0 M0 0 L3.2 3.2" stroke="#475569" strokeWidth="0.75" />
            <path d="M0 3.2 L3.2 0 M0 0 L3.2 3.2" stroke="#FFFFFF" strokeWidth="0.35" strokeOpacity="0.6" />
          </pattern>

          {/* =================================================================
              4. RATCHET SELECTOR RING GRADIENTS
             ================================================================= */}
          <linearGradient id="ratchet-shell-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#374151" />
            <stop offset="18%" stopColor="#4B5563" />
            <stop offset="35%" stopColor="#2D3748" />
            <stop offset="65%" stopColor="#1A202C" />
            <stop offset="90%" stopColor="#11151D" />
            <stop offset="100%" stopColor="#080A0E" />
          </linearGradient>

          <linearGradient id="ratchet-chamfer-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4B5563" />
            <stop offset="30%" stopColor="#2D3748" />
            <stop offset="80%" stopColor="#171C24" />
            <stop offset="100%" stopColor="#0D1015" />
          </linearGradient>

          {/* =================================================================
              5. SIGNATURE LTT ORANGE ACCENT WASHER RING
             ================================================================= */}
          <linearGradient id="ltt-orange-ring-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF9343" />
            <stop offset="25%" stopColor="#FF7019" />
            <stop offset="60%" stopColor="#E04F00" />
            <stop offset="88%" stopColor="#9E3200" />
            <stop offset="100%" stopColor="#661F00" />
          </linearGradient>

          {/* =================================================================
              6. ERGONOMIC MATTE BLACK TRI-LOBE HANDLE GRADIENTS
             ================================================================= */}
          {/* Upper Facet (Catching Diffuse Overhead Daylight) */}
          <linearGradient id="handle-upper-facet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3B4452" />
            <stop offset="15%" stopColor="#4E5868" />
            <stop offset="32%" stopColor="#353D4A" />
            <stop offset="65%" stopColor="#212730" />
            <stop offset="100%" stopColor="#14181F" />
          </linearGradient>

          {/* Lower Facet / Underbelly (Soft Ground Reflection) */}
          <linearGradient id="handle-lower-facet" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E232B" />
            <stop offset="40%" stopColor="#151920" />
            <stop offset="85%" stopColor="#0D1015" />
            <stop offset="100%" stopColor="#07080B" />
          </linearGradient>

          {/* Longitudinal Ridge Specular Highlight */}
          <linearGradient id="handle-specular-sweep" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="15%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.28" />
            <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          {/* =================================================================
              7. SIGNATURE LTT VIBRANT ORANGE ENDCAP GRADIENTS
             ================================================================= */}
          <linearGradient id="ltt-orange-cap-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFA15C" />
            <stop offset="16%" stopColor="#FF7A24" />
            <stop offset="45%" stopColor="#F05600" />
            <stop offset="75%" stopColor="#B83900" />
            <stop offset="92%" stopColor="#822500" />
            <stop offset="100%" stopColor="#4A1400" />
          </linearGradient>

          <linearGradient id="endcap-dome-highlight" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFE1CC" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFA66A" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D94800" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Rotational Container: maps horizontal 640x96 coordinates to 96x640 with tip pointing TOP */}
        <g transform={isVertical ? 'rotate(90) translate(0, -96)' : undefined}>
          {/* =================================================================
              A. AMBIENT OCCLUSION GROUND SHADOW
             ================================================================= */}
          <ellipse cx="340" cy="62" rx="280" ry="14" fill="url(#ltt-contact-ao)" />
          <ellipse cx="230" cy="58" rx="60" ry="8" fill="url(#ltt-contact-ao)" opacity="0.6" />

          {/* =================================================================
              B. DARK S2 PH2 PHILLIPS BIT (TIP AT LEFT / TOP)
             ================================================================= */}
          {/* Cruciform Tapered Point */}
          <path
            d="M 36 48 L 48 43 L 58 43.5 L 58 52.5 L 48 53 Z"
            fill="url(#bit-body-grad)"
          />
          {/* Phillips Cutaway Flutes */}
          <path d="M 36 48 L 46 45 L 56 46 L 46 48 L 56 50 L 46 51 Z" fill="url(#bit-tip-flute)" />
          {/* Bit Specular Edge Highlights */}
          <line x1="38" y1="48" x2="58" y2="48" stroke="#94A3B8" strokeWidth="0.8" strokeOpacity="0.6" />
          <line x1="48" y1="43.5" x2="48" y2="52.5" stroke="#1E293B" strokeWidth="0.7" />

          {/* 1/4" Hex Shank Section */}
          <rect x="58" y="43" width="8" height="10" fill="url(#bit-body-grad)" />
          <line x1="58" y1="44" x2="66" y2="44" stroke="#CBD5E1" strokeWidth="0.6" strokeOpacity="0.5" />

          {/* =================================================================
              C. STEPPED POLISHED CHROME SHAFT WITH KNURLED TWIRLING COLLAR
             ================================================================= */}
          {/* 1. Front Smooth Polished Barrel */}
          <rect
            x="66"
            y="41"
            width="94"
            height="14"
            rx="1"
            fill="url(#chrome-shaft-grad)"
          />
          {/* Razor Sharp White Specular Highlight */}
          <line x1="68" y1="43" x2="158" y2="43" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" />
          <line x1="68" y1="45" x2="158" y2="45" stroke="#F8FAFC" strokeWidth="0.8" strokeOpacity="0.7" />
          {/* Dark Underside Reflection */}
          <line x1="67" y1="53.5" x2="159" y2="53.5" stroke="#1E293B" strokeWidth="1" strokeOpacity="0.75" />

          {/* Stepped Transition Shoulder */}
          <rect x="160" y="41.5" width="4" height="13" rx="0.5" fill="url(#chrome-collar-grad)" />

          {/* 2. Precision Diamond Knurled Twirl Zone */}
          <rect
            x="164"
            y="42"
            width="78"
            height="12"
            fill="url(#chrome-shaft-grad)"
          />
          <rect
            x="164"
            y="42"
            width="78"
            height="12"
            fill="url(#ltt-knurl-pattern)"
          />
          {/* Specular Highlight through knurling */}
          <line x1="164" y1="43.5" x2="242" y2="43.5" stroke="#FFFFFF" strokeWidth="0.9" strokeOpacity="0.5" />
          <line x1="164" y1="52.5" x2="242" y2="52.5" stroke="#0F172A" strokeWidth="0.8" strokeOpacity="0.6" />

          {/* 3. Rear Stepped Collar Entering Ratchet */}
          <rect x="242" y="41.5" width="6" height="13" rx="0.5" fill="url(#chrome-collar-grad)" />
          <rect x="248" y="41" width="18" height="14" fill="url(#chrome-shaft-grad)" />
          <line x1="248" y1="43" x2="266" y2="43" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" />
          <rect x="264" y="40" width="3" height="16" rx="0.5" fill="#1E293B" />

          {/* =================================================================
              D. TEXTURED RATCHET SELECTOR RING (COMPOSITE BLACK)
             ================================================================= */}
          {/* Front Chamfer Transition */}
          <path
            d="M 267 38 L 278 33 L 278 63 L 267 58 Z"
            fill="url(#ratchet-chamfer-grad)"
          />
          <line x1="268" y1="38" x2="278" y2="33" stroke="#64748B" strokeWidth="0.8" strokeOpacity="0.6" />

          {/* Main Cylindrical Ratchet Body */}
          <rect
            x="278"
            y="32"
            width="56"
            height="32"
            rx="1.5"
            fill="url(#ratchet-shell-grad)"
          />
          {/* Top Curvature Highlight */}
          <path
            d="M 278 34.5 L 334 34.5"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.32"
          />

          {/* Precision Fluted Grip Splines (Vertical Grooves) */}
          {[283, 288, 293, 298, 303, 308, 313, 318, 323, 328].map((x) => (
            <g key={x}>
              <line x1={x} y1="35" x2={x} y2="61" stroke="#090B0E" strokeWidth="1.8" />
              <line
                x1={x + 0.8}
                y1="35"
                x2={x + 0.8}
                y2="61"
                stroke="#6B7280"
                strokeWidth="0.7"
                strokeOpacity="0.45"
              />
            </g>
          ))}

          {/* Ratchet Direction Indicator Chevron (< | >) */}
          <g transform="translate(301, 45)" opacity="0.65">
            <path d="M 0 3 L 4 0 L 4 6 Z" fill="#94A3B8" />
            <rect x="6" y="0" width="1.5" height="6" fill="#E2E8F0" />
            <path d="M 13 3 L 9 0 L 9 6 Z" fill="#94A3B8" />
          </g>

          {/* =================================================================
              E. SIGNATURE LTT VIBRANT ORANGE ACCENT WASHER RING
             ================================================================= */}
          <rect
            x="334"
            y="33"
            width="5.5"
            height="30"
            rx="1"
            fill="url(#ltt-orange-ring-grad)"
          />
          <line x1="335" y1="34" x2="335" y2="62" stroke="#FFD8B3" strokeWidth="0.9" strokeOpacity="0.85" />
          <line x1="339" y1="34" x2="339" y2="62" stroke="#4A1400" strokeWidth="0.8" />

          {/* =================================================================
              F. CONTOURED ERGONOMIC MATTE BLACK HANDLE
             ================================================================= */}
          {/* 1. Upper Light-Catching Facet (Anatomy matching the photograph) */}
          <path
            d="M 339.5 33.5
               C 346 33.5, 355 34.5, 368 35.5
               C 382 36.5, 396 30, 420 29
               L 556 29
               C 564 29, 570 31, 573 34
               L 573 48
               L 339.5 48
               Z"
            fill="url(#handle-upper-facet)"
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
            fill="url(#handle-lower-facet)"
          />

          {/* 3. Smooth Facet Apex Blend Line */}
          <line
            x1="342"
            y1="48"
            x2="572"
            y2="48"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.2"
          />

          {/* 4. Top Soft Specular Sweep along Handle Arch */}
          <path
            d="M 345 35
               C 370 36, 395 30.5, 425 30
               L 550 30"
            stroke="url(#handle-specular-sweep)"
            strokeWidth="2.4"
            strokeLinecap="round"
          />

          {/* 5. Precision Cartridge Pull Seam */}
          <line x1="573" y1="29.5" x2="573" y2="66.5" stroke="#050709" strokeWidth="2" />
          <line x1="574" y1="30" x2="574" y2="66" stroke="#334155" strokeWidth="0.6" strokeOpacity="0.6" />

          {/* =================================================================
              G. SIGNATURE LTT VIBRANT ORANGE ROTATING ENDCAP
             ================================================================= */}
          {/* Main Orange Endcap D-Dome Body */}
          <path
            d="M 574 30.5
               L 596 31
               C 607 32, 616 38, 616 48
               C 616 58, 607 64, 596 65
               L 574 65.5
               Z"
            fill="url(#ltt-orange-cap-grad)"
          />

          {/* Top Dome Specular Arc */}
          <path
            d="M 576 33
               C 592 34, 608 39, 612 46"
            stroke="url(#endcap-dome-highlight)"
            strokeWidth="1.6"
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
                strokeOpacity="0.7"
              />
            </g>
          ))}

          {/* Rear Dome Debossed Accent */}
          <ellipse cx="613" cy="48" rx="2" ry="7" fill="#6B1B00" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
};
