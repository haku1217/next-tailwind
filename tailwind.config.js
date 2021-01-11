const colors = require("tailwindcss/colors");
module.exports = {
  purge: {
    enabled: false,
    preserveHtmlElements: false,
    content: ["./src/**/*.tsx"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      green: colors.green,
      indigo: colors.indigo,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
