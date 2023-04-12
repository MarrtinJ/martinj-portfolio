/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#787878",
        tertiary: "#292929",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        'logo-green': "#096a2e",
        'mantis-green': "#58b455"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #292929",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg-greyscale.png')",
      },
    },
  },
  plugins: [],
};