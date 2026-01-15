# Next.js + Tailwind CSS Template 🚀

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
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
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

| Comando               | Descrição                                         |
| --------------------- | ------------------------------------------------- |
| `npm run dev`         | Inicia o servidor de desenvolvimento              |
| `npm run build`       | Cria a build de produção                          |
| `npm run start`       | Inicia o servidor de produção                     |
| `npm run lint`        | Executa o ESLint                                  |
| `npm run lint:fix`    | Corrige problemas do ESLint automaticamente       |
| `npm run update:deps` | Atualiza todas as dependências para última versão |

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
NEXT_PUBLIC_API_URL=https://sua-api.com
```

> **Nota**: Variáveis que precisam ser acessadas no cliente devem ter o prefixo `NEXT_PUBLIC_`.

As variáveis são tipadas em `src/types/env.d.ts`.

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
