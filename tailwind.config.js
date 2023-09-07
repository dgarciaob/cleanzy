/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#D68FD6',
        'myBlack': '#1F1F1F',
        'myWhite': '#FFFFFF',
        'myBlue': '#5746F4',
        'myYellow': '#FFF45C',
      },
      maxWidth: ['responsive', 'hover', 'focus']
    },
  },
  plugins: [],
}
