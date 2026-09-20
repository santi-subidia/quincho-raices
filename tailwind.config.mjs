/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8f4',
          100: '#e1f0e7',
          200: '#c5e2d1',
          300: '#9acdb2',
          400: '#6ab18e',
          500: '#469571',
          600: '#34785a',
          700: '#2b6049',
          800: '#244e3d',
          900: '#1b382b',
          950: '#0d2218',
        },
        accent: {
          50: '#fff8ed',
          100: '#ffefd4',
          200: '#fedca9',
          300: '#fdc373',
          400: '#fba03c',
          500: '#f58014',
          600: '#d9640b',
          700: '#b4480c',
          800: '#903a11',
          900: '#753212',
          950: '#401706',
        }
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        serif: [
          '"Playfair Display"',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif',
        ],
      },
      animation: {
        'spin-slow': 'spin 35s linear infinite',
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(52, 120, 90, 0.3)',
      }
    },
  },
  plugins: [],
};
