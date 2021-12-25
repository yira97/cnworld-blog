module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue_pink_set: {
          blue_1: "#163762",
          blue_2: "#082957",
          blue_3: "#123668",
          pink: "#f3d7d1",
          gray: "#838597"
        },
        iceburg: {
          1: "#e63946",
          2: "#f1faee",
          3: "#a8dadc",
          4: "#457b9d",
          5: "#1d3557",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
