/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bubble: ['BubbleFish', 'sans-serif'],
        thick: ['ThickFish', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

