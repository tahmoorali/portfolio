/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#f5f5f5",
        "secondary": "#008080",
        "tertiary": "#00509E"
      }
    },
    screens: {

      'lg': {'max': '2023px'},
      // => @media (max-width: 1023px) { ... }


      'sm': {'max': '900px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
}