/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  trailingSlash: true,
  images: {
    formats: ["image/webp"],
    unoptimized: false,
  },
  experimental: {
<<<<<<< HEAD
=======
    // Отключаем streaming для стабильности
>>>>>>> cdb6b87 (fix: add Navigation to all knowledge articles)
    streamingMetadata: false,
  },
};
export default nextConfig;
