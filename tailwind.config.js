const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Frankin', ...fontFamily.sans],
        serif: ['Libre Baskerville', ...fontFamily.serif],
      },
    },
  },
  plugins: [],
};
