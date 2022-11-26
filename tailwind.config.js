/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      'backgroundImage': {
        main: 'url("/assets/images/authenticate page.png")'
      },
      colors: {
        lightBlack: '#717171',
        blue2: '#438FFE',
        buttonBorder: '#848484'
      }
    },
  },
  plugins: [],
}
