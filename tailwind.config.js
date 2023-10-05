/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'mono': ['Montserrat', 'sans-serif'],
      'babe': ['Bebas Neue', 'sans-serif']
    }
  },
  plugins: [require("daisyui")],
}

