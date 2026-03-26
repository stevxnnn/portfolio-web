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
        heading: ['Epilogue', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#0b1326',
          dim: '#0b1326',
          bright: '#31394d',
          container: '#171f33',
          'container-low': '#131b2e',
          'container-high': '#222a3d',
          'container-highest': '#2d3449',
          'container-lowest': '#060e20',
        },
        primary: {
          DEFAULT: '#4be277',
          container: '#22c55e',
          dim: '#4ae176',
        },
        secondary: {
          DEFAULT: '#b9c7e0',
          container: '#3c4a5e',
        },
        tertiary: {
          DEFAULT: '#50dfa4',
          container: '#28c38a',
        },
        'on-surface': '#dae2fd',
        'on-surface-variant': '#bccbb9',
        'on-primary': '#003915',
        outline: '#869585',
        'outline-variant': '#3d4a3d',
      },
    },
  },
  plugins: [],
}
