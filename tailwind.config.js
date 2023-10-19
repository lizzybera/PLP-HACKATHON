/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        screen320: { max: "320px" },
        screen375: { max: "375px" },
        screen425: { max: "425px" },
        screen768: { max: "768px" },
      },
    },
  },
  plugins: [],
};
