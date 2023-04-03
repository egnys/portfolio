/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'navbar' : '#202020',
        'div': '#121212'
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}