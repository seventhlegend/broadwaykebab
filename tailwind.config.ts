import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "var(--color-brand-50)",
          100: "var(--color-brand-100)",
          200: "var(--color-brand-200)",
          300: "var(--color-brand-300)",
          400: "var(--color-brand-400)",
          500: "var(--color-brand-500)",
          600: "var(--color-brand-600)",
          700: "var(--color-brand-700)",
          800: "var(--color-brand-800)",
          900: "var(--color-brand-900)",
        },
        brandNext: {
          50: "var(--color-brand-next-50)",
          100: "var(--color-brand-next-100)",
          200: "var(--color-brand-next-200)",
          300: "var(--color-brand-next-300)",
          400: "var(--color-brand-next-400)",
          500: "var(--color-brand-next-500)",
          600: "var(--color-brand-next-600)",
          700: "var(--color-brand-next-700)",
          800: "var(--color-brand-next-800)",
          900: "var(--color-brand-next-900)",
        },
        surface: {
          page: "var(--color-surface-page)",
          card: "var(--color-surface-card)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          inverse: "var(--color-text-inverse)",
        },
        success: {
          600: "var(--color-success-600)",
          700: "var(--color-success-700)",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
} as Config;
export default config;
