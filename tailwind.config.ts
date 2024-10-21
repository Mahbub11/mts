import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textStroke: {
        black: "1px black", // Change to your desired color and width
      },
      colors: {
        btn_clr: "#00B4D8",
        secondry: "#212121",
        marquee: "#004d43",
        about: "#cdea68",
        background: "var(--background)",
        foreground: "var(--foreground)",
        customLight: "rgba(138, 235, 255, 0.93)", // Light gradient color
        customDark: "rgba(0, 212, 255, 0.96)", // Dark gradient color
      },
      screens: {
        sm: { min: "360px", max: "768px" },
        md: { min: "769px", max: "1024px" },
        lg: { min: "1025px" },
        xl: { min: "1491px" },
      },
    },

    fontFamily: {
      montreal: ["NeueMontreal", "sans-serif"],
      nm: ["NM", "sans-serif"],
      fg: ["FG", "sans-serif"],
      gmvf: ["GMVF", "sans-serif"],
      gvf: ["GVF", "sans-serif"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-stroke": {
          "-webkit-text-stroke": "1px black", // Adjust stroke width and color as needed
          color: "transparent",
        },
      });
    }),
  ],
};
export default config;
