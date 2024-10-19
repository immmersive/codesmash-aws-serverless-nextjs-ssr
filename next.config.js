const version = process.env.BUILD_VERSION;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://' + process.env.CLOUDFRONT : '',
  images: {
    unoptimized: true,
  },
    experimental: {
      serverActions: {
        allowedForwardedHosts: [
          process.env.HOSTING_API
        ],
        allowedOrigins: [ 
          process.env.CLOUDFRONT
        ]
      }
    }
};

// Use ES module export
export default nextConfig;
