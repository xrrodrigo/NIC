/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        lg: "36rem",
        card: "28rem",
        news: "31.25rem",
        card: "30rem",
        horizontalNews: "40rem"
      },
      height: { 
        lg: "36rem",
        primaryNews: "30rem",
        secondaryNews: "15rem",
        card: "30rem",
        infoNews: "14.5rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonColor: "#111D4A",
        orangeColor: "#FFA400",
        thirtColor: "#2C45CC",
        newsColor: "#067a3e"
      },
      textColor: {
        primaryColor: "#002C5B",
      },
      spacing: {
        68: "15.5rem",
      },
      fontSize: {
        md: "2rem",
      },
    },
  },
  plugins: [],
};
