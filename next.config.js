/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // 
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  webpack(config, { dev }) {
    return config;
  },
};

module.exports = nextConfig;
