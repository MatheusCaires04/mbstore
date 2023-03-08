/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        icon: ["Lobster", "sans-serif"],
        global: "Poppins",
      },
    },
  },
  plugins: [],
};
