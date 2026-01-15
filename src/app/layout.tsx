import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ProductProvider } from "@/components/product-provider";
import { ProductThemeScript } from "@/components/product-theme-script";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <ProductThemeScript />
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
