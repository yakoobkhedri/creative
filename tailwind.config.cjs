/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#1f2732',
        'secondary':'#ff497c',
        'success':'#a0ce4e',
        'info':'#00bea3',
        'orange':'#f1894c'
      },
      backgroundImage:{
        'dash':"url('../../src/assets/images/vertical_line.PNG')",
        'dashWhite':"url('../../src/assets/images/white_line_big.PNG')",
        'dashDark':"url('../../src/assets/images/dark_line_short.PNG')",
        'darkTexture':"url('../../src/assets/images/texture_dark.JPG')",
        'grayTexture':"url('../../src/assets/images/texture_2.PNG')",
        'rightArrow':"url('../../src/assets/images/right_arrow.PNG')",
        'leftArrow':"url('../../src/assets/images/left_arrow.PNG')",
        'book1':"url('../../src/assets/images/book-hov-3.PNG')",
        'book2':"url('../../src/assets/images/book-hov-2.PNG')",
        'book3':"url('../../src/assets/images/book-hov-1.PNG')",
        'copyRight':"url('../../src/assets/images/copyright_bg.JPG')",
      }
    },
  },
  plugins: [],
}
