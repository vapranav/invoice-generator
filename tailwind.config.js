module.exports = {
  purge: ["./src/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "jager-blue": "#00ADB4",
        "jager-black": "#393E45",
        "jager-gray": "#E4E4E4",
        "figma-blue": "#03506F",
      },
    },
    fontFamily: {
      montserrat: ["montserrat", "sans-serif"],
      merriweather: ["merriweather", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
