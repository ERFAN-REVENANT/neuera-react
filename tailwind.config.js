/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        customRed: "#a10040",
        customBlue: "#0b314e",
      },
    },
  },
  plugins: [],
};
