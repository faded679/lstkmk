import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Оптимизации для скорости
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Экспериментальные фичи для оптимизации
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "@phosphor-icons/react"],
  },
};

export default nextConfig;
