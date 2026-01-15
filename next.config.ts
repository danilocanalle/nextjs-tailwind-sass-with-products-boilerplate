import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    apiClient: process.env.NEXT_PUBLIC_API_CLIENT,
  },
};

export default nextConfig;
