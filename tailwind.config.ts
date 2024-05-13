import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      "xsm": {"max": "340px"},
      "sm": {"min": "341px","max": "639px"},
      "md": {"min": "640px", "max": "767px"},
      "lg": {"min": "768px", "max": "939px"},
      "xlg": {"min": "940px", "max": "1024px"},
      "2xlg": {"min": "1025px", "max": "1440px"},
      "3xlg": {"min": "1441px", "max": "1600px"},
      "4xlg": {"min": "1601px"}
    },
    colors: {
      "white": "#F3F2F3",
      "black": "#1E1E1E",
      "bg-color": "#292E28",
      "orange": "#F68045",
      "second": "#92A399"
    },
    fontSize: {
      "biggest_heading": "120px",
      "h1": "88px",
      "h2": "68px",
      "h3": "52px",
      "h4": "44px",
      "h5": "36px",
      "h6": "24px",
      "normal": "16px",
    },
    lineHeight: {
      "biggest_heading": "128px",
      "h1": "92px",
      "h2": "72px",
      "h3": "60px",
      "h4": "52px",
      "h5": "44px",
      "h6": "32px",
      "normal": "24px",
    },
    borderRadius: {
      "5": "5px"
    },
    top: {
      "center": "50%"
    },
    left: {
      "center": "50%"
    }
  },
  plugins: [],
};
export default config;
