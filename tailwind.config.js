/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#070b14",
        secondary: "#94a3b8",
        tertiary: "#0f172a",
        navy: {
          950: "#050811",
          900: "#0b1220",
          850: "#0f172a",
          800: "#1e293b",
          700: "#334155",
        },
        tealAccent: {
          light: "#5eead4",
          DEFAULT: "#14b8a6",
          dark: "#0f766e",
          glow: "rgba(20, 184, 166, 0.15)",
        },
        cyanAccent: {
          light: "#67e8f9",
          DEFAULT: "#06b6d4",
          dark: "#0e7490",
        },
        "black-100": "#0c1322",
        "black-200": "#080d1a",
        "white-100": "#f8fafc",
      },
      boxShadow: {
        card: "0px 20px 50px -10px rgba(2, 6, 23, 0.7)",
        tealGlow: "0px 0px 30px -5px rgba(20, 184, 166, 0.25)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
      },
    },
  },
  plugins: [],
}
