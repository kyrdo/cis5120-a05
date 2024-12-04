/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-purple': '#F26D70', //'#5D576B',
        'light-purple': '#F0ABAF', //'#C5C0D0',
        'beige': '#FAE4DA', //'#FEF1E4', //"#F0EEE6",
        'hover-beige': '#F1D0C0', //'#E6E3DA',
        'light-white': 'rgba(255, 255, 255, 0.5)',
        'almost-black': '#5A3957',
        'custom-gray': '#B7ACAC'
      }
    },
  },
  plugins: [],
}

