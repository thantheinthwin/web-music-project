/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary': '#b3c2ff',
        'secondary': '#1d1622',
        'background': '#000000',
        'text': '#ffffff',
        'accent': '#11236f'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('prettier-plugin-tailwindcss')
  ],
}
