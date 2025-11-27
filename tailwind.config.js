/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
    "./src/index.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          dark: "#1D4ED8",
        },
        accent: "#FF8A5C",
        ocean: "#0EA5E9",
        sand: "#FEF5ED",
        night: "#0F172A",
        mist: "#F6FBFF",
        blossom: "#FFE8D9",
        lagoon: "#9EEAF9",
      },
      gradientColorStops: {
        mist: "#F6FBFF",
        sand: "#FEF5ED",
        blossom: "#FFE8D9",
      },
      boxShadow: {
        glow: "0 25px 55px rgba(14, 165, 233, 0.25)",
      },
      backgroundImage: {
        "hero-gradient": "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.2), rgba(255,255,255,0.95))",
        "soft-radial": "radial-gradient(circle at 20% 20%, rgba(14,165,233,0.12), transparent 55%)",
      },
    },
  },
  plugins: [],
}
