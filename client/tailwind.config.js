/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm1': '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },
    fontFamily: {
      sans: ['K2D', 'sans-serif'],
      serif: ['K2D', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}