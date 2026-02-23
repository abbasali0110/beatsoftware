/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: {
          DEFAULT: '#DC143C',
          dark: '#A50E2D',
          darker: '#8B0C26',
          comp: '#008BA7',
          light: '#f5d0d9',
        },
        rhino: {
          DEFAULT: '#3F4652',
          light: '#5a6370',
          dark: '#2c3038',
        },
        charcoal: {
          DEFAULT: '#1a1f2e',
          light: '#252b3b',
          dark: '#0f1420',
        },
        beige: '#f5f0e8',
        surface: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Segoe UI', 'Tahoma', 'sans-serif'],
        display: ['Space Grotesk', 'Manrope', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      boxShadow: {
        card: '0 2px 8px rgba(0,0,0,0.06), 0 0 1px rgba(0,0,0,0.04)',
        hover: '0 12px 40px rgba(0,0,0,0.12)',
        'card-dark': '0 4px 20px rgba(0,0,0,0.3)',
        top: '0 -4px 20px rgba(0,0,0,0.08)',
        glow: '0 0 30px rgba(220,20,60,0.25)',
      },
      borderRadius: {
        xl2: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.7s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.7s ease-out forwards',
        'slide-in': 'slide-in 0.3s ease-out forwards',
        'count-up': 'count-up 0.5s ease-out forwards',
      },
      transitionTimingFunction: {
        'ease-smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(105deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #DC143C 0%, #A50E2D 100%)',
        'charcoal-gradient': 'linear-gradient(135deg, #1a1f2e 0%, #0f1420 100%)',
      },
    },
  },
  plugins: [],
};
