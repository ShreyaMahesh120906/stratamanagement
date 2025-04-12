// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false, // or true temporarily if needed
  },
  webpack(config, { dev }) {
    // Customize webpack if needed
    return config;
  },
};

module.exports = nextConfig;
