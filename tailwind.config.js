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
        sans: ['W95FA', '"MS Sans Serif"', '"Microsoft Sans Serif"', 'Tahoma', 'Arial', 'sans-serif'],
        display: ['var(--font-press-start)', 'monospace'],
      },
      colors: {
        win: {
          teal: '#008080',
          gray: '#c0c0c0',
          blue: '#000080',
          highlight: '#ffffff',
          shadow: '#808080',
          black: '#000000',
        }
      },
    },
  },
  plugins: [],
}
