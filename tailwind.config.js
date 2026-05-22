/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f0',
          100: '#f9edd8',
          200: '#f2d9b0',
          300: '#e9c07e',
          400: '#d4a24a',
          500: '#c48a2a',
          600: '#a96f1e',
          700: '#8b5a1b',
          800: '#73491c',
          900: '#5f3c1a',
        },
        accent: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#d4a24a',
          500: '#b8860b',
          600: '#9a6f08',
          700: '#7c5a0b',
          800: '#664a11',
          900: '#553d14',
        },
        surface: {
          50: '#1c1915',
          100: '#1a1714',
          200: '#161310',
          300: '#12100d',
          400: '#0f0d0a',
          500: '#0b0a08',
          600: '#080706',
          700: '#050504',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0b0a08 0%, #12100d 25%, #0f0d0a 50%, #161310 75%, #0b0a08 100%)',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}
