/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,woff2}',
    './index.html',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'titillium': ["'Titillium Web'", 'sans-serif'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
