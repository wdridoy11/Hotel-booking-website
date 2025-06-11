/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ['class'],
  darkMode: ['class', '[data-theme="dark"]','[data-theme="light"]'],
  // darkMode: ['variant', [
  //   '@media (prefers-color-scheme: dark) { &:not(.light *) }',
  //   '&:is(.dark *)',
  // ]],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    
  theme: {
    extend: {},
    colors: {
      primary: '#F5F5F5',
      secondary: '#B88E2F',
      while:'#FFFFFF',
      black:'#000000',
      gray20:'#333333',
      text_color:'#666666',
      slate_400:'#94a3b8',
      cool_gray:'#F4F5F7',
      cool_gray_800:'#1f2937',
      denger: '#E97171',
      light: '#3A3A3A',
      grayish :'F9F1E7',
      gray:'#111827'
    },
  },
  
  plugins: [],
}