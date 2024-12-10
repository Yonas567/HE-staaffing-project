import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        xl: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        slide: "slide 12s linear infinite",
      },
    },
  },

  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#34d399",
          secondary: "#0ea5e9",
          accent: "#fb7185",
          neutral: "#f0f9ff",
          "base-100": "#ffffff",
          info: "#0369a1",
          success: "#6ee7b7",
          warning: "#fda4af",
          error: "#e11d48",
          "primary-content": "#0369a1",
          "secondary-content": "#0c4a6e",
        },
      },
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
