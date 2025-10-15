/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1D4ED8",
          dark: "#0B2C6B",
        },
        accent: "#F97316",
        ocean: "#0EA5E9",
        sand: "#F3E8D5",
        night: "#0F172A",
      },
      boxShadow: {
        glow: "0 20px 45px rgba(14, 165, 233, 0.25)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.25), rgba(15,23,42,0.95))",
      },
    },
  },
  plugins: [],
}
