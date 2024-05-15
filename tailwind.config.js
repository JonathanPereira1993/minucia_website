/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#53B6CB",
        secondary: "#324B50",
        accent: "#FB923C",
        dark: "#0F172A",
        white: "#FDFFFF",
        lightBlue: "#f1f5f9",
      },
    },
  },
  plugins: [],
};
