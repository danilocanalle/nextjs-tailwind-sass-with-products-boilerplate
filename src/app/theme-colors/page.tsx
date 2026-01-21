"use client";

import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ThemeColorsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Visualizador de Cores do Tema
              </h1>
              <p className="text-muted-foreground mt-2">
                Visualize todas as cores do ProductTheme em elementos reais
              </p>
            </div>
            <Link href="/">
              <Button variant="outline">← Voltar para Home</Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Color Palette Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Paleta de Cores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary */}
            <Card>
              <CardHeader>
                <CardTitle>Primary</CardTitle>
                <CardDescription>Cor primária da marca</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-semibold">
                      Primary
                    </span>
                  </div>
                  <div className="h-12 rounded-lg bg-primary/90 flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">
                      Primary 90%
                    </span>
                  </div>
                  <div className="h-12 rounded-lg bg-primary/80 flex items-center justify-center">
                    <span className="text-primary-foreground text-sm">
                      Primary 80%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secondary */}
            <Card>
              <CardHeader>
                <CardTitle>Secondary</CardTitle>
                <CardDescription>Cor secundária da marca</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-secondary flex items-center justify-center">
                    <span className="text-secondary-foreground font-semibold">
                      Secondary
                    </span>
                  </div>
                  <div className="h-12 rounded-lg bg-secondary/90 flex items-center justify-center">
                    <span className="text-secondary-foreground text-sm">
                      Secondary 90%
                    </span>
                  </div>
                  <div className="h-12 rounded-lg bg-secondary/80 flex items-center justify-center">
                    <span className="text-secondary-foreground text-sm">
                      Secondary 80%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accent */}
            <Card>
              <CardHeader>
                <CardTitle>Accent</CardTitle>
                <CardDescription>Cor de destaque</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-semibold">
                      Accent
                    </span>
                  </div>
                  <div className="h-12 rounded-lg bg-accent/90 flex items-center justify-center border">
                    <span className="text-accent-foreground text-sm">
                      Accent 90%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Destructive */}
            <Card>
              <CardHeader>
                <CardTitle>Destructive</CardTitle>
                <CardDescription>Cor de erro/perigo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-destructive flex items-center justify-center">
                    <span className="text-destructive-foreground font-semibold">
                      Destructive
                    </span>
                  </div>
                  <div className="h-12 rounded-lg bg-destructive/90 flex items-center justify-center">
                    <span className="text-destructive-foreground text-sm">
                      Destructive 90%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warning */}
            <Card>
              <CardHeader>
                <CardTitle>Warning</CardTitle>
                <CardDescription>Cor de aviso/alerta</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-warning flex items-center justify-center">
                    <span className="text-warning-foreground font-semibold">
                      Warning
                    </span>
                  </div>
                  <div className="h-12 rounded-lg bg-warning/90 flex items-center justify-center">
                    <span className="text-warning-foreground text-sm">
                      Warning 90%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Info */}
            <Card>
              <CardHeader>
                <CardTitle>Info</CardTitle>
                <CardDescription>Cor informativa</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-info flex items-center justify-center">
                    <span className="text-info-foreground font-semibold">
                      Info
                    </span>
                  </div>
                  <div className="h-12 rounded-lg bg-info/90 flex items-center justify-center">
                    <span className="text-info-foreground text-sm">
                      Info 90%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Success */}
            <Card>
              <CardHeader>
                <CardTitle>Success</CardTitle>
                <CardDescription>Cor de sucesso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-success flex items-center justify-center">
                    <span className="text-success-foreground font-semibold">
                      Success
                    </span>
                  </div>
                  <div className="h-12 rounded-lg bg-success/90 flex items-center justify-center">
                    <span className="text-success-foreground text-sm">
                      Success 90%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Muted */}
            <Card>
              <CardHeader>
                <CardTitle>Muted</CardTitle>
                <CardDescription>Cor atenuada</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-muted flex items-center justify-center border">
                    <span className="text-muted-foreground font-semibold">
                      Muted
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Background & Foreground */}
            <Card>
              <CardHeader>
                <CardTitle>Background & Foreground</CardTitle>
                <CardDescription>Cores base</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="h-20 rounded-lg bg-background border flex items-center justify-center">
                    <span className="text-foreground font-semibold">
                      Background
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Botões</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-4">
                <Button variant="default">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="destructive">Destructive Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="link">Link Button</Button>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button variant="default" size="sm">
                  Small Button
                </Button>
                <Button variant="default" size="lg">
                  Large Button
                </Button>
                <Button variant="default" size="icon">
                  →
                </Button>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Button variant="default" disabled>
                  Disabled Primary
                </Button>
                <Button variant="secondary" disabled>
                  Disabled Secondary
                </Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badges Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Badges</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-4">
                <Badge variant="default">Default Badge</Badge>
                <Badge variant="secondary">Secondary Badge</Badge>
                <Badge variant="destructive">Destructive Badge</Badge>
                <Badge variant="outline">Outline Badge</Badge>
              </div>
              <div className="flex flex-wrap gap-4 mt-4">
                <Badge className="bg-warning text-warning-foreground">
                  Warning Badge
                </Badge>
                <Badge className="bg-info text-info-foreground">
                  Info Badge
                </Badge>
                <Badge className="bg-success text-success-foreground">
                  Success Badge
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Cards & Containers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  Esta é uma descrição do card usando text-muted-foreground
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground">
                  Conteúdo do card com a cor card-foreground. Aqui você pode
                  visualizar como o texto aparece dentro de um card.
                </p>
              </CardContent>
              <CardFooter className="border-t">
                <Button variant="default">Action Button</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="border-b">
                <CardTitle>Card com Border</CardTitle>
                <CardDescription>Border color em ação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg border border-border bg-muted">
                    <p className="text-sm text-muted-foreground">
                      Elemento com background muted e border
                    </p>
                  </div>
                  <div className="p-4 rounded-lg border-2 border-primary">
                    <p className="text-sm">Elemento com border primary</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card">
              <CardHeader>
                <CardTitle>Popover Colors</CardTitle>
                <CardDescription>Simulação de popover</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg bg-popover text-popover-foreground border shadow-lg">
                  <p className="font-semibold mb-2">Popover Content</p>
                  <p className="text-sm">
                    Este elemento usa as cores bg-popover e
                    text-popover-foreground
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Interactive Elements</CardTitle>
                <CardDescription>Hover e focus states</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <button className="w-full p-3 rounded-lg hover:bg-accent hover:text-accent-foreground border text-left transition-colors">
                    Hover me (accent colors)
                  </button>
                  <button className="w-full p-3 rounded-lg hover:bg-muted border text-left transition-colors">
                    Hover me (muted)
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Forms Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Formulários
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Form Elements</CardTitle>
              <CardDescription>
                Inputs e outros elementos de formulário
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Input Normal
                  </label>
                  <Input placeholder="Digite algo..." />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Input com foco (ring color)
                  </label>
                  <Input
                    placeholder="Clique para ver o ring color"
                    className="ring-2 ring-ring ring-offset-2 ring-offset-background"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Input Disabled
                  </label>
                  <Input placeholder="Input desabilitado" disabled />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Gradient Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Gradientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="h-32 flex items-center justify-center bg-gradient-primary">
                <span className="text-primary-foreground font-bold text-xl">
                  Gradient Primary
                </span>
              </div>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  Definido como --gradient-primary no tema
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 flex items-center justify-center bg-gradient-hero">
                <span className="text-primary-foreground font-bold text-xl">
                  Gradient Hero
                </span>
              </div>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">
                  Definido como --gradient-hero no tema
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Border Radius Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Border Radius
          </h2>
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div
                    className="h-24 bg-primary flex items-center justify-center text-primary-foreground font-semibold mb-2"
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    Default
                  </div>
                  <p className="text-sm text-muted-foreground">var(--radius)</p>
                </div>
                <div className="text-center">
                  <div className="h-24 bg-secondary flex items-center justify-center text-secondary-foreground font-semibold mb-2 rounded-sm">
                    Small
                  </div>
                  <p className="text-sm text-muted-foreground">rounded-sm</p>
                </div>
                <div className="text-center">
                  <div className="h-24 bg-accent flex items-center justify-center text-accent-foreground font-semibold mb-2 rounded-lg">
                    Large
                  </div>
                  <p className="text-sm text-muted-foreground">rounded-lg</p>
                </div>
                <div className="text-center">
                  <div className="h-24 bg-primary flex items-center justify-center text-primary-foreground font-semibold mb-2 rounded-full">
                    Full
                  </div>
                  <p className="text-sm text-muted-foreground">rounded-full</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Text Colors Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Hierarquia de Texto
          </h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <p className="text-foreground text-lg font-bold">
                text-foreground - Texto principal (grande e bold)
              </p>
              <p className="text-foreground">
                text-foreground - Texto principal normal
              </p>
              <p className="text-muted-foreground">
                text-muted-foreground - Texto secundário ou menos importante
              </p>
              <p className="text-card-foreground">
                text-card-foreground - Texto dentro de cards
              </p>
              <p className="text-popover-foreground bg-popover p-2 rounded inline-block">
                text-popover-foreground - Texto em popovers
              </p>
              <p className="text-primary">
                text-primary - Texto com cor primária
              </p>
              <p className="text-secondary">
                text-secondary - Texto com cor secundária
              </p>
              <p className="text-accent">
                text-accent - Texto com cor de destaque
              </p>
              <p className="text-destructive">
                text-destructive - Texto de erro/perigo
              </p>
              <p className="text-warning">
                text-warning - Texto de aviso/alerta
              </p>
              <p className="text-info">text-info - Texto informativo</p>
              <p className="text-success">text-success - Texto de sucesso</p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
