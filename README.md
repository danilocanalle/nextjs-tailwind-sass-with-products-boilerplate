# Next.js + Tailwind CSS + SASS + Products Template 🚀

![Next.js](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Sass](https://img.shields.io/badge/Sass-1.83-CC6699?style=for-the-badge&logo=sass)

Um template moderno e pronto para produção com as últimas versões de Next.js, React, Tailwind CSS, Sass e shadcn/ui.

## ✨ Features

- ⚡ **Next.js 16** com App Router
- ⚛️ **React 19**
- 🎨 **Tailwind CSS 4**
- 💅 **Sass** - Pré-processador CSS com variáveis, mixins e funções
- 🏷️ **Multi-Produto** - Suporte a múltiplos produtos com temas dinâmicos
- 🧩 **shadcn/ui** - Componentes acessíveis e customizáveis
- 🌙 **Dark Mode** - Suporte a tema claro/escuro com next-themes
- 📦 **TypeScript** - Tipagem estática
- 🔧 **ESLint** - Linting configurado
- 🎯 **Path Aliases** - Imports simplificados com `@/`

## 🚀 Começando

### Pré-requisitos

- Node.js 20.x ou superior
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone ou use como template**

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nextjs-tailwind-boilerplate.git

# Ou use como template no GitHub
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

4. **Abra no navegador**

Acesse [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
├── public/              # Arquivos estáticos
├── src/
│   ├── app/             # App Router (páginas e layouts)
│   │   ├── globals.css  # Estilos globais (Tailwind)
│   │   ├── layout.tsx   # Layout principal
│   │   ├── page.tsx     # Página inicial
│   │   └── not-found.tsx
│   ├── components/      # Componentes React
│   │   ├── ui/          # Componentes shadcn/ui
│   │   ├── FeatureCard/ # Exemplo de componente com Sass
│   │   ├── product-provider.tsx    # Provider multi-produto
│   │   ├── product-theme-script.tsx # Injeção SSR de tema
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── config/          # Configuração de produtos
│   │   ├── products/    # Definições de produtos
│   │   │   ├── types.ts     # Tipagem ProductConfig
│   │   │   ├── product-a.ts # Produto A (azul)
│   │   │   └── product-b.ts # Produto B (roxo)
│   │   └── index.ts     # Seletor de produto
│   ├── styles/          # Arquivos Sass
│   │   ├── _variables.scss  # Variáveis Sass
│   │   ├── _mixins.scss     # Mixins reutilizáveis
│   │   ├── _functions.scss  # Funções utilitárias
│   │   ├── _index.scss      # Barrel export
│   │   ├── main.scss        # Ponto de entrada Sass
│   │   └── components/      # Estilos de componentes
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilitários
│   └── types/           # Definições TypeScript
├── components.json      # Configuração shadcn/ui
├── postcss.config.mjs   # Configuração PostCSS
└── tsconfig.json        # Configuração TypeScript
```

## 📜 Scripts Disponíveis

| Comando                   | Descrição                                         |
| ------------------------- | ------------------------------------------------- |
| `npm run dev`             | Inicia o servidor de desenvolvimento              |
| `npm run dev:product-a`   | Inicia com Product A                              |
| `npm run dev:product-b`   | Inicia com Product B                              |
| `npm run build`           | Cria a build de produção                          |
| `npm run build:product-a` | Build para Product A                              |
| `npm run build:product-b` | Build para Product B                              |
| `npm run start`           | Inicia o servidor de produção                     |
| `npm run lint`            | Executa o ESLint                                  |
| `npm run lint:fix`        | Corrige problemas do ESLint automaticamente       |
| `npm run update:deps`     | Atualiza todas as dependências para última versão |

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
# Product Configuration (product-a ou product-b)
NEXT_PUBLIC_PRODUCT=product-a

# API Configuration
NEXT_PUBLIC_API_URL=https://sua-api.com
```

> **Nota**: Variáveis que precisam ser acessadas no cliente devem ter o prefixo `NEXT_PUBLIC_`.

As variáveis são tipadas em `src/types/env.d.ts`.

## 🏷️ Sistema Multi-Produto

Este template suporta múltiplos produtos com temas, cores e configurações independentes. Cada produto pode ter sua própria identidade visual sem alterar o código.

### Como funciona

1. **Build-time**: O produto é selecionado via `NEXT_PUBLIC_PRODUCT`
2. **SSR**: As variáveis CSS são injetadas no `<head>` antes do render (sem flash)
3. **Client**: O `ProductProvider` sincroniza mudanças de tema (light/dark)

### Injeção de Tema Server-Side

O sistema usa dois componentes para garantir que o tema funcione em **todos os cenários**:

| Componente           | Tipo       | Funciona sem JS? | Propósito                                               |
| -------------------- | ---------- | ---------------- | ------------------------------------------------------- |
| `ProductThemeStyle`  | `<style>`  | ✅ Sim           | CSS puro com `:root`, `.dark` e `prefers-color-scheme`  |
| `ProductThemeScript` | `<script>` | ❌ Não           | Lê `localStorage` para respeitar preferência do usuário |

**Por que dois componentes?**

- **`ProductThemeStyle`** (CSS puro): Funciona imediatamente, mesmo com JavaScript desabilitado. Usa `@media (prefers-color-scheme: dark)` para respeitar a preferência do sistema.

- **`ProductThemeScript`** (JavaScript): Necessário para ler a preferência salva em `localStorage` quando o usuário escolheu manualmente um tema diferente da preferência do sistema.

**Exemplo no layout:**

```tsx
// src/app/layout.tsx
<html lang="pt-br" suppressHydrationWarning>
  <head>
    {/* CSS fallback para usuários sem JS */}
    <ProductThemeStyle />
    {/* JS para preferência salva no localStorage */}
    <ProductThemeScript />
  </head>
  <body>
    <ThemeProvider>
      <ProductProvider>{children}</ProductProvider>
    </ThemeProvider>
  </body>
</html>
```

### Tema Customizado por Usuário

O sistema suporta **temas personalizados por usuário logado**. A API `/api/user` pode retornar um `ProductThemeConfig` customizado que sobrescreve o tema do produto.

**Fluxo:**

1. O `layout.tsx` faz fetch de `/api/user` no servidor
2. Se o usuário estiver logado e tiver tema customizado, esse tema é usado
3. Caso contrário, usa o tema padrão do produto

**API Route (`/api/user`):**

```typescript
// src/app/api/user/route.ts
const IS_LOGGED_IN = true; // Toggle para simular login

const mockUser = {
  id: "user-123",
  name: "John Doe",
  email: "john@example.com",
  theme: {
    light: {
      primary: "0 84% 50%", // Vermelho customizado
      // ... outras cores
    },
    dark: {
      primary: "0 84% 60%",
      // ... outras cores
    },
  },
};

export async function GET() {
  if (!IS_LOGGED_IN) {
    return NextResponse.json({ user: null, isLoggedIn: false });
  }
  return NextResponse.json({ user: mockUser, isLoggedIn: true });
}
```

**Layout com tema do usuário:**

```tsx
// src/app/layout.tsx
export default async function RootLayout({ children }) {
  // Fetch do usuário no servidor
  const userData = await getUser();
  const userTheme = userData?.user?.theme ?? null;

  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        {/* Passa o tema do usuário (ou null para usar tema do produto) */}
        <ProductThemeStyle userTheme={userTheme} />
        <ProductThemeScript userTheme={userTheme} />
      </head>
      <body>...</body>
    </html>
  );
}
```

**Prioridade de temas:**

| Prioridade | Fonte           | Quando é usado                 |
| ---------- | --------------- | ------------------------------ |
| 1ª         | Tema do usuário | Usuário logado com tema custom |
| 2ª         | Tema do produto | Usuário não logado ou sem tema |

### Estrutura de Configuração

```
src/config/
├── products/
│   ├── types.ts       # Interface ProductConfig
│   ├── product-a.ts   # Configuração Product A
│   ├── product-b.ts   # Configuração Product B
│   └── index.ts       # Exports
└── index.ts           # Seletor baseado em env
```

### Configuração de um Produto

```typescript
// src/config/products/product-a.ts
export const productA: ProductConfig = {
  // Identidade
  id: "product-a",
  name: "Product A",
  title: "Product A - Dashboard",
  description: "Descrição do produto",
  tagline: "Seu slogan aqui",

  // Assets
  logo: "/logos/product-a.svg",
  favicon: "/favicons/product-a.ico",
  ogImage: "/og/product-a.png",

  // Tema (cores em HSL sem hsl())
  theme: {
    light: {
      primary: "223 73% 47%", // #2152cf
      primaryForeground: "0 0% 100%",
      secondary: "198 100% 61%", // #36c2ff
      // ... outras cores
      gradientPrimary:
        "linear-gradient(135deg, hsl(223 73% 47%), hsl(198 100% 61%))",
    },
    dark: {
      primary: "223 73% 57%", // Mais claro para dark mode
      // ... outras cores
    },
  },

  // Feature flags
  features: {
    darkMode: true,
    analytics: true,
    newsletter: true,
    socialLogin: false,
  },

  // URLs
  urls: {
    api: "https://api.product-a.com",
    docs: "https://docs.product-a.com",
    support: "https://support.product-a.com",
  },

  // SEO
  seo: {
    keywords: ["dashboard", "productivity"],
    author: "Product A Team",
  },
};
```

### Usando em Componentes

```tsx
"use client";

import { useProduct } from "@/components/product-provider";

export function MyComponent() {
  const { product, theme } = useProduct();

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.tagline}</p>

      {product.features.newsletter && <NewsletterForm />}
    </div>
  );
}
```

### Adicionando um Novo Produto

1. **Crie o arquivo de configuração:**

```typescript
// src/config/products/product-c.ts
import type { ProductConfig } from "./types";

export const productC: ProductConfig = {
  id: "product-c",
  name: "Product C",
  // ... configuração completa
};
```

2. **Registre no index:**

```typescript
// src/config/products/index.ts
export { productC } from "./product-c";
```

3. **Adicione ao seletor:**

```typescript
// src/config/index.ts
import { productC } from "./products/product-c";

const products: Record<string, ProductConfig> = {
  "product-a": productA,
  "product-b": productB,
  "product-c": productC,
};
```

4. **Atualize a tipagem:**

```typescript
// src/types/env.d.ts
readonly NEXT_PUBLIC_PRODUCT: "product-a" | "product-b" | "product-c";
```

5. **Adicione scripts (opcional):**

```json
// package.json
"dev:product-c": "NEXT_PUBLIC_PRODUCT=product-c next dev",
"build:product-c": "NEXT_PUBLIC_PRODUCT=product-c next build"
```

### Conversão de Cores HEX para HSL

Para converter cores HEX para o formato HSL usado no tema:

| HEX       | HSL            |
| --------- | -------------- |
| `#2152cf` | `223 73% 47%`  |
| `#36c2ff` | `198 100% 61%` |
| `#22c55e` | `142 76% 46%`  |
| `#8b5cf6` | `252 87% 66%`  |

> **Dica**: Use ferramentas como [HSL Color Picker](https://hslpicker.com/) para converter cores.

## 🎨 Adicionando Componentes shadcn/ui

Este template já vem com alguns componentes configurados. Para adicionar mais:

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# etc.
```

Veja todos os componentes disponíveis em [ui.shadcn.com](https://ui.shadcn.com/docs/components)

## 💅 Usando Sass com Tailwind

Este template permite usar Sass em conjunto com Tailwind CSS. A arquitetura é:

- `globals.css` → Configuração do Tailwind CSS v4 (deve permanecer como .css)
- `main.scss` → Estilos customizados com Sass

### Estrutura Sass

```
src/styles/
├── _variables.scss    # Breakpoints, z-index, durações
├── _mixins.scss       # Mixins (breakpoint, flex-center, transition, etc.)
├── _functions.scss    # Funções (rem, em, percentage)
├── _index.scss        # Barrel export
├── main.scss          # Ponto de entrada principal
└── components/        # Estilos de componentes
```

### Exemplo de uso em componentes

```scss
// MeuComponente.scss
@use "../../styles/variables" as *;
@use "../../styles/mixins" as *;
@use "../../styles/functions" as *;

.meu-componente {
  padding: rem(24);
  @include transition(all, $duration-normal);

  @include breakpoint("md") {
    padding: rem(32);
  }

  &__titulo {
    color: hsl(var(--foreground));
  }
}
```

```tsx
// MeuComponente.tsx
import "./MeuComponente.scss";

export function MeuComponente() {
  return (
    <div className="meu-componente">
      <h2 className="meu-componente__titulo">Título</h2>
    </div>
  );
}
```

### Mixins disponíveis

| Mixin                                   | Descrição                                    |
| --------------------------------------- | -------------------------------------------- |
| `breakpoint($size)`                     | Media query responsiva (sm, md, lg, xl, 2xl) |
| `breakpoint-down($size)`                | Media query max-width                        |
| `flex-center`                           | Centraliza com flexbox                       |
| `flex-between`                          | Space-between com flexbox                    |
| `transition($prop, $duration, $easing)` | Transição suave                              |
| `text-truncate`                         | Trunca texto com ellipsis                    |
| `text-clamp($lines)`                    | Limita texto a N linhas                      |
| `focus-ring`                            | Anel de foco acessível                       |
| `visually-hidden`                       | Esconde visualmente (acessível)              |

### Funções disponíveis

| Função          | Descrição                    |
| --------------- | ---------------------------- |
| `rem($px)`      | Converte pixels para rem     |
| `em($px)`       | Converte pixels para em      |
| `hsl-var($var)` | Cria cor HSL de variável CSS |

## 🌙 Dark Mode

O dark mode já está configurado com `next-themes`. Use o componente `ThemeToggle` para alternar entre temas, ou acesse o tema programaticamente:

```tsx
import { useTheme } from "next-themes";

const { theme, setTheme } = useTheme();
```

## 📝 Licença

MIT License - sinta-se livre para usar em projetos pessoais ou comerciais.

---

Feito com ❤️ usando Next.js e Tailwind CSS
