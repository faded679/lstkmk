/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  trailingSlash: true,
  images: {
    formats: ["image/webp"],
    unoptimized: false,
  },
  experimental: {
    // Отключаем streaming для стабильности
    streamingMetadata: false,
  },
};
export default nextConfig;
