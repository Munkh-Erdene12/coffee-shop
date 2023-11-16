import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    container: {
      padding: "20px",
    },
    backgroundImage: {
      maincoffee2: "url('/assets/images/main_banner_2.jpeg')",
    },
    colors: {
      white: "#FFFFFF",
      publishDark: "#25293C",
      publisher: "#F8F7FA",
      publisherDarkBorder: "#434968",
      publisherBorder: "#DBDADE",
      publisherDarkTextColor: "#cfd3ec",
      publisherTextColor: "#5C596C",
      publisherDarkTextColor1: "#7983BB",
      publisherTextColor1: "#A5A3AE",
      publisherDarkSubColor: "#51597F",
      publisherSubColor: "#BFBDC6",
      publisherDarkContent: "#2E324A",
      publisherDarkIcon: "#B5BEE3",
      publisherCon: "#2F3348",
      publisherCategory: "#232744",
      publisherCategoryDark: "#171932",

      color1: "#291206",
      color_1_hover: "#85460d",
      color2: "#737373",
      color3: "#c7803f",
    },
    fontFamily: {
      Dunbar: "Dunbar Low",
      Light: "DunbarLow-Light",
      dunbarbook: "DunbarLow-Book",
      LeMonde: "LeMonde Livre Classic Normal",
    },

    boxShadow: {
      publisherShadow: "rgba(165, 163, 174, 0.15) 0px 0px 6px 4px",
      publisherDarkShadow: "rgba(0, 0, 0, 0.15) 0px 0px 6px 4px",
      shadow: "rgba(0, 0, 0, 0.5);",
      shadow2: "rgba(0, 0, 0, 0.1) 0px 0px 15px 0px",
    },
  },
  plugins: [],
};
export default config;
