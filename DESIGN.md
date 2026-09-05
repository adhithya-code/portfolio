# Design System & UI Specification

## 1. Design Tokens & Styling Implementation
- Framework: Tailwind CSS v3/v4 + Framer Motion.
- Base Resolution & Display Target: Calibrated for high-DPI and OLED panels; zero subpixel text fringing.
- Component Primitives: shadcn/ui (Radix Primitives) stripped of all rounded "SaaS" radius tokens in favor of industrial chamfers, tight technical paddings, and hairline contrast.

### Palette Tokens
- Background Chassis: #090A0C
- Background Substrate: #14171D
- Background Surface Elevated: #1B2028
- Border Chamfer: #2D323E
- Border Active: #4A5263
- Accent Copper: #D97736
- Accent Gold: #E85D04
- Signal Cyan: #00F0FF
- LED Green: #00E599
- Text Primary: #EDEDED
- Text Muted: #8B949E
- Text Dim: #4B5363

### Typography Rules
- Sans: Geist, -apple-system, BlinkMacSystemFont, sans-serif
- Mono: JetBrains Mono, monospace (Strict tabular numbers)

---

## 2. Interaction Physics & Sensory Mechanics

### Reticle Cursor Engine
- Custom fixed overlay tracking mouse coordinates with sub-millisecond requestAnimationFrame updates.
- Monospace coordinate readout (X: [val] Y: [val]) anchored 12px offset from the crosshair center.
- Snap Logic: Hovering over any DOM element marked with data-inspectable="true" causes 4 corner brackets ([ ]) to smoothly snap to that element's bounding client rect.
- Touch/Mobile Fallback: Automatically unmount on touch devices (@media (pointer: coarse)); restore native touch gestures.

### Motion Easing & Timing
- Strict Mechanical Easing: cubic-bezier(0.16, 1, 0.3, 1) for all transforms.
- Snap & Lock Duration: 150ms to 220ms max.
- Banned: Float, wobble, or bouncy spring physics (type: "spring", damping: 10).

### Audio Feedback Engine
- Web Audio API / synthetic short burst engine or clean microswitch sample player.
- Relay Click: 12ms impulse with sharp transient cutoff (for KVM input switching).
- Port Connect: Low-resonance metallic friction snap (for I/O panel clicks).
- Rotary Tick: 4ms high-frequency detent click (for teardown layer steps).
- Master Safety Gate: Defaults to muted. Requires explicit AUDIO ENGINE: ENGAGED activation via the top navigation toggle.

---

## 3. Anti-AI / Anti-Template Directives & Real-World Matrix

