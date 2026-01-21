// =============================================================================
// USER API ROUTE
// =============================================================================
// Returns the current user data including their custom theme.
// Toggle IS_LOGGED_IN to simulate logged in/out states.

import { NextResponse } from "next/server";

import type { ProductThemeConfig } from "@/config/products/types";

// =============================================================================
// CONFIGURATION - Toggle this to simulate login states
// =============================================================================
const IS_LOGGED_IN = false;

// =============================================================================
// MOCK USER DATA
// =============================================================================
// Example user with a custom red theme
const mockUser = {
  id: "user-123",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
  theme: {
    light: {
      // Red theme for logged user
      primary: "0 84% 50%", // Red
      primaryForeground: "0 0% 100%",
      secondary: "15 90% 55%", // Orange-red
      secondaryForeground: "0 0% 100%",
      accent: "350 80% 55%", // Pink-red
      accentForeground: "0 0% 100%",
      background: "0 0% 100%",
      foreground: "0 10% 10%",
      card: "0 0% 100%",
      cardForeground: "0 10% 10%",
      popover: "0 0% 100%",
      popoverForeground: "0 10% 10%",
      muted: "0 10% 96%",
      mutedForeground: "0 10% 40%",
      border: "0 20% 90%",
      input: "0 20% 90%",
      ring: "0 84% 50%",
      destructive: "0 84% 60%",
      destructiveForeground: "0 0% 100%",
      gradientPrimary:
        "linear-gradient(135deg, hsl(0 84% 50%), hsl(15 90% 55%))",
      gradientHero:
        "radial-gradient(ellipse at top, hsl(0 84% 50% / 0.15), transparent 50%)",
      radius: "0.5rem",
    },
    dark: {
      // Red dark theme
      primary: "0 84% 60%",
      primaryForeground: "0 0% 100%",
      secondary: "15 90% 60%",
      secondaryForeground: "0 0% 100%",
      accent: "350 80% 65%",
      accentForeground: "0 0% 0%",
      background: "0 10% 5%",
      foreground: "0 0% 98%",
      card: "0 10% 8%",
      cardForeground: "0 0% 98%",
      popover: "0 10% 8%",
      popoverForeground: "0 0% 98%",
      muted: "0 10% 15%",
      mutedForeground: "0 10% 60%",
      border: "0 10% 20%",
      input: "0 10% 20%",
      ring: "0 84% 60%",
      destructive: "0 62% 50%",
      destructiveForeground: "0 0% 100%",
      gradientPrimary:
        "linear-gradient(135deg, hsl(0 84% 60%), hsl(15 90% 60%))",
      gradientHero:
        "radial-gradient(ellipse at top, hsl(0 84% 60% / 0.2), transparent 50%)",
      radius: "0.5rem",
    },
  } satisfies ProductThemeConfig,
};

// =============================================================================
// API TYPES
// =============================================================================
export interface UserResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    theme: ProductThemeConfig;
  } | null;
  isLoggedIn: boolean;
}

// =============================================================================
// GET /api/user
// =============================================================================
export async function GET(): Promise<NextResponse<UserResponse>> {
  // Simulate some latency (remove in production)
  // await new Promise((resolve) => setTimeout(resolve, 100));

  if (!IS_LOGGED_IN) {
    return NextResponse.json({
      user: null,
      isLoggedIn: false,
    });
  }

  return NextResponse.json({
    user: mockUser,
    isLoggedIn: true,
  });
}
