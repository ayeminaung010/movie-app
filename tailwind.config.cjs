/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      background : '#fffffe',
      headLineColor : '#094067',
      textColor  : '#5f6c7b',
      primaryBtn : '#3da9fc',
      btnText : '##fffffe',
      dangerColor : '#ef4565',
    },
    extend: {},
  },
  plugins: [],
}
