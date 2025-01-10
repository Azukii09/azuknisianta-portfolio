import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: "#4A4A4A",
        secondary: "#696970",
        ternary:"#9999A1",
        contras: "#F4F4F6",
        accent: "#E6E6E9",
        // info: "#BBDDF4",
        // warning: "#FACD2B",
        // success: "#26FF2A",
        // danger: "#FF213F",
      }
    },
  },
  plugins: [],
} satisfies Config;
