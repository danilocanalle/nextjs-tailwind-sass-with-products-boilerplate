// =============================================================================
// MAIN CONFIG - PRODUCT SELECTOR
// =============================================================================

import { productA } from "./products/product-a";
import { productB } from "./products/product-b";
import type { ProductConfig } from "./products/types";

// Available products
const products: Record<string, ProductConfig> = {
  "product-a": productA,
  "product-b": productB,
};

// Get product ID from environment variable
const productId = process.env.NEXT_PUBLIC_PRODUCT || "product-a";

// Validate product exists
if (!products[productId]) {
  console.warn(
    `Product "${productId}" not found. Falling back to "product-a".`
  );
}

// Export the active product configuration
export const config: ProductConfig = products[productId] || productA;

// Export product ID for reference
export const currentProductId = productId;

// Export all products for reference (useful for admin/switching)
export const availableProducts = products;

// Re-export types
export type {
  ProductConfig,
  ProductTheme,
  ProductThemeConfig,
} from "./products/types";
