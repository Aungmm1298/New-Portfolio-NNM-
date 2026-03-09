/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-dm-sans)',    'system-ui', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia',   'serif'],
      },
      colors: {
        brand: {
          50:  '#e8eef5',
          100: '#c8d7e8',
          200: '#96b2cc',
          300: '#6088a8',
          400: '#3f6688',
          500: '#254c6c',
          600: '#1c3d5a',
          700: '#142e46',
          800: '#0d2033',
          900: '#081422',
        },

      },
      animation: {
        'ring-rotate': 'ringRotate 4.5s linear infinite',
        'float':       'float 6s ease-in-out infinite',
        'fade-in-up':  'fadeInUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        ringRotate: {
          '0%':   { '--ring-angle': '0deg' },
          '100%': { '--ring-angle': '360deg' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(36px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
