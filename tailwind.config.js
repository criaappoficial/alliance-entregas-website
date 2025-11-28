/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF7D44',
          hover: '#E56A35',
        },
        secondary: '#00323e',
        accent: '#07847F',
        text: '#505D7B',
        dark: {
          bg: '#1a1a1a',
          card: '#1f2937',
          text: '#f5f5f5',
        },
        light: {
          bg: '#ffffff',
          card: '#f3f4f6',
          text: '#00323e',
        }
      },
      fontFamily: {
        sans: ['Comfortaa', 'sans-serif'],
      },
      maxWidth: {
        'hero': '1840px',
      }
    },
  },
  plugins: [],
}
