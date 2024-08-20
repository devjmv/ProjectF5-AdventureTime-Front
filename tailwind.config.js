/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      variants: {},

      fontFamily: {
        gloria: ["Gloria Hallelujah", "cursive"],
        nunito: ["Nunito", "sans-serif"]
      },

      colors: {
        raisin: "32292f",
        tiffany: "99e1d9",
        cream: "f0f7f4",
        verdigris: "70abaf",
        wenge: "705d56"
      },
    },
    plugins: [],
  },
};
