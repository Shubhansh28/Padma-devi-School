/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        'serif': ['Outfit', 'sans-serif'],
        'display': ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#E8EFF3',
          100: '#D1DFE7',
          200: '#B4CADA',
          300: '#93B2CB',
          400: '#6E97BA',
          500: '#4F7FA8',
          600: '#39668D',
          700: '#2A4E6C',
          800: '#1C374D',
          900: '#0B2534',
          950: '#071822',
        },
        secondary: {
          50: '#FDF8EB',
          100: '#FBF0CF',
          200: '#F6DE9C',
          300: '#EFC668',
          400: '#E7AB3F',
          500: '#FFB800',
          600: '#E5A823',
          700: '#9F6D0E',
          800: '#7E540B',
          900: '#5D3D07',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFB800',
          600: '#E5A823',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};