import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "standalone", // Временно отключено из-за бага с рендерингом
  distDir: ".next",
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 86400, // 1 день кэширования
  },
  // Оптимизации для скорости
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Turbopack оптимизации (замена webpack)
  turbopack: {
    // Turbopack имеет встроенное разделение чанков
  },
  // Экспериментальные фичи временно отключены
  // serverExternalPackages: ["better-sqlite3"],
  // experimental: {
  //   optimizeCss: true,
  //   optimizePackageImports: ["framer-motion", "@phosphor-icons/react"],
  // },
};

export default nextConfig;
