/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    fontFamily:{
    'popins':['Poppins', 'sans-serif'],
    'ubuntu': ['Ubuntu', 'sans-serif' ],
  },
    extend: {
      
      backgroundImage: {
        'hero-background': "url('assets/background-img.jpg')"
      }
    },
  },
  plugins: [],
}

