/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        brittany : ["var(--font-brittany)"],
        ubuntu : ["var(--font-ubuntu)"],
      },
      colors:{
        lok: '#ffd401'
      },
      keyframes: {
        morph: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '20%': { borderRadius: '50% 60% 70% 40% / 40% 70% 50% 60%' },
          '40%': { borderRadius: '70% 50% 60% 40% / 50% 60% 40% 70%' },
          '60%': { borderRadius: '60% 40% 50% 70% / 70% 50% 40% 60%' },
          '80%': { borderRadius: '40% 70% 60% 50% / 60% 40% 70% 50%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
      },
      animation: {
        morph: 'morph 6s infinite ease-in-out',
      },
      
    },

  },
  plugins: [],
}