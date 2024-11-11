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
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        buttonColor: "#111D4A",
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
