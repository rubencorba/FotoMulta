/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        blue: {
          Default: "#16158C",
        },
        customLavender: "#dddcf7",
        customMidLavender: '#C6B7F5',
      },
    },
  },
  plugins: [],
}