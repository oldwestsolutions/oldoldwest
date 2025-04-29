/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true, // Enable this for static exports
  },
  output: 'export', // Enable static exports
  trailingSlash: true, // Add trailing slashes to URLs
  distDir: 'dist', // Change the output directory
}

module.exports = nextConfig 