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
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.lstkmk.ru" }],
        destination: "https://lstkmk.ru/:path*",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
