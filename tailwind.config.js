module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'Arial', 'sans-serif']
      },
      colors: {
        epicyellow: {
          normal: '#e8ea26',
          light: '#f2f48b'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
