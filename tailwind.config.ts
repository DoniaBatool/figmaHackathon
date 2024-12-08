import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mytext: '#2A254B',
      },
      fontFamily: {
        clash: ['Clash Display', 'sans-serif'], // Define Clash Display font
        satoshi: ['Satoshi', 'sans-serif'],    // Satoshi font
       
      },

    },
  },
  plugins: [],
};
export default config;
