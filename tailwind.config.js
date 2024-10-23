/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        customRed: "#a10040",
        customBlue: "#0b314e",
      },
      keyframes: {
        RightToLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        RightToLeft: "RightToLeft 100s linear infinite",
      },
    },
  },
  plugins: [],
};
