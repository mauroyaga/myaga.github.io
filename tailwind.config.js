/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Variable', 'sans-serif'],
        display: ['DM Serif Display', 'serif'],
      },
      colors: {
        brand: {
          blue: '#60a5fa',
          indigo: '#6366f1',
        },
        bg: {
          base: '#f8f7f4',
          alt: '#f1f5f9',
          dark: '#0f0f0f',
          darker: '#09090b',
          card: '#ffffff',
        },
      },
      maxWidth: {
        content: '1280px',
        prose: '680px',
        reading: '960px',
      },
    },
  },
  plugins: [],
}
