/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Remove the incompatible @tailwindcss/postcss plugin
  ]
};
