/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'

  theme: {
    fontFamily: {
      normal: ["normal"],
      medium: ["medium"],
      bold: ["bold"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        background: "#f1f1f1",
        primary: "#452e6f",
        textColor: "#595C7A",
        surface: "#e1e1e1",
      },
    },
  },
  plugins: [],
};
