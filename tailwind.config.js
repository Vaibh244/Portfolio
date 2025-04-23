/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo Paaji 2"', 'cursive'],
      },
      colors: {
        brandDark: '#525255',
        brandLight: '#6B6B72',
        brandName: '#3d3d40',
      }
    },
  },
  plugins: [],
}

