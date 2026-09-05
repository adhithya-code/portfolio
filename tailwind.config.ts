/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chassis: 'var(--bg-chassis)',
        substrate: 'var(--bg-substrate)',
        surface: 'var(--bg-surface-elevated)',
        chamfer: 'var(--border-chamfer)',
        'chamfer-active': 'var(--border-active)',
        copper: 'var(--accent-copper)',
        gold: 'var(--accent-gold)',
        cyan: 'var(--signal-cyan)',
        led: 'var(--led-green)',
        'text-main': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'text-dim': 'var(--text-dim)',
      },
      fontFamily: {
        sans: ['Geist', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        none: '0px',
        chamfer: '2px',
      },
      transitionTimingFunction: {
        mechanical: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
