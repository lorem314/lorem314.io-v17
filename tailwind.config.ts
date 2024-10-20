import type { Config } from "tailwindcss"

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

        LightPrimary: "#2c5c97",
        DarkPrimary: "#1a2c42",

        "LightContent-0": "black",
        "DarkContent-0": "white",
        "LightContent-1": "rgba(0, 0, 0, 87%)",
        "DarkContent-1": "rgba(255, 255, 255, 87%)",
        "LightContent-2": "rgba(0, 0, 0, 60%)",
        "DarkContent-2": "rgba(255, 255, 255, 60%)",
        "LightContent-3": "rgba(0, 0, 0, 38%)",
        "DarkContent-3": " rgba(255, 255, 255, 38%)",

        LightPageContentBg: "#fdfdfd",
        DarkPageContentBg: "#232323",

        LightContentTitle: "#344f71",
        DarkContentTitle: "#b3b3b3",
      },
    },
  },
  plugins: [
    // require("@tailwindcss/forms")({ strategy: "class" })
  ],
  darkMode: "selector",
}

export default config
