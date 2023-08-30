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
        background: "#cbcbcb",
        primary: "#452e6f",
        textColor: "#595C7A",
        surface: "#F1F2F4",
      },
    },
  },
  plugins: [],
};
