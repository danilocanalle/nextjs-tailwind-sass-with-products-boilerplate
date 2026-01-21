// =============================================================================
// PRODUCT CONFIGURATION TYPES
// =============================================================================

export interface ProductTheme {
  // Brand colors (HSL values without hsl() wrapper)
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;

  // UI colors
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  input: string;
  ring: string;

  // Semantic colors
  destructive: string;
  destructiveForeground: string;

  success: string;
  successForeground: string;

  warning: string;
  warningForeground: string;

  info: string;
  infoForeground: string;

  // Gradients
  gradientPrimary: string;
  gradientHero: string;

  // Radius
  radius: string;
}

export interface ProductThemeConfig {
  light: ProductTheme;
  dark: ProductTheme;
}

export interface ProductFeatures {
  darkMode: boolean;
  analytics: boolean;
  newsletter: boolean;
  socialLogin: boolean;
}

export interface ProductUrls {
  api: string;
  docs: string;
  support: string;
  privacy: string;
  terms: string;
}

export interface ProductSocial {
  twitter?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
}

export interface ProductConfig {
  // Identity
  id: string;
  name: string;
  title: string;
  description: string;
  tagline: string;

  // Assets
  logo: string;
  favicon: string;
  ogImage: string;

  // Theme
  theme: ProductThemeConfig;

  // Features
  features: ProductFeatures;

  // URLs
  urls: ProductUrls;

  // Social
  social: ProductSocial;

  // SEO
  seo: {
    keywords: string[];
    author: string;
  };
}
