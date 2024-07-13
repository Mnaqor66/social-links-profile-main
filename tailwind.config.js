/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    colors: {
      'Green': '#c5f82a',
      'White': '#ffffff',
      'Grey': '#333333',
      'DarkGrey': '#1f1f1f',
      'OffBlack': '#141414',
    },
    'fontFamily': {
      'inter': '"Inter"'
    }
  },
  plugins: [],
}