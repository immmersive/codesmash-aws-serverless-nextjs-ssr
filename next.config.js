const version = process.env.BUILD_VERSION;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", 
  //assetPrefix: `https://this-is-for-nextjs-ssr.s3.amazonaws.com/`,
  images: {
    unoptimized: true,
  },
};

// Use ES module export
export default nextConfig;
