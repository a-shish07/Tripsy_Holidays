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
          DEFAULT: "#2F4FDB",
          dark: "#162E72",
        },
        accent: "#F7902C",
        ocean: "#3E6FD3",
        sand: "#1B2B4F",
        night: "#101C38",
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
