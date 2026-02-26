/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
 theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // High-end "Software" palette
        crimson: {
          DEFAULT: '#DC143C',
          dark: '#9B0E2A',
          light: '#FF2E5B',
        },
        charcoal: {
          DEFAULT: '#1A1F2E',
          dark: '#0A0A0B', // Deep black-grey for backgrounds
          light: '#1A1A1C',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#94A3B8', // Muted slate for secondary text
          600: '#64748B',
          700: '#334155',
        }
      },
      fontSize: {
        '2xs': ['0.68rem', { lineHeight: '1rem' }],
      },
      backgroundImage: {
        // A subtle, professional gradient for the accent bar and buttons
        'crimson-gradient': 'linear-gradient(90deg, #9B0E2A 0%, #DC143C 50%, #FF2E5B 100%)',
        'charcoal-gradient': 'linear-gradient(120deg, #0A0A0B 0%, #1A1F2E 100%)',
      },
      boxShadow: {
        // The "Cyber" glow effect for buttons and logos
        'glow': '0 0 20px rgba(220, 20, 60, 0.35)',
        'glow-hover': '0 0 30px rgba(220, 20, 60, 0.6)',
        'card': '0 10px 30px rgba(15, 20, 32, 0.08)',
        'card-dark': '0 14px 30px rgba(0, 0, 0, 0.35)',
        'hover': '0 14px 40px rgba(15, 20, 32, 0.14)',
      }
    },
  },
  plugins: [],
};
