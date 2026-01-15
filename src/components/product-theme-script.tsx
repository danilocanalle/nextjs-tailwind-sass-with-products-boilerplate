// =============================================================================
// PRODUCT THEME SCRIPT (Server-Side)
// =============================================================================
// This component generates an inline script that sets CSS variables
// before the page renders, preventing flash of unstyled content (FOUC).

import { config } from "@/config";
import type { ProductTheme } from "@/config/products/types";

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
    --gradient-primary: ${theme.gradientPrimary};
    --gradient-hero: ${theme.gradientHero};
    --radius: ${theme.radius};
  `.trim();
}

// Generate the blocking script that runs before paint
function generateThemeScript(): string {
  const lightVars = generateCSSVariables(config.theme.light);
  const darkVars = generateCSSVariables(config.theme.dark);

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

export function ProductThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: generateThemeScript() }} />;
}
