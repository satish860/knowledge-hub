export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-orange': 'rgb(255, 61, 0)',
        'bg-gray': '#F9F9F9',
        'text-dark': 'rgb(6, 11, 22)',
        'text-gray': '#4A4A4A',
      },
      fontFamily: {
        sans: ['Instrument Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tighter-xl': '-2.24px',
      },
    },
  },
  plugins: [],
}
