/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "2rem",
      center: true,
    },
    extend: {
      fontFamily: {
        Josefin: "Josefin Sans, sans-serif",
      },
      colors: {
        primary: "#003638",
        secondary: "#53B8BB",
        third:"#F3F2C9",
        primaryText: "#055052",
      },
    },
  },
  plugins: [],
};
