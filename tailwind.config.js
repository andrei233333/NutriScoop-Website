/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nutri-green': '#4CAF50',
        'nutri-orange': '#FF9800',
        'nutri-beige': '#FFF8E1',
      },
    },
  },
  plugins: [],
} 