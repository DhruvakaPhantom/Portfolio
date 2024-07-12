/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "serif"],
      },
      colors: {
        gradient1: "#008FA9",
        gradient2: "#4B5AB3",
        gradient3: "#6C35AE",
      },
    },
    boxShadow: {
      "custom-blue": "0 4px 6px rgba(0, 178, 255, 0.35)", // #00B2FF59 is rgba(0, 178, 255, 0.35)
    },
  },
  plugins: [],
};
