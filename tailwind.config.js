/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        umrah: "url('../public/umrah.webp')",
        footer: "url('../public/img/bg/poli.svg')",
      },
      animation: {
        marquee: "marquee 15s linear infinite",
        marquee2: "marquee2 15s linear infinite",
        marquee3: "marquee 20s linear infinite",
        marquee4: "marquee2 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "100%": { transform: "translateX(0%)" },
          "0%": { transform: "translateX(100%)" },
        },
        marquee3: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee4: {
          "100%": { transform: "translateX(0%)" },
          "0%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/line-clamp")],
};
