/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/App.jsx"],
  theme: {
    screens: {
      xs: "320px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      header: ["Rammetto One", "sans-serif"],
      main: ["Sulphur Point", "sans-serif"],
    },
    extend: {
      colors: {
        darkGreen: "#092635",
        green: "#1B4242",
        sage: "#5C8374",
        mint: "#9EC8B9",
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [],
};