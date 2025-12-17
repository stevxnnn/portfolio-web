/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#e0f2fe',
          100: '#bae6fd',
          200: '#7dd3fc',
          300: '#38bdf8',
          400: '#0ea5e9',
          500: '#0284c7',
          600: '#0369a1',
          700: '#075985',
          800: '#0c4a6e',
          900: '#082f49',
        },
        neon: {
          blue: '#00f0ff',
          green: '#00ff41',
          purple: '#9945ff',
          cyan: '#00d9ff',
        },
        dark: {
          bg: '#0a0a0f',
          card: '#0f0f1a',
          border: '#1a1a2e',
        },
      },
    },
  },
  plugins: [],
}

