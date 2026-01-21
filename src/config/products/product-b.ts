// =============================================================================
// PRODUCT B - BLUE/PURPLE THEME
// =============================================================================

import type { ProductConfig } from "./types";

export const productB: ProductConfig = {
  // Identity
  id: "product-b",
  name: "Product B",
  title: "Product B - Creative Studio",
  description:
    "Plataforma criativa para designers e desenvolvedores construírem experiências incríveis.",
  tagline: "Crie sem limites",

  // Assets
  logo: "/logos/product-b.svg",
  favicon: "/favicons/product-b.ico",
  ogImage: "/og/product-b.png",

  // Theme
  theme: {
    light: {
      // Brand - Blue/Purple
      primary: "252 87% 56%",
      primaryForeground: "0 0% 100%",
      secondary: "240 4.8% 95.9%",
      secondaryForeground: "240 5.9% 10%",
      accent: "280 70% 50%",
      accentForeground: "0 0% 100%",

      // UI
      background: "0 0% 100%",
      foreground: "240 10% 3.9%",
      card: "0 0% 100%",
      cardForeground: "240 10% 3.9%",
      popover: "0 0% 100%",
      popoverForeground: "240 10% 3.9%",
      muted: "240 4.8% 95.9%",
      mutedForeground: "240 3.8% 46.1%",
      border: "240 5.9% 90%",
      input: "240 5.9% 90%",
      ring: "252 87% 56%",

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
        "linear-gradient(135deg, hsl(252 87% 56%), hsl(280 70% 50%))",
      gradientHero: "linear-gradient(180deg, hsl(0 0% 100%), hsl(252 87% 97%))",

      // Radius
      radius: "0.5rem",
    },
    dark: {
      // Brand - Blue/Purple (adjusted for dark)
      primary: "252 87% 66%",
      primaryForeground: "0 0% 100%",
      secondary: "240 3.7% 15.9%",
      secondaryForeground: "0 0% 98%",
      accent: "280 70% 60%",
      accentForeground: "0 0% 100%",

      // UI
      background: "240 10% 3.9%",
      foreground: "0 0% 98%",
      card: "240 10% 8%",
      cardForeground: "0 0% 98%",
      popover: "240 10% 8%",
      popoverForeground: "0 0% 98%",
      muted: "240 3.7% 15.9%",
      mutedForeground: "240 5% 64.9%",
      border: "240 3.7% 20%",
      input: "240 3.7% 20%",
      ring: "252 87% 66%",

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
        "linear-gradient(135deg, hsl(252 87% 56%), hsl(280 70% 60%))",
      gradientHero:
        "linear-gradient(180deg, hsl(240 10% 3.9%), hsl(252 87% 15%))",

      // Radius
      radius: "0.5rem",
    },
  },

  // Features
  features: {
    darkMode: true,
    analytics: true,
    newsletter: false,
    socialLogin: true,
  },

  // URLs
  urls: {
    api: "https://api.product-b.com",
    docs: "https://docs.product-b.com",
    support: "https://support.product-b.com",
    privacy: "/privacy",
    terms: "/terms",
  },

  // Social
  social: {
    twitter: "https://twitter.com/productb",
    github: "https://github.com/productb",
    instagram: "https://instagram.com/productb",
  },

  // SEO
  seo: {
    keywords: ["design", "creative", "studio", "development", "ui/ux"],
    author: "Product B Team",
  },
};
