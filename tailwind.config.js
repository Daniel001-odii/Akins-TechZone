/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "custom-color1": "#0000",
        "custom-color2": "#efefef",
      }
    },
  },
  plugins: [],
}
