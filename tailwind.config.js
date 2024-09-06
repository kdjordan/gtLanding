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
          DEFAULT: '#FF0000', // Bright red color for icons and accents
          900: '#000000', // Black for background
        },
        secondary: {
          DEFAULT: '#FFFFFF', // White for text
        },
        gray: {
          900: '#302f2f',
        },
      },
      fontFamily: {
        sans: ['"PF BeauSans Pro"', 'sans-serif'],
        // You can keep the display font if you're using it elsewhere
        display: ['Montserrat', 'sans-serif'],
      },
      // ... existing backgroundImage config
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'html': { fontFamily: theme('fontFamily.sans') },
        'a': { 
          color: theme('colors.secondary.DEFAULT'),
          transition: 'color 0.3s ease-in-out',
          '&:hover': {
            color: theme('colors.primary.DEFAULT'),
          },
        },
      })
    },
  ],
}

