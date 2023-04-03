/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "app.css", "app.js", "components.js"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Cormorant", "serif"],
        mono: ["Fira Code", "mono"],
        cursive: ["Itim", "cursive"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
