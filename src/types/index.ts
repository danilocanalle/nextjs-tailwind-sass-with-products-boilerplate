// Add your types here
export type APIResponse = {
  success: boolean;
  message: string;
};

// Global window type for product theme
declare global {
  interface Window {
    __applyProductTheme?: (isDark: boolean) => void;
  }
}
