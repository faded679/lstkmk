/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: ".next",
  trailingSlash: true,
  images: {
    formats: ["image/webp"],
    unoptimized: false,
  },
  experimental: {
    streamingMetadata: false,
  },
};
export default nextConfig;
