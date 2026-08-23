/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '.kreaweb-dark'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'archivo-black': ['"Archivo Black"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#1e3a5f',
          light: '#2d5a8e',
          bright: '#3b82f6',
          brightsoft: '#e0edff',
          dark: '#162d4a',
        },
        wa: {
          green: '#25D366',
          'green-dark': '#128C7E',
        },
        ink: {
          DEFAULT: 'rgb(var(--kt-ink) / <alpha-value>)',
          soft: 'rgb(var(--kt-ink-soft) / <alpha-value>)',
          raised: 'rgb(var(--kt-ink-raised) / <alpha-value>)',
          line: 'rgb(var(--kt-ink-line) / <alpha-value>)',
        },
        paper: {
          DEFAULT: 'rgb(var(--kt-paper) / <alpha-value>)',
          muted: 'rgb(var(--kt-paper-muted) / <alpha-value>)',
          faint: 'rgb(var(--kt-paper-faint) / <alpha-value>)',
        },
        crimson: {
          DEFAULT: '#a4161a',
          bright: '#c21f24',
          dark: '#7c1013',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};