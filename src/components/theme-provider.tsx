"use client";

import * as React from "react";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { ThemeToggle } from "./theme-toggle";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
      <ThemeToggle />
    </NextThemesProvider>
  );
}
