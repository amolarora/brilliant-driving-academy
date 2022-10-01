/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        "blue-gray": {
          50: "#eceff1",
          100: "#cfd8dc",
          200: "#b0bec5",
          300: "#90a4ae",
          400: "#78909c",
          500: "#607d8b",
          600: "#546e7a",
          700: "#455a64",
          800: "#37474f",
          900: "#263238",
        },
      },
      fontFamily: {
        BebasNeue: ["Bebas Neue", "cursive"],
        OpenSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
