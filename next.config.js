/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable App Router
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone',
};

module.exports = nextConfig;
