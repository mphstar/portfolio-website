/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-light": '#F9FAFB',
        "bg-dark": '#101113'
      },
      fontFamily: {
        "poppins-regular": "poppins-regular",
        "poppins-semibold": "poppins-semibold",
        "poppins-bold": "poppins-bold",
        "virgil": "Virgil",
    },
    },
  },
  plugins: [
  ],
}