### Zero "AI-ish" Design Language
- Banned: Violet/indigo/purple glowing gradients, mesh gradient orbs, blurry glassmorphism with high-radius rounded corners (rounded-2xl, rounded-3xl), animated pulsing "magic AI sparkles" icons, and generic centered marketing heroes.
- Enforced: Industrial chamfers (rounded-none or rounded-[2px]), strict 1px hairline borders (#2D323E), physical surface textures (matte anodized dark aluminum #090A0C, brushed chassis panels #14171D, solder mask hues, ENIG copper/gold pads #D97736), and dense, structured technical telemetry.

### Avoid "Gimmicky / Unusable Niche" Traps
- No Cryptic Hacker Terminals: Do not make the interface an unreadable terminal emulator, low-contrast ASCII soup, or an ARG puzzle where links are hidden.
- Instant Scannability: Information hierarchy must be instantaneous: high-contrast text, clinical labels, obvious click targets, and predictable standard scroll/click behaviors. A recruiter or engineering manager must be able to read architecture specs or copy an email address in under 2 seconds.

### Mandatory Real-World References & Design Sources
1. Hardware & Consumer Electronics Interfaces:
   - Teenage Engineering (teenage.engineering): Minimalist industrial design, mechanical tactile switches, distinct labeling grids, high-contrast monochrome with deliberate industrial accents, functional dials.
   - Framework Computer (frame.work): Modular card layouts, transparent exploded component architectures, repairability documentation, clean engineering cutaways.
   - Nothing (nothing.tech): Dot-matrix typographic accents, transparent hardware aesthetics, physical component isolation, zero-bloat UI.
   - Analogue (analogue.co): Precision consumer hardware packaging, reference-grade photography layouts, razor-sharp technical typography, clinical contrast.
   - ASUS ProArt & ROG Component Architecture: Dark brushed aluminum backplates, CNC edge chamfers, matte-black heatsinks, laser-etched silkscreen pinout labels, high-density rear I/O layouts.
2. Award-Tier Design Engineering & Technical Portfolios:
   - Linear (linear.app): High-density software tooling, hairline borders, keyboard-first navigation cues, zero wasted whitespace, instant UI state transitions.
   - Stripe Press (press.stripe.com): Physical artifact tactile rendering, high-end editorial typography, physical grid disciplines, tactile page/layer interactions.
   - Vercel Design System & Geist Guidelines: Extreme typographic discipline, geometric neutrality, tabular numeral alignment, high-contrast dark mode execution.
   - Raycast (raycast.com): High-density monospace telemetry, instant-action shortcuts, clean mechanical layout hierarchy.
3. Open-Source Repositories & Component Design Systems:
   - shadcn/ui (Radix Primitives) customized to Industrial Spec: Use raw accessibility/focus logic, strip all rounded borders and padding. Re-skin with rounded-none, border-chamfer, and bg-substrate.
   - Aceternity UI & Magic UI (Selective Curation): Tracing beams and border beams recalibrated to copper (#D97736) or gold with linear/cubic-bezier mechanical timing. Strip all purple neon.
   - Emil Kowalski's Principles (emilkowal.ski): Micro-interactions, non-spring mechanical easing cubic-bezier(0.16, 1, 0.3, 1), and zero layout shift.
   - GitHub Octicons & Lucide Icons (Strictly Technical): Only use circuit/hardware glyphs (Cpu, Layers, Terminal, Sliders, Activity, Gauge, Zap). Avoid marketing glyphs.
4. Hardware Lab Instrumentation & Telemetry Dashboards:
   - Digital Oscilloscopes & Logic Analyzers (Tektronix, Keysight, Saleae): High-contrast waveform grids, voltage/time scale readouts, trigger markers, tabular register dumps.
   - HWiNFO64 & AIDA64 Sensor Panels: Ultra-dense tabular system monitors tracking clock speeds, package TDP (W), junction temps, and bus utilization without decorative padding.
   - Modern High-Performance UEFI / BIOS Screens (ASUS / MSI Pro): Clean dark backgrounds, high-contrast monospace status lines, tabbed bus/device categories, and functional toggle matrices.
   - Gamers Nexus & Puget Systems Benchmark Whitepapers: Clean bar-graph data framing, thermal curves, noise-normalized acoustic charts, and bare-die microscope captures.

---

## 4. Interactive State Protocol

- Idle: 1px border (#2D323E), background #14171D, muted labels (#8B949E). No audio.
- Hover / Reticle Lock: Border shifts to #D97736 (Copper) or #4A5263, corner brackets lock. Reticle visual snap.
- Active / Click: Background drops to #090A0C (recessed click), accent lights up. Relay / microswitch snap.
- Focused (Keyboard): High-contrast 1px solid #00F0FF outline with 2px offset; no default browser ring.
- Disabled / Unpopulated: Stippled border, text #4B5363, cursor-not-allowed. Inactive dead-switch buzz (if audio on).

---

## 5. Inspection & Acceptance Standard
Before marking any component complete in PROGRESS.md, ask:
1. Does this look like it belongs on a CNC-milled chassis, high-end studio DAC, or motherboard diagnostic bench?
2. Does this avoid looking like a generic Bootstrap/Tailwind SaaS card, AI landing page, or crypto dashboard?
3. Can a human find the project repo, architecture pipeline, and system metrics instantly without friction?
If it fails any of these three, reject the layout and re-align with the references above.

---

## 6. Technical Implementation Configurations

### CSS Variables (Paste into globals.css)
:root {
  --bg-chassis: #090A0C;
  --bg-substrate: #14171D;
  --bg-surface-elevated: #1B2028;
  --border-chamfer: #2D323E;
  --border-active: #4A5263;
  --accent-copper: #D97736;
  --accent-gold: #E85D04;
  --signal-cyan: #00F0FF;
  --led-green: #00E599;
  --text-primary: #EDEDED;
  --text-muted: #8B949E;
  --text-dim: #4B5363;
}

### Tailwind Extension Mapping (Paste into tailwind.config.ts)
export default {
  theme: {
    extend: {
      colors: {
        chassis: "var(--bg-chassis)",
        substrate: "var(--bg-substrate)",
        surface: "var(--bg-surface-elevated)",
        chamfer: "var(--border-chamfer)",
        "chamfer-active": "var(--border-active)",
        copper: "var(--accent-copper)",
        gold: "var(--accent-gold)",
        cyan: "var(--signal-cyan)",
        led: "var(--led-green)",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      borderRadius: {
        none: "0px",
        chamfer: "2px",
      },
    },
  },
};
