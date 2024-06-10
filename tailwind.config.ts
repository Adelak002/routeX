import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primary: ["Plus Jakarta Sans", "sans-serif"]
      },
      colors:{
        'custom-green':'#034833',
        'custom-lemon': '#83CD20'
      }
    },
  },
  plugins: [],
};
export default config;
