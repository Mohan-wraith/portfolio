/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        brand: {
          50:  "#f0fdf9",
          100: "#ccfbef",
          200: "#99f5de",
          300: "#5ee9c5",
          400: "#2bd4a8",
          500: "#0fbf92",
          600: "#079970",
          700: "#087a5c",
          800: "#0a6149",
          900: "#09503d",
          950: "#042e24",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease both",
        "fade-in": "fadeIn 0.5s ease both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
