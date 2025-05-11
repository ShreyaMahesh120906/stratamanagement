/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  output: 'standalone', // ✅ Enables proper deployment for Edge Functions on Vercel
  webpack(config, { dev }) {
    return config;
  },
};

module.exports = nextConfig;
