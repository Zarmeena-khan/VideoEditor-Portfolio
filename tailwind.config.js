/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        crimson: {
          deep: '#2C0F12',
          mid: '#6B1E23',
          accent: '#C0392B',
          glow: '#E05252',
        },
        velvet: {
          bg: '#160A0B',
          bg2: '#1E0C0E',
          bg3: '#240F11',
        },
        cream: '#F2ECE4',
        muted: '#9A837F',
      },
      boxShadow: {
        glow: "0 0 40px rgba(224, 82, 82, 0.2)",
      },
      fontFamily: {
        bebas: 'var(--font-bebas)',
        barlow: 'var(--font-barlow)',
        cormorant: 'var(--font-cormorant)',
      },
    },
  },
  plugins: [],
};
