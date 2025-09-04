/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-beige': '#F8F7F4',
        'secondary-beige': '#EBEAE6',
        'accent-beige': '#D9C9B0',
        'text-dark': '#333333',
      },
      fontFamily: {
        cursive: ['cursive', 'serif'],
        prompt: ['Prompt', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
