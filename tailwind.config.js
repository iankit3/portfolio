const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        bubble: ["Bubblegum Sans"], // Stupid DNW
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    //preflight: false,
  },
};
