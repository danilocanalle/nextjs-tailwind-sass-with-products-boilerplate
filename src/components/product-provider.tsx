"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";

import { useTheme } from "next-themes";

import { config, type ProductConfig } from "@/config";
import type { ProductTheme } from "@/config/products/types";

// =============================================================================
// CONTEXT
// =============================================================================

interface ProductContextValue {
  product: ProductConfig;
  theme: ProductTheme;
}

const ProductContext = createContext<ProductContextValue | null>(null);

// =============================================================================
// HOOK
// =============================================================================

export function useProduct(): ProductContextValue {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }

  return context;
}

// =============================================================================
// CSS VARIABLE INJECTOR
// =============================================================================

function injectCSSVariables(isDark: boolean) {
  // Use the exposed function from the blocking script if available
  if (typeof window !== "undefined" && window.__applyProductTheme) {
    window.__applyProductTheme(isDark);
  }
}

// Fallback function for direct injection (kept for reference)
function _injectCSSVariablesDirect(theme: ProductTheme) {
  const root = document.documentElement;

  // Core colors
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--primary-foreground", theme.primaryForeground);
  root.style.setProperty("--secondary", theme.secondary);
  root.style.setProperty("--secondary-foreground", theme.secondaryForeground);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--accent-foreground", theme.accentForeground);

  // UI colors
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--foreground", theme.foreground);
  root.style.setProperty("--card", theme.card);
  root.style.setProperty("--card-foreground", theme.cardForeground);
  root.style.setProperty("--popover", theme.popover);
  root.style.setProperty("--popover-foreground", theme.popoverForeground);
  root.style.setProperty("--muted", theme.muted);
  root.style.setProperty("--muted-foreground", theme.mutedForeground);
  root.style.setProperty("--border", theme.border);
  root.style.setProperty("--input", theme.input);
  root.style.setProperty("--ring", theme.ring);

  // Semantic colors
  root.style.setProperty("--destructive", theme.destructive);
  root.style.setProperty(
    "--destructive-foreground",
    theme.destructiveForeground
  );

  // Gradients
  root.style.setProperty("--gradient-primary", theme.gradientPrimary);
  root.style.setProperty("--gradient-hero", theme.gradientHero);

  // Radius
  root.style.setProperty("--radius", theme.radius);
}

// =============================================================================
// PROVIDER
// =============================================================================

interface ProductProviderProps {
  children: ReactNode;
}

export function ProductProvider({ children }: ProductProviderProps) {
  const { resolvedTheme } = useTheme();

  // Get the current theme based on light/dark mode
  const currentTheme = useMemo(() => {
    const isDark = resolvedTheme === "dark";
    return isDark ? config.theme.dark : config.theme.light;
  }, [resolvedTheme]);

  // Inject CSS variables when theme changes
  useEffect(() => {
    const isDark = resolvedTheme === "dark";
    injectCSSVariables(isDark);
  }, [resolvedTheme]);

  const value = useMemo(
    () => ({
      product: config,
      theme: currentTheme,
    }),
    [currentTheme]
  );

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
