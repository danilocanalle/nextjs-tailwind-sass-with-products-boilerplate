declare namespace NodeJS {
  interface ProcessEnv {
    // Product configuration
    readonly NEXT_PUBLIC_PRODUCT: "product-a" | "product-b";

    // API configuration
    readonly NEXT_PUBLIC_API_CLIENT?: string;
  }
}
