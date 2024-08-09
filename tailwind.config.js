/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#343A40',
        secondary: {
          100: '#F0CFA7',
          200: '#FFCB84',
          300: '#E9AC57',
          400: '#E89B2E',
          500: '#E88700'
        },
        success: {
          DEFAULT: '#2F723D',
          light: '#4E995E'
        },
        danger: {
          DEFAULT: '#903333',
          light: '#C65353'
        }
      },

    },
    fontFamily: {
      sans: ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}

