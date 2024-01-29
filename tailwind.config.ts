import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        backgroundAlt: "var(--backgroundAlt)",
        foreground: "var(--foreground)",
        foregroundAlt: "var(--foregroundAlt)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xxl: "calc(var(--radius) + 30px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        actionButton:
          "0 1px 1px #2d20111f, 0 1.50259px 3px #2d201133, 0 4px 8px #2d201133, 0 12px 24px -6px #2d20114d, 0 -2px hsl(var(--primary)) inset",
        button:
          "0 1px 1px #2d20111f, 0 1.50259px 3px #2d201133, 0 4px 8px #2d201133, 0 12px 24px -6px #2d20114d, 0 -2px hsl(var(--background)) inset",
        compact:
          "0 0 0 1px #ebe7e0, 0 1px 2px #d8d2ca80, 0 -1.5px #e7e2da80 inset",
        priceCard:
          "0 0 0 1px #e3e1de66, 0 1px 2px #5f4a2e14, 0 4px 6px #5f4a2e0a, 0 40px 40px -24px #684b2514, 0 56px 56px -32px #684b2514, 0 24px 40px #684b250a, 0 8px #70451a12 inset",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/container-queries"),
  ],
} satisfies Config;

export default config;

/* styles.css */
