// =============================================================================
// PRODUCT A - BLUE THEME (Default)
// =============================================================================

import type { ProductConfig } from "./types";

export const productA: ProductConfig = {
  // Identity
  id: "product-a",
  name: "Product A",
  title: "Product A - Modern Dashboard",
  description:
    "Uma plataforma moderna para gerenciamento de projetos e colaboração em equipe.",
  tagline: "Simplifique seu fluxo de trabalho",

  // Assets
  logo: "/logos/product-a.svg",
  favicon: "/favicons/product-a.ico",
  ogImage: "/og/product-a.png",

  // Theme
  theme: {
    light: {
      // Brand - Blue (#2152cf primary, #36c2ff secondary)
      primary: "223 73% 47%",
      primaryForeground: "0 0% 100%",
      secondary: "198 100% 61%",
      secondaryForeground: "222.2 47% 11%",
      accent: "223 73% 47%",
      accentForeground: "0 0% 100%",

      // UI
      background: "0 0% 100%",
      foreground: "222.2 47% 11%",
      card: "0 0% 100%",
      cardForeground: "222.2 47% 11%",
      popover: "0 0% 100%",
      popoverForeground: "222.2 47% 11%",
      muted: "210 40% 96.1%",
      mutedForeground: "215.4 16.3% 46.9%",
      border: "214.3 31.8% 91.4%",
      input: "214.3 31.8% 91.4%",
      ring: "223 73% 47%",

      // Semantic
      destructive: "0 84.2% 60.2%",
      destructiveForeground: "0 0% 100%",
      success: "142 76% 36%",
      successForeground: "0 0% 100%",
      warning: "38 92% 50%",
      warningForeground: "0 0% 100%",
      info: "199 89% 48%",
      infoForeground: "0 0% 100%",

      // Gradients
      gradientPrimary:
        "linear-gradient(135deg, hsl(223 73% 47%), hsl(198 100% 61%))",
      gradientHero: "linear-gradient(180deg, hsl(0 0% 100%), hsl(223 73% 96%))",

      // Radius
      radius: "0.75rem",
    },
    dark: {
      // Brand - Blue (lighter for dark mode)
      primary: "223 73% 57%",
      primaryForeground: "0 0% 100%",
      secondary: "198 100% 71%",
      secondaryForeground: "210 40% 98%",
      accent: "223 73% 57%",
      accentForeground: "0 0% 100%",

      // UI
      background: "222.2 47% 11%",
      foreground: "210 40% 98%",
      card: "217.2 32.6% 17.5%",
      cardForeground: "210 40% 98%",
      popover: "217.2 32.6% 17.5%",
      popoverForeground: "210 40% 98%",
      muted: "222.2 33% 15%",
      mutedForeground: "215 20.2% 65.1%",
      border: "217.2 32.6% 27.5%",
      input: "217.2 32.6% 27.5%",
      ring: "223 73% 57%",

      // Semantic
      destructive: "0 62.8% 50%",
      destructiveForeground: "0 0% 100%",
      success: "142 76% 46%",
      successForeground: "0 0% 100%",
      warning: "38 92% 60%",
      warningForeground: "0 0% 100%",
      info: "199 89% 58%",
      infoForeground: "0 0% 100%",

      // Gradients
      gradientPrimary:
        "linear-gradient(135deg, hsl(223 73% 47%), hsl(198 100% 61%))",
      gradientHero:
        "linear-gradient(180deg, hsl(222.2 47% 11%), hsl(223 73% 20%))",

      // Radius
      radius: "0.75rem",
    },
  },

  // Features
  features: {
    darkMode: true,
    analytics: true,
    newsletter: true,
    socialLogin: false,
  },

  // URLs
  urls: {
    api: "https://api.product-a.com",
    docs: "https://docs.product-a.com",
    support: "https://support.product-a.com",
    privacy: "/privacy",
    terms: "/terms",
  },

  // Social
  social: {
    twitter: "https://twitter.com/producta",
    github: "https://github.com/producta",
  },

  // SEO
  seo: {
    keywords: [
      "dashboard",
      "productivity",
      "collaboration",
      "project management",
    ],
    author: "Product A Team",
  },
};
