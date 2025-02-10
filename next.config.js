/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  // Disable automatic static optimization for better hydration handling
  experimental: {
    // This will help with hydration mismatches
    optimizeCss: true,
    // Use React's new streaming SSR architecture
    serverActions: true,
  }
};

module.exports = nextConfig; 