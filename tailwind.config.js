/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "rgb(216, 125, 74)",
        blackish: "rgb(16, 16, 16)",
        "white-grey": "rgb(241, 241, 241)",
        whitish: "rgb(250, 250, 250)",
        orangeish: "rgb(251, 175, 133)",
        fill: "#191919",
        grayish: "#979797",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "hero-desktop": "url('assets/home/desktop/image-hero.jpg')",
        "hero-tablet": "url('assets/home/tablet/image-header.jpg')",
        "hero-mobile": "url('assets/home/mobile/image-header.jpg')",
      },
      screens: {
        img: "418px",
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
}
