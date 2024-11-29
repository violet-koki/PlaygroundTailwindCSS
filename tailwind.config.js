/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        body: '#050505',
        white: '#ffffff'
      },
    },
    fontFamily: {
      poppins: ['Poppins'],
    }
  },
  plugins: [],
}

