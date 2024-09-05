/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3e6ff',
          100: '#d9b3ff',
          500: '#6600cc',
          700: '#4c0099',
          900: '#330066',
        },
        accent: {
          300: '#99ffcc',
          500: '#00ff99',
          700: '#00cc7a',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      // ... existing backgroundImage config
    },
  },
  plugins: [],
}

