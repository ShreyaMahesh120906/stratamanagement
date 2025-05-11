/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: false, // Disable App Router
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone',
};

module.exports = nextConfig;
