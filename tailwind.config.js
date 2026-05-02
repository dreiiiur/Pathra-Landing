/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Cormorant"', 'serif'],
      },
      colors: {
        cream: '#F2EFE3',
        parchment: '#E4E0D4',
        gold: '#A2B48B',
        'gold-light': '#CBD7B8',
        charcoal: '#003314',
        mist: '#8B9A8A',
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.4em',
      },
    },
  },
  plugins: [],
}

