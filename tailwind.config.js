/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        black: '#191624',
      },
      animation: {
        slide: 'slide 1s ease-in-out',
      },
      keyframes: {
        slide: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      backgroundImage: {
        workimg: 'url(https://static.wixstatic.com/media/ea26fd_cc3d0c412c3d4b87adbeeaecd29259bd~mv2.jpg/v1/fill/w_1910,h_1134,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/ea26fd_cc3d0c412c3d4b87adbeeaecd29259bd~mv2.jpg)'
      }
    },
  },
  plugins: [],
}