/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing': "url('assets/image/landing.jpeg')",
        'Shubham': "url('assets/image/shubham1.jpg')",
        'abof': "url('assets/image/abof.png')",
        'lub': "url('assets/image/lub.png')",
        'rest': "url('assets/image/rest.png')",
        'lilly': "url('assets/image/lilly.png')",
        'cit': "url('assets/image/cit.png')",
        'trust': "url('assets/image/trust.png')",
        'old': "url('assets/image/old.png')",
        'bootstrap': "url('assets/image/bootstrap.png')",
        'Register':"url('assets/image/Register.jpeg')",
      },
      
    },
  },
  plugins: [],
}

