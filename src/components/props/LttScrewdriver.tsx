import React from 'react';

export const LttScrewdriver: React.FC<{
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}> = ({ className = '', orientation = 'horizontal' }) => {
  return (
    <div
      data-inspectable="true"
      data-inspect-label="OFFICIAL LTT RATCHETING SCREWDRIVER // BLACK & ORANGE"
      className={`relative select-none pointer-events-auto cursor-crosshair ${className}`}
      style={{
        filter:
          'drop-shadow(0 6px 10px rgba(0, 0, 0, 0.7)) drop-shadow(0 18px 30px rgba(0, 0, 0, 0.5))',
      }}
    >
      {orientation === 'horizontal' ? (
        <svg
          width="440"
          height="80"
          viewBox="0 0 440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Dark Phosphate Bit Gradient */}
            <linearGradient id="lttBitGradH" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4B5563" />
              <stop offset="35%" stopColor="#1F2937" />
              <stop offset="70%" stopColor="#111827" />
              <stop offset="100%" stopColor="#030712" />
            </linearGradient>

            {/* Polished Chrome Shaft Gradient */}
            <linearGradient id="lttChromeShaftH" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="20%" stopColor="#F3F4F6" />
              <stop offset="45%" stopColor="#E5E7EB" />
              <stop offset="75%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#4B5563" />
            </linearGradient>

            {/* Knurled Shaft Zone Gradient */}
            <linearGradient id="lttKnurlGradH" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E5E7EB" />
              <stop offset="25%" stopColor="#D1D5DB" />
              <stop offset="60%" stopColor="#9CA3AF" />
              <stop offset="100%" stopColor="#4B5563" />
            </linearGradient>

            {/* Ratchet Selector Ring Matte Black Gradient */}
            <linearGradient id="lttRatchetGradH" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="25%" stopColor="#222834" />
              <stop offset="60%" stopColor="#181D26" />
              <stop offset="100%" stopColor="#0B0E14" />
            </linearGradient>

            {/* LTT Accent Orange Ring Gradient */}
            <linearGradient id="lttAccentOrangeH" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="30%" stopColor="#F97316" />
              <stop offset="70%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#9A3412" />
            </linearGradient>

            {/* Smooth Matte Black Contoured Handle Gradient */}
            <linearGradient id="lttHandleGradH" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475163" />
              <stop offset="18%" stopColor="#2A313E" />
              <stop offset="45%" stopColor="#1C212B" />
              <stop offset="80%" stopColor="#12161D" />
              <stop offset="100%" stopColor="#090B0F" />
            </linearGradient>

            {/* Handle Top Specular Light Reflection */}
            <linearGradient id="lttTopHighlightH" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="25%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="65%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>

            {/* Vibrant LTT Orange Endcap Gradient */}
            <linearGradient id="lttEndcapOrangeH" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FB923C" />
              <stop offset="25%" stopColor="#F97316" />
              <stop offset="65%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#9A3412" />
            </linearGradient>
          </defs>

          {/* ===================================================================
              1. DARK PHOSPHATE S2 STEEL BIT (PH2)
             =================================================================== */}
          {/* Bit Tip (Cross Fluted Point) */}
          <path
            d="M 34 40 L 44 36 L 54 36.5 L 54 43.5 L 44 44 Z"
            fill="url(#lttBitGradH)"
            stroke="#1F2937"
            strokeWidth="0.8"
          />
          {/* Flute Cross Ridge Highlights */}
          <line x1="35" y1="40" x2="48" y2="40" stroke="#9CA3AF" strokeWidth="0.9" />
          <line x1="44" y1="36" x2="44" y2="44" stroke="#111827" strokeWidth="0.8" />

          {/* Bit Hex Shank Collar */}
          <rect
            x="52"
            y="37"
            width="4"
            height="6"
            fill="url(#lttBitGradH)"
            stroke="#111827"
            strokeWidth="0.7"
          />

          {/* ===================================================================
              2. STEPPED POLISHED CHROME SHAFT WITH KNURLED TWIRL ZONE
             =================================================================== */}
          {/* Section A: Front Smooth Polished Steel Barrel */}
          <rect
            x="56"
            y="35"
            width="64"
            height="10"
            rx="1"
            fill="url(#lttChromeShaftH)"
            stroke="#6B7280"
            strokeWidth="0.8"
          />
          {/* Polished Specular Highlight Streak */}
          <line
            x1="57"
            y1="36.5"
            x2="120"
            y2="36.5"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            opacity="0.95"
          />

          {/* Stepped Transition Shoulder */}
          <path
            d="M 120 35.5 L 123 36.5 L 123 43.5 L 120 44.5 Z"
            fill="#9CA3AF"
            stroke="#4B5563"
            strokeWidth="0.6"
          />

          {/* Section B: Precision Diamond-Knurled Shaft Grip */}
          <rect
            x="123"
            y="36.5"
            width="48"
            height="7"
            fill="url(#lttKnurlGradH)"
            stroke="#4B5563"
            strokeWidth="0.7"
          />
          {/* Knurl Texture Hatch Pattern */}
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={`kn1-${i}`}
              x1={124 + i * 2.6}
              y1="36.5"
              x2={126.5 + i * 2.6}
              y2="43.5"
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="0.6"
            />
          ))}
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={`kn2-${i}`}
              x1={126.5 + i * 2.6}
              y1="36.5"
              x2={124 + i * 2.6}
              y2="43.5"
              stroke="rgba(0, 0, 0, 0.45)"
              strokeWidth="0.6"
            />
          ))}

          {/* Section C: Rear Polished Stepped Collar Entering Ratchet */}
          <rect
            x="171"
            y="35"
            width="17"
            height="10"
            rx="0.5"
            fill="url(#lttChromeShaftH)"
            stroke="#6B7280"
            strokeWidth="0.8"
          />
          <line
            x1="171"
            y1="36.5"
            x2="188"
            y2="36.5"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            opacity="0.9"
          />

          {/* ===================================================================
              3. RATCHETING SELECTOR RING (BLACK COMPOSITE WITH FLUTED RIBS)
             =================================================================== */}
          {/* Front Chamfer Collar */}
          <path
            d="M 188 34.5 L 194 30 L 194 50 L 188 45.5 Z"
            fill="url(#lttRatchetGradH)"
            stroke="#1E2430"
            strokeWidth="0.8"
          />

          {/* Main Ratchet Ring Body */}
          <rect
            x="194"
            y="29"
            width="42"
            height="22"
            rx="2"
            fill="url(#lttRatchetGradH)"
            stroke="#181D26"
            strokeWidth="1"
          />

          {/* Ratchet Longitudinal Grip Flutes */}
          {Array.from({ length: 11 }).map((_, i) => (
            <g key={`rf-${i}`}>
              <line
                x1={202 + i * 3}
                y1="30"
                x2={202 + i * 3}
                y2="50"
                stroke="#0D1015"
                strokeWidth="1.2"
              />
              <line
                x1={202.6 + i * 3}
                y1="30"
                x2={202.6 + i * 3}
                y2="50"
                stroke="rgba(255, 255, 255, 0.18)"
                strokeWidth="0.6"
              />
            </g>
          ))}

          {/* Directional Chevron Icon (< | >) in Center */}
          <g opacity="0.65">
            <path
              d="M 211 41 L 209 40 L 211 39"
              stroke="#CBD5E1"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <line
              x1="215"
              y1="38"
              x2="215"
              y2="42"
              stroke="#CBD5E1"
              strokeWidth="1"
              strokeLinecap="round"
            />
            <path
              d="M 219 39 L 221 40 L 219 41"
              stroke="#CBD5E1"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </g>

          {/* Ratchet Top Light Highlight */}
          <line
            x1="195"
            y1="30"
            x2="236"
            y2="30"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="0.8"
          />

          {/* ===================================================================
              4. SIGNATURE LTT ACCENT ORANGE RING (O-RING / ACCENT WASHER)
             =================================================================== */}
          <rect
            x="236"
            y="30"
            width="5"
            height="20"
            rx="1"
            fill="url(#lttAccentOrangeH)"
            stroke="#9A3412"
            strokeWidth="0.8"
          />
          <line
            x1="236.5"
            y1="30.5"
            x2="240.5"
            y2="30.5"
            stroke="#FED7AA"
            strokeWidth="0.8"
          />

          {/* ===================================================================
              5. ERGONOMIC CONTOURED MATTE BLACK HANDLE
             =================================================================== */}
          {/* Smooth Contoured Handle Path matching LTT Silhouette */}
          <path
            d="M 241 30.5 
               C 246 30.5, 254 31, 262 31.5
               C 272 32, 282 27, 298 26.5
               C 318 26, 360 26, 385 27
               L 385 53
               C 360 54, 318 54, 298 53.5
               C 282 53, 272 48, 262 48.5
               C 254 49, 246 49.5, 241 49.5
               Z"
            fill="url(#lttHandleGradH)"
            stroke="#232934"
            strokeWidth="1.2"
          />

          {/* Top Smooth Facet Ambient Highlight */}
          <path
            d="M 245 32 
               C 270 33, 285 28, 305 27.5
               C 325 27, 365 27, 382 28"
            stroke="url(#lttTopHighlightH)"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Subtle Ergonomic Tri-Lobe Center Ridge Specular */}
          <path
            d="M 268 36 C 290 34, 335 34, 380 35"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="1.5"
          />

          {/* Bottom Contact Shadow Curve */}
          <path
            d="M 245 48 C 275 48, 325 53, 382 52.5"
            stroke="rgba(0, 0, 0, 0.5)"
            strokeWidth="1.5"
          />

          {/* Fine Seam Line before Orange Endcap */}
          <line x1="385" y1="27" x2="385" y2="53" stroke="#000000" strokeWidth="1.4" />
          <line x1="386" y1="27" x2="386" y2="53" stroke="#374151" strokeWidth="0.6" />

          {/* ===================================================================
              6. SIGNATURE LTT VIBRANT ORANGE ROTATING ENDCAP
             =================================================================== */}
          {/* Orange Endcap Main Body with Rounded Dome */}
          <path
            d="M 386 27.5
               L 404 28
               C 413 28.5, 418 33, 418 40
               C 418 47, 413 51.5, 404 52
               L 386 52.5
               Z"
            fill="url(#lttEndcapOrangeH)"
            stroke="#9A3412"
            strokeWidth="1"
          />

          {/* Vertical Ribbed Grip Flutes on Orange Endcap */}
          {Array.from({ length: 6 }).map((_, i) => (
            <line
              key={`er-${i}`}
              x1={391 + i * 3.2}
              y1="30"
              x2={391 + i * 3.2}
              y2="50"
              stroke="#C2410C"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          ))}

          {/* Endcap Top Specular Highlight */}
          <path
            d="M 387 28.5 C 398 29, 410 31, 414 36"
            stroke="#FED7AA"
            strokeWidth="1"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        /* Vertical Variant */
        <svg
          width="80"
          height="440"
          viewBox="0 0 80 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Rotated 90 deg view matching horizontal precision */}
          <g transform="rotate(90, 40, 40) translate(0, -360)">
            {/* Same components rendered vertically */}
            <path
              d="M 34 40 L 44 36 L 54 36.5 L 54 43.5 L 44 44 Z"
              fill="url(#lttBitGradH)"
              stroke="#1F2937"
              strokeWidth="0.8"
            />
            <line x1="35" y1="40" x2="48" y2="40" stroke="#9CA3AF" strokeWidth="0.9" />
            <rect x="52" y="37" width="4" height="6" fill="url(#lttBitGradH)" stroke="#111827" strokeWidth="0.7" />
            <rect x="56" y="35" width="64" height="10" rx="1" fill="url(#lttChromeShaftH)" stroke="#6B7280" strokeWidth="0.8" />
            <line x1="57" y1="36.5" x2="120" y2="36.5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.95" />
            <rect x="123" y="36.5" width="48" height="7" fill="url(#lttKnurlGradH)" stroke="#4B5563" strokeWidth="0.7" />
            <rect x="171" y="35" width="17" height="10" rx="0.5" fill="url(#lttChromeShaftH)" stroke="#6B7280" strokeWidth="0.8" />
            <line x1="171" y1="36.5" x2="188" y2="36.5" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.9" />
            <rect x="194" y="29" width="42" height="22" rx="2" fill="url(#lttRatchetGradH)" stroke="#181D26" strokeWidth="1" />
            <rect x="236" y="30" width="5" height="20" rx="1" fill="url(#lttAccentOrangeH)" stroke="#9A3412" strokeWidth="0.8" />
            <path
              d="M 241 30.5 C 246 30.5, 254 31, 262 31.5 C 272 32, 282 27, 298 26.5 C 318 26, 360 26, 385 27 L 385 53 C 360 54, 318 54, 298 53.5 C 282 53, 272 48, 262 48.5 C 254 49, 246 49.5, 241 49.5 Z"
              fill="url(#lttHandleGradH)"
              stroke="#232934"
              strokeWidth="1.2"
            />
            <line x1="385" y1="27" x2="385" y2="53" stroke="#000000" strokeWidth="1.4" />
            <path
              d="M 386 27.5 L 404 28 C 413 28.5, 418 33, 418 40 C 418 47, 413 51.5, 404 52 L 386 52.5 Z"
              fill="url(#lttEndcapOrangeH)"
              stroke="#9A3412"
              strokeWidth="1"
            />
          </g>
        </svg>
      )}
    </div>
  );
};
