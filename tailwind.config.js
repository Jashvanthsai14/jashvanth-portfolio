/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#F8F7FF',
          soft: '#F0EEFF',
        },
        brand: {
          50: '#F7F6FF',
          100: '#ECEAFF',
          200: '#D9D5FF',
          300: '#BDB7FF',
          400: '#9B93F4',
          500: '#8178E7',
          600: '#7066D0',
          700: '#5B52B1',
          800: '#49428C',
          900: '#302B63',
        },
        navy: {
          DEFAULT: '#14213D',
          soft: '#1E2A4A',
        },
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 24px -8px rgba(37, 99, 235, 0.12)',
        card: '0 8px 32px -12px rgba(20, 33, 61, 0.10)',
        glow: '0 0 60px -12px rgba(37, 99, 235, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
