/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'760px',
      lg:'1224px'
    },
    extend: {
      keyframes:{
        move:{
          "50%":{transform:'translateY(-1rem)'}
        }
      },
      animation:{
        'movingY':'move 2s linear infinite'
      },
    },
    container:{
      center:true,
      padding:{
        DEFAULT:'1rem',
        sm:'1.5rem'
      }
    },
  },
  plugins: [],
}