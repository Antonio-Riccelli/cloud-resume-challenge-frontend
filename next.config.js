/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // distDir: 'dist',
  output: 'out',
  experimental: {
    images: {
      unoptimized: true,
    },
  },

}

module.exports = nextConfig
