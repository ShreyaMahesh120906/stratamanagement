// next.config.js
module.exports = {
  reactStrictMode: true, 
  typescript: {
    ignoreBuildErrors: false, 
  },
  webpack(config, { dev }) {
    
    return config;
  },
};
