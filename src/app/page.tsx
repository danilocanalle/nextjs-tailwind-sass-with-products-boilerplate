"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background to-muted">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl">My App</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-20">
        <section className="text-center max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Next.js + Tailwind CSS Template
          </h1>
          <p className="text-xl text-muted-foreground">
            Um template moderno com Next.js 16, React 19, Tailwind CSS 4 e
            shadcn/ui. Pronto para você começar a construir sua aplicação.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Documentação Next.js
            </a>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              shadcn/ui
            </a>
          </div>
        </section>

        <section className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold">Rápido</h3>
            <p className="text-muted-foreground text-sm">
              Next.js 16 com App Router e React 19 para performance máxima.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-lg font-semibold">Estilizado</h3>
            <p className="text-muted-foreground text-sm">
              Tailwind CSS 4 com componentes shadcn/ui prontos para usar.
            </p>
          </div>

          <div className="text-center space-y-4 p-6 rounded-lg border bg-card">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <span className="text-2xl">🌙</span>
            </div>
            <h3 className="text-lg font-semibold">Tema</h3>
            <p className="text-muted-foreground text-sm">
              Suporte a dark mode com next-themes já configurado.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground space-y-2">
          <p>Template Next.js + Tailwind CSS. Faça seu próprio projeto!</p>
          {process.env.apiClient && (
            <p className="text-xs font-mono bg-muted px-3 py-1 rounded-md inline-block">
              API: {process.env.apiClient}
            </p>
          )}
        </div>
      </footer>
    </div>
  );
}
