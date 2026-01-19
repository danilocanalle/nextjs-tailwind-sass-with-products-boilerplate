import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import type { UserResponse } from "./api/user/route";

import { ProductProvider } from "@/components/product-provider";
import {
  ProductThemeScript,
  ProductThemeStyle,
} from "@/components/product-theme-script";
import { ThemeProvider } from "@/components/theme-provider";
import { config } from "@/config";

import "./globals.css";
import "@/styles/main.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  keywords: config.seo.keywords,
  authors: [{ name: config.seo.author }],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
};

// =============================================================================
// FETCH USER DATA (Server-Side)
// =============================================================================
async function getUser(): Promise<UserResponse | null> {
  try {
    // Use absolute URL for server-side fetch
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
    const response = await fetch(`${baseUrl}/api/user`, {
      cache: "no-store", // Always fetch fresh user data
    });

    if (!response.ok) {
      return null;
    }

    return response.json();
  } catch {
    // Fail silently - will use product theme as fallback
    return null;
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch user data server-side
  const userData = await getUser();
  const userTheme = userData?.user?.theme ?? null;

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* CSS fallback for no-JS users */}
        <ProductThemeStyle userTheme={userTheme} />
        {/* JS enhancement for localStorage theme preference */}
        <ProductThemeScript userTheme={userTheme} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ProductProvider>{children}</ProductProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
