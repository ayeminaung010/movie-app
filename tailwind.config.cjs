/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "background" : '#fffffe',
      "headLineColor" : '#094067',
      "textColor"  : '#5f6c7b',
      "primaryBtn" : '#3da9fc',
      "btnBg" : '#032541',
      "btnText" : '#6BBEA9',
      "dangerColor" : '#ef4565',
    },
    fontFamily: {
      'source-sans' : 'Source Sans Pro',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '0.5rem',
        lg: '1rem',
        xl: '2rem',
        '2xl': '3rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
