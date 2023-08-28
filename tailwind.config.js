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
        textColor: "#cccccc"
      },
    },
  },
  plugins: [],
};
