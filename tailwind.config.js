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
        'dark-purple': '#5D576B',
        'light-purple': '#C5C0D0',
        'beige': "#F0EEE6",
        'hover-beige': '#E6E3DA',
        'light-white': 'rgba(255, 255, 255, 0.5)'
      }
    },
  },
  plugins: [],
}

