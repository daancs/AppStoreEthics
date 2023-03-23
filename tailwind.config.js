/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto-mono)', ...fontFamily.mono]
      },
      colors: {
        'primary-bg': '#1f1f1f',
        'indi-blue': '#00A1FC',
        'indi-green': '#11F11A',
        'indi-red': '#FB0A18',
      }
    },
  },
  plugins: [],
}