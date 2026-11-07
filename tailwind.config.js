/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#FDF7FD',
          100: '#F8ECF7',
          200: '#F1D6EF',
          300: '#E4B3E0',
          400: '#CE82C7',
          500: '#A64F9D',
          600: '#7E2F75',
          700: '#52184A',
          800: '#3A0F34', // Primary brand
          900: '#22061F',
          950: '#140313',
        },
        gold: {
          50: '#FFFEF5',
          100: '#FFFBE6',
          200: '#FFF4BF',
          300: '#FFE98F',
          400: '#F5CE38',
          500: '#EAAA00', // Marigold
          600: '#D49900',
          700: '#B07D00',
          800: '#8A6000',
          900: '#664600',
        },
        ice: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#DDE3E8', // Ice silver
          400: '#94A3B8',
          500: '#64748B',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Manrope"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        accent: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(58, 15, 52, 0.05), 0 1px 2px -1px rgba(58, 15, 52, 0.05)',
        'card': '0 4px 20px -2px rgba(58, 15, 52, 0.06), 0 2px 6px -1px rgba(58, 15, 52, 0.04)',
        'hover': '0 20px 30px -10px rgba(58, 15, 52, 0.12), 0 8px 10px -6px rgba(58, 15, 52, 0.08)',
        'gold-glow': '0 0 25px rgba(234, 170, 0, 0.25)',
        'plum-glow': '0 0 35px rgba(58, 15, 52, 0.2)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'marquee-slow': 'marquee 50s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
