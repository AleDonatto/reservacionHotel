module.exports = {
  //purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'acapulco': "url('./img/acapulco.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
