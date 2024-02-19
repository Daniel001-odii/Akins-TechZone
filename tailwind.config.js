/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#4E79BC",
        light_blue: "rgb(190, 213, 248, 20%)",
        dark_blue: "#42669E",

        green: "#7BBE64",
        light_green: "rgb(123, 190, 100, 10)",

      }
    },
  },
  plugins: [],
}

