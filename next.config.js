const version = process.env.BUILD_VERSION;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  assetPrefix: process.env.CLOUDFRONT === 'production' ? process.env.CLOUDFRONT : '',
  images: {
    unoptimized: true,
  },
};

// Use ES module export
export default nextConfig;
