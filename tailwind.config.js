/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)'},
          '100%': { transform: 'perspective(1000px) rotateY(360deg)'}
        }
      },
      animation: {
        rotate: 'rotate 30s linear infinite',
      }
    },
  },
  plugins: [],
}

