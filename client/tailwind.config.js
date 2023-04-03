/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'sky-blue-50': '#e7effa',
        'sky-blue-75': '#D0DFF3',
        'sky-blue-100': '#c5d9f2',
        'sky-blue-200': '#B9D7EA',
        'sky-blue-300': '#769FCD',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss')
  ],
}
