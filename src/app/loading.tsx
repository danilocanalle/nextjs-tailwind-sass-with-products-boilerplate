// =============================================================================
// LOADING STATE
// =============================================================================
// This component is shown while the page content is loading.
// It uses CSS variables from the product theme for consistent styling.

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-muted" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-primary" />
        </div>

        {/* Loading text */}
        <p className="text-sm text-muted-foreground">Carregando...</p>
      </div>
    </div>
  );
}
