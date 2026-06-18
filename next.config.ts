import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
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
  // Webpack оптимизации
  webpack: (config, { dev, isServer }) => {
    // Разделение чанков для лучшего кэширования
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          common: {
            minChunks: 2,
            chunks: "all",
            enforce: true,
          },
        },
      };
    }
    return config;
  },
  // Экспериментальные фичи для оптимизации
  serverExternalPackages: ["better-sqlite3"],
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "@phosphor-icons/react"],
  },
};

export default nextConfig;
