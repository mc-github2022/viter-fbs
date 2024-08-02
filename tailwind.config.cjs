/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors : {
      primary : '#6a103f',
      customGray: '#f2f2f2',
      light: '#ffffff',
      dark: '#2b2b2b',
    },
    extend: {
      fontFamily: {
        montserrat : " Montserrat",
      }
    },
  },
  plugins: [],
}

