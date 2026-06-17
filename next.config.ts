import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Оптимизации для скорости
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Экспериментальные фичи для оптимизации
  serverExternalPackages: ["better-sqlite3"],
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "@phosphor-icons/react"],
  },
};

export default nextConfig;
