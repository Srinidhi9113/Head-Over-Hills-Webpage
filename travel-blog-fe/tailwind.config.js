/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'HeroBG': 'url("src/assets/heroBG.png")',
        'PhotoBG': 'url("src/assets/photoFace.jpeg")',
        'BlogBG': 'url("src/assets/blogFace.jpeg")',
        'WaveBG':'url("src/assets/waves/new.svg")',
        'WaveBG-Bottom':'url("src/assets/waves/bottom.svg")',
      },
      colors:{
        bgColor:"#FAF9F6"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

