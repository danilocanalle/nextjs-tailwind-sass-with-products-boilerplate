// =============================================================================
// PRODUCT THEME COMPONENTS (Server-Side)
// =============================================================================
// These components inject product theme CSS variables server-side:
// - ProductThemeStyle: Pure CSS fallback (works without JavaScript)
// - ProductThemeScript: JavaScript-enhanced (handles localStorage theme)
//
// Together they ensure the correct theme is always applied, even with JS disabled.
// Both components support optional user theme override for logged-in users.

import { config } from "@/config";
import type { ProductTheme, ProductThemeConfig } from "@/config/products/types";

// =============================================================================
// TYPES
// =============================================================================
interface ThemeComponentProps {
  /** Optional user theme that overrides the product theme */
  userTheme?: ProductThemeConfig | null;
}

function generateCSSVariables(theme: ProductTheme): string {
  return `
    --primary: ${theme.primary};
    --primary-foreground: ${theme.primaryForeground};
    --secondary: ${theme.secondary};
    --secondary-foreground: ${theme.secondaryForeground};
    --accent: ${theme.accent};
    --accent-foreground: ${theme.accentForeground};
    --background: ${theme.background};
    --foreground: ${theme.foreground};
    --card: ${theme.card};
    --card-foreground: ${theme.cardForeground};
    --popover: ${theme.popover};
    --popover-foreground: ${theme.popoverForeground};
    --muted: ${theme.muted};
    --muted-foreground: ${theme.mutedForeground};
    --border: ${theme.border};
    --input: ${theme.input};
    --ring: ${theme.ring};
    --destructive: ${theme.destructive};
    --destructive-foreground: ${theme.destructiveForeground};
    --warning: ${theme.warning};
    --warning-foreground: ${theme.warningForeground};
    --info: ${theme.info};
    --info-foreground: ${theme.infoForeground};
    --success: ${theme.success};
    --success-foreground: ${theme.successForeground};
    --gradient-primary: ${theme.gradientPrimary};
    --gradient-hero: ${theme.gradientHero};
  `.trim();
}

// =============================================================================
// CSS-ONLY FALLBACK (Works without JavaScript)
// =============================================================================
// This generates a <style> tag that sets CSS variables using pure CSS.
// Works immediately on page load, even with JavaScript disabled.

function generateThemeStyles(themeConfig: ProductThemeConfig): string {
  const lightVars = generateCSSVariables(themeConfig.light);
  const darkVars = generateCSSVariables(themeConfig.dark);

  return `
    /* Light theme (default) */
    :root {
      ${lightVars}
    }

    /* Dark theme via class (set by next-themes) */
    .dark {
      ${darkVars}
    }

    /* System preference fallback (when no .light or .dark class) */
    @media (prefers-color-scheme: dark) {
      :root:not(.light) {
        ${darkVars}
      }
    }
  `.trim();
}

/**
 * ProductThemeStyle - Pure CSS Theme Injection
 *
 * Generates a <style> tag with CSS variables for both light and dark themes.
 * This ensures themes work even with JavaScript disabled, using:
 * - :root for light theme
 * - .dark class for dark theme (when JS is enabled)
 * - @media prefers-color-scheme for system preference fallback
 *
 * @param userTheme - Optional user theme that overrides the product theme
 */
export function ProductThemeStyle({ userTheme }: ThemeComponentProps = {}) {
  const themeConfig = userTheme ?? config.theme;
  return (
    <style
      dangerouslySetInnerHTML={{ __html: generateThemeStyles(themeConfig) }}
    />
  );
}

// =============================================================================
// JAVASCRIPT-ENHANCED THEME (Handles localStorage preference)
// =============================================================================
// This script reads the user's saved theme from localStorage and applies it
// immediately, before the page renders. Required for respecting user preference.

function generateThemeScript(themeConfig: ProductThemeConfig): string {
  const lightVars = generateCSSVariables(themeConfig.light);
  const darkVars = generateCSSVariables(themeConfig.dark);

  // This script runs synchronously before the page renders
  return `
(function() {
  var lightStyles = \`${lightVars}\`;
  var darkStyles = \`${darkVars}\`;

  function applyTheme(isDark) {
    var styles = isDark ? darkStyles : lightStyles;
    document.documentElement.style.cssText = styles;
  }

  // Check for saved theme or system preference
  var savedTheme = localStorage.getItem('theme');
  var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var isDark = savedTheme === 'dark' || (savedTheme !== 'light' && systemDark);

  applyTheme(isDark);

  // Expose function for theme changes
  window.__applyProductTheme = applyTheme;
})();
  `.trim();
}

/**
 * ProductThemeScript - JavaScript Theme Enhancement
 *
 * Generates a blocking <script> that reads the user's theme preference
 * from localStorage and applies it immediately. This ensures the correct
 * theme is shown even before React hydration.
 *
 * Note: Requires JavaScript. Use together with ProductThemeStyle for
 * complete coverage including no-JS users.
 *
 * @param userTheme - Optional user theme that overrides the product theme
 */
export function ProductThemeScript({ userTheme }: ThemeComponentProps = {}) {
  const themeConfig = userTheme ?? config.theme;
  return (
    <script
      dangerouslySetInnerHTML={{ __html: generateThemeScript(themeConfig) }}
    />
  );
}
