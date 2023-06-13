/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // distDir: 'dist',
  output: 'export',
  experimental: {
    images: {
      unoptimized: true,
    },
  },

}

module.exports = nextConfig
