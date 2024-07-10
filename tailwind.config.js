const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/[object Object].js",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "fade-in": "fade-in 0.5s ease-out",
        'modal-open': 'modal-open 0.3s ease-out',
        'modal-close': 'modal-close 0.3s ease-in',

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "4rem",
          "3xl": "5rem",
        },
      },

      extend: {
        screens: {
          "4k": "1980px",
        },
      },

      colors: {
        "primary-title": "#00AEFF",
        "primary-text": "#FFFFFF",
        "primary-icon": "#EFE1D1",
        "primary-orange": "#F39422",
        "primary-bg": "#200F21",
        "primary-border": "#1b2c68a0",
        "glow-border": "#25213b",
        "prune-plum": "#1a1443",
        "disappearing-purple": "#3F2E3E",
        "mohair-pink": "#A78295",
      },
      keyframes: {
        'modal-open': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'modal-close': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [nextui()],
};
