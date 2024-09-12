const version = process.env.BUILD_VERSION;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  assetPrefix: process.env.NODE_ENV === 'production'
  ? 'https://codesmash-aws-serverless-web-ssr.s3.us-east-2.amazonaws.com'
  : '',
  images: {
    unoptimized: true,
  },
};

// Use ES module export
export default nextConfig;
