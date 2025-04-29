/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Remove static export settings
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'dist',
}

module.exports = nextConfig 