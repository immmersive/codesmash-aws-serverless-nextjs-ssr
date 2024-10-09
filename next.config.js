const version = process.env.BUILD_VERSION;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.cloudfront : '',
  images: {
    unoptimized: true,
  },
};

// Use ES module export
export default nextConfig;
