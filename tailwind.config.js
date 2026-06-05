/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050a18",
        surface: "#0a1628",
        panel: "#070d1f",
        accent: "#00d4d4",
        accentSoft: "#00ffff",
        electric: "#0066ff",
        text: "#ffffff",
        muted: "#b0b8c8",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 212, 212, 0.18)",
      },
    },
  },
  plugins: [],
};
