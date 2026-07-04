import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"], // Ensure dark mode is based on class
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
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        // Premium display serif for headings, echoing the wordmark on the logo
        display: ['"Playfair Display"', '"Georgia"', 'serif'],
      },
      colors: {
        // Alpha-aware HSL colors: enables Tailwind opacity modifiers like
        // bg-primary/70, border-accent/40, etc. across the whole app.
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
        },
        // Brand river hues, usable as bg-brand-purple, text-brand-gold, etc.
        brand: {
          navy: "hsl(var(--brand-navy) / <alpha-value>)",
          purple: "hsl(var(--brand-purple) / <alpha-value>)",
          rose: "hsl(var(--brand-rose) / <alpha-value>)",
          gold: "hsl(var(--brand-gold) / <alpha-value>)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          primary: "hsl(var(--sidebar-primary) / <alpha-value>)",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          accent: "hsl(var(--sidebar-accent) / <alpha-value>)",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 6px)",
        "2xl": "calc(var(--radius) + 14px)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg, hsl(var(--brand-gold)) 0%, hsl(var(--brand-purple)) 55%, hsl(var(--brand-navy)) 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, hsl(var(--brand-gold) / 0.25) 0%, hsl(var(--brand-purple) / 0.25) 55%, hsl(var(--brand-navy) / 0.25) 100%)",
        "river-gradient": "linear-gradient(160deg, hsl(var(--brand-navy)) 0%, hsl(var(--brand-purple)) 50%, hsl(var(--brand-rose)) 100%)",
      },
      boxShadow: {
        glass: "0 8px 32px hsl(var(--brand-navy) / 0.12), inset 0 1px 0 rgba(255,255,255,0.4)",
        "glow-gold": "0 0 0 1px hsl(var(--brand-gold) / 0.35), 0 8px 24px hsl(var(--brand-gold) / 0.25)",
        premium: "0 10px 40px -10px hsl(var(--brand-navy) / 0.35)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-120% 0" },
          "100%": { backgroundPosition: "220% 0" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out both",
        shimmer: "shimmer 3s linear infinite",
        "gradient-pan": "gradient-pan 8s ease infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")], // Added typography plugin for prose styling
} satisfies Config;
