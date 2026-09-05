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
        width: isVertical ? '90px' : '620px',
        height: isVertical ? '540px' : '110px',
        ...style,
      }}
    >
      <svg
        viewBox={isVertical ? '0 0 110 620' : '0 0 620 110'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{
          filter:
            'drop-shadow(0 14px 18px rgba(0, 0, 0, 0.65)) drop-shadow(0 4px 6px rgba(0, 0, 0, 0.4))',
        }}
      >
        <defs>
          {/* Ambient Contact Occlusion Shadow */}
          <linearGradient id="ltt-contact-shadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </linearGradient>

          {/* Steeled Phillips Bit Gradient */}
          <linearGradient id="bit-metallic" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#242830" />
            <stop offset="35%" stopColor="#555E6D" />
            <stop offset="65%" stopColor="#1E2127" />
            <stop offset="100%" stopColor="#0E1013" />
          </linearGradient>

          {/* Polished Chrome Shaft Gradient */}
          <linearGradient id="shaft-metallic" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A5260" />
            <stop offset="15%" stopColor="#9AA5B5" />
            <stop offset="32%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#6C7789" />
            <stop offset="85%" stopColor="#30353F" />
            <stop offset="100%" stopColor="#1C1F26" />
          </linearGradient>

          {/* Knurled Pattern for the Shaft Finger Collar */}
          <pattern id="knurl-grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M0 4L4 0M0 0L4 4" stroke="#485363" strokeWidth="0.8" />
            <path d="M0 4L4 0M0 0L4 4" stroke="#FFFFFF" strokeWidth="0.3" strokeOpacity="0.4" />
          </pattern>

          {/* Ratchet Selector Ring Body */}
          <linearGradient id="ratchet-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2F333B" />
            <stop offset="20%" stopColor="#464C57" />
            <stop offset="50%" stopColor="#1F2329" />
            <stop offset="85%" stopColor="#131519" />
            <stop offset="100%" stopColor="#0A0B0D" />
          </linearGradient>

          {/* High-Visibility LTT Orange Trim Ring */}
          <linearGradient id="ltt-orange-ring" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF7A29" />
            <stop offset="30%" stopColor="#FFA166" />
            <stop offset="70%" stopColor="#E65100" />
            <stop offset="100%" stopColor="#8A2B00" />
          </linearGradient>

          {/* Faceted Matte Black Tri-Lobe Handle */}
          <linearGradient id="handle-facet-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2C313B" />
            <stop offset="25%" stopColor="#414754" />
            <stop offset="60%" stopColor="#252932" />
            <stop offset="100%" stopColor="#13161C" />
          </linearGradient>

          <linearGradient id="handle-ridge-highlight" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.03" />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
          </linearGradient>

          {/* LTT Signature Molded Orange Endcap */}
          <linearGradient id="ltt-orange-endcap" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FF731D" />
            <stop offset="20%" stopColor="#FF9B5E" />
            <stop offset="60%" stopColor="#DD4800" />
            <stop offset="88%" stopColor="#9C2E00" />
            <stop offset="100%" stopColor="#5E1A00" />
          </linearGradient>
        </defs>

        {/* Content Container (Rotated when vertical to point TIP to the TOP) */}
        <g transform={isVertical ? 'rotate(90) translate(0, -110)' : undefined}>
          {/* 1. Contact Ambient Occlusion Ground Silhouette */}
          <ellipse cx="320" cy="74" rx="275" ry="12" fill="url(#ltt-contact-shadow)" opacity="0.35" />

          {/* 2. Phillips Bit Assembly */}
          <g id="bit-tip">
            <path d="M48 55 L65 47 L78 47 L78 63 L65 63 Z" fill="url(#bit-metallic)" />
            {/* Flute cutaways */}
            <path d="M48 55 L62 51 L72 52 L62 55 L72 58 L62 59 Z" fill="#14171C" />
            <path d="M52 55 L78 55" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />
          </g>

          {/* 3. Stepped Chrome Shaft & Magnet Collet */}
          <g id="shaft-and-collar">
            {/* Front Magnet Barrel Housing */}
            <rect x="78" y="44" width="86" height="22" rx="1.5" fill="url(#shaft-metallic)" />
            <line x1="80" y1="47" x2="162" y2="47" stroke="#FFFFFF" strokeWidth="1.2" strokeOpacity="0.65" />
            <line x1="80" y1="62" x2="162" y2="62" stroke="#000000" strokeWidth="1" strokeOpacity="0.45" />

            {/* Stepped Transition Ring */}
            <rect x="164" y="46" width="6" height="18" rx="0.5" fill="#2B303A" />

            {/* Knurled Shaft Section */}
            <rect x="170" y="45.5" width="68" height="19" fill="url(#shaft-metallic)" />
            <rect x="170" y="45.5" width="68" height="19" fill="url(#knurl-grid)" />
            <line x1="170" y1="47" x2="238" y2="47" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.4" />

            {/* Rear Shaft Shank Entering Ratchet Collar */}
            <rect x="238" y="46.5" width="28" height="17" fill="url(#shaft-metallic)" />
            <rect x="250" y="45" width="5" height="20" rx="1" fill="#1C1F26" />
          </g>

          {/* 4. Textured Directional Ratchet Selector Ring */}
          <g id="ratchet-selector">
            {/* Main Ratchet Housing */}
            <path
              d="M266 38 C275 36 295 36 322 36 L324 74 C295 74 275 74 266 72 C262 67 262 43 266 38 Z"
              fill="url(#ratchet-body)"
            />
            {/* Top highlight specular on ratchet */}
            <path
              d="M268 41 C280 39 304 39 322 39"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeOpacity="0.35"
              strokeLinecap="round"
            />

            {/* Gripping Grooves / Splines */}
            {[274, 279, 284, 289, 294, 299, 304, 309, 314, 319].map((x) => (
              <g key={x}>
                <line x1={x} y1="41" x2={x} y2="69" stroke="#0C0E11" strokeWidth="1.6" />
                <line
                  x1={x + 0.8}
                  y1="41"
                  x2={x + 0.8}
                  y2="69"
                  stroke="#525B6C"
                  strokeWidth="0.8"
                  strokeOpacity="0.4"
                />
              </g>
            ))}

            {/* Ratchet Direction Indicator Chevron (< | >) */}
            <g transform="translate(293, 52)" opacity="0.6">
              <path d="M0 3 L4 0 L4 6 Z" fill="#6B7280" />
              <rect x="6" y="0" width="1.5" height="6" fill="#9CA3AF" />
              <path d="M13 3 L9 0 L9 6 Z" fill="#6B7280" />
            </g>

            {/* High-Visibility LTT Orange Accent Ring Seam */}
            <rect x="325" y="37.5" width="4.5" height="35" rx="0.5" fill="url(#ltt-orange-ring)" />
            <line x1="326" y1="39" x2="326" y2="71" stroke="#FFD8B3" strokeWidth="0.8" strokeOpacity="0.75" />
          </g>

          {/* 5. Ergonomic Tri-Lobe Handle */}
          <g id="handle-body">
            {/* Main Contoured Handle Shell */}
            <path
              d="M331 38 
                 C338 38 345 37 356 36 
                 C370 34.5 385 32 405 32 
                 L536 32 
                 C542 32 546 34 548 37
                 L548 73 
                 C546 76 542 78 536 78 
                 L405 78 
                 C385 78 370 75.5 356 74 
                 C345 73 338 72 331 72 
                 Z"
              fill="url(#handle-facet-top)"
            />

            {/* Tri-Lobe Waist Contour Chamfer & Shading */}
            <path
              d="M348 40 
                 C362 43 378 45 402 45 
                 L538 45 
                 L538 65 
                 L402 65 
                 C378 65 362 67 348 70 
                 Z"
              fill="#12151B"
              opacity="0.35"
            />

            {/* Subtle Matte Ridge Specular Highlight (The Tri-Lobe Apex) */}
            <line x1="365" y1="36" x2="534" y2="36" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.22" />
            <rect x="345" y="32" width="190" height="46" fill="url(#handle-ridge-highlight)" pointerEvents="none" />

            {/* Precision Endcap Pull-Out Separation Seam */}
            <line x1="539" y1="32" x2="539" y2="78" stroke="#000000" strokeWidth="2" />
            <line x1="540" y1="33" x2="540" y2="77" stroke="#374151" strokeWidth="0.8" strokeOpacity="0.5" />
          </g>

          {/* 6. LTT Signature Orange Endcap (Bit Storage Reservoir) */}
          <g id="orange-endcap">
            {/* Main Orange Endcap D-Profile */}
            <path
              d="M541 33.5
                 C545 33.5 558 35 565 39 
                 C571 43 574 48 574 55 
                 C574 62 571 67 565 71 
                 C558 75 545 76.5 541 76.5 
                 Z"
              fill="url(#ltt-orange-endcap)"
            />

            {/* Top Radial Highlight */}
            <path
              d="M543 36 C554 37 563 41 567 46"
              stroke="#FFE2CC"
              strokeWidth="1.2"
              strokeOpacity="0.6"
              strokeLinecap="round"
            />

            {/* Tactile Endcap Pull Splines */}
            {[550, 555, 560].map((x) => (
              <path
                key={x}
                d={`M${x} 42 C${x + 2} 48 ${x + 2} 62 ${x} 68`}
                stroke="#B33600"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            ))}

            {/* Subtle Debossed End Accent */}
            <ellipse cx="572" cy="55" rx="1.5" ry="7" fill="#802600" opacity="0.6" />
          </g>
        </g>
      </svg>
    </div>
  );
};
