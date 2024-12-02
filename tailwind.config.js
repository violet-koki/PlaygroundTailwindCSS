/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: '#050505',
        white: '#ffffff',
        "selected-text": "#A3A3FF",
        thema: "#5c318c"
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
    }
  },
  plugins: [],
}

