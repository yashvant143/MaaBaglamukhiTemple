/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff8f0',
          100: '#ffeedb',
          200: '#ffd7b3',
          300: '#ffb980',
          400: '#ff9247',
          500: '#ff6f00', // Main Saffron
          600: '#e65600',
          700: '#cc4100',
          800: '#993000',
          900: '#662000'
        },
        gold: {
          300: '#F4D068',
          400: '#E5C158',
          500: '#D4AF37', // Main Temple Gold
          600: '#B89324',
          700: '#947316'
        },
        crimson: {
          600: '#b30000',
          700: '#8B0000', // Main Dark Red
          800: '#660000',
          900: '#400000'
        },
        devotional: {
          cream: '#FFFDF9',
          card: '#FFFFFF',
          dark: '#1C130E',
          accent: '#FFB800'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        devanagari: ['Noto Sans Devanagari', 'serif']
      },
      boxShadow: {
        'temple': '0 10px 30px -10px rgba(255, 111, 0, 0.25)',
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.4)',
        'saffron-glow': '0 0 25px rgba(255, 111, 0, 0.35)'
      }
    }
  },
  plugins: []
};
