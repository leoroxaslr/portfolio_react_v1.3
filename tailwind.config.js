/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  colors: {
    white: "#fffff",
    blue: "#1fb6ff",
    purple: "#7e5bef",
    pink: "#ff49db",
    yellow: "#ffc82c",
    "gray-dark": "#273444",
    gray: "#8492a6",
    "gray-light": "#d3dce6",
  },
  plugins: [require("flowbite/plugin")],
};
