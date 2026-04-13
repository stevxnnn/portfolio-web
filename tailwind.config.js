/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        // ── 5-token palette ──
        surface: {
          DEFAULT: '#0e1628',
          dim: '#080e1c',
          bright: '#1a2540',
          container: '#111927',
          'container-low': '#0c1422',
          'container-high': '#1e2d45',
          'container-highest': '#243350',
          'container-lowest': '#060c18',
        },
        primary: {
          DEFAULT: '#00d4ff',    // electric cyan
          container: '#0099bb',
          dim: '#00b8df',
        },
        secondary: {
          DEFAULT: '#7a8ba6',
          container: '#1e2d45',
        },
        tertiary: {
          DEFAULT: '#22c55e',   // live / active green
          container: '#166534',
        },
        'on-surface': '#e2e8f4',
        'on-surface-variant': '#7a8ba6',
        'on-primary': '#00151a',
        outline: '#2a3a52',
        'outline-variant': '#162030',
        // Raw hex aliases for quick use
        'navy': '#080e1c',
        'navy-card': '#0e1628',
        'cyan': '#00d4ff',
        'cyan-dim': '#0099bb',
        'live-green': '#22c55e',
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(0,212,255,0.15)',
        'cyan-glow-lg': '0 0 60px rgba(0,212,255,0.25)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
