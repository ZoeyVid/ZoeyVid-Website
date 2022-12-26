/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*.{html,js}',
  ],
  darkMode: 'true',
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
