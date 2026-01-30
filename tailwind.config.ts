import type { Config } from "tailwindcss";

export default {
  // Keep darkMode configured for future use, but current visual direction is light-only.
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#FFF5EC",
          100: "#FFE7D1",
          200: "#FFD0A3",
          300: "#FFB175",
          400: "#FF8A3F",
          500: "#FF6A00",
          600: "#E85A00",
          700: "#C94B00",
          800: "#A53F00",
          900: "#7D3100"
        },
        gold: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
          800: "#92400E",
          900: "#78350F"
        }
      },
      fontFamily: {
        heading: ["Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        hero: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        devanagari: [
          "Tiro Devanagari Sanskrit",
          "Noto Serif Devanagari",
          "ui-serif",
          "Georgia",
          "serif"
        ]
      },
      backgroundImage: {
        "saffron-sunrise": "linear-gradient(135deg, #FF6A00 0%, #FFB347 100%)",
        "saffron-glow":
          "radial-gradient(70% 60% at 20% 10%, rgba(255, 106, 0, 0.35) 0%, rgba(255, 106, 0, 0) 60%), radial-gradient(60% 60% at 90% 30%, rgba(255, 179, 71, 0.25) 0%, rgba(255, 179, 71, 0) 55%), radial-gradient(55% 55% at 50% 100%, rgba(245, 158, 11, 0.18) 0%, rgba(245, 158, 11, 0) 60%)",
        "temple-flow":
          "radial-gradient(1200px 720px at 10% -12%, rgba(255, 179, 71, 0.85) 0%, rgba(255, 140, 26, 0.22) 45%, rgba(255, 229, 180, 0.06) 78%), radial-gradient(900px 680px at 95% 0%, rgba(255, 106, 0, 0.20) 0%, rgba(255, 211, 106, 0.16) 52%, rgba(255, 229, 180, 0.06) 80%), linear-gradient(180deg, #FFB347 0%, #FFD36A 45%, #FFE5B4 100%)",
        "temple-surface":
          "linear-gradient(135deg, rgba(255, 229, 180, 0.55) 0%, rgba(255, 211, 106, 0.24) 45%, rgba(255, 106, 0, 0.10) 100%)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255, 179, 71, 0.18), 0 10px 40px rgba(255, 106, 0, 0.18)",
        gold: "0 0 0 1px rgba(245, 158, 11, 0.22), 0 18px 60px rgba(245, 158, 11, 0.14)",
        soft: "0 1px 1px rgba(255, 106, 0, 0.10), 0 14px 40px rgba(255, 140, 26, 0.16)"
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-8px,0)" }
        },
        flicker: {
          "0%": { opacity: "0.35" },
          "12%": { opacity: "0.55" },
          "24%": { opacity: "0.42" },
          "38%": { opacity: "0.62" },
          "52%": { opacity: "0.48" },
          "70%": { opacity: "0.66" },
          "100%": { opacity: "0.42" }
        },
        shimmer: {
          "0%": { transform: "translateX(-30%)" },
          "100%": { transform: "translateX(130%)" }
        }
      },
      animation: {
        floaty: "floaty 10s ease-in-out infinite",
        flicker: "flicker 2.6s ease-in-out infinite",
        shimmer: "shimmer 2.2s ease-in-out infinite"
      }
    }
  },
  plugins: []
} satisfies Config;


