/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { domains: ['images.unsplash.com', 'lh3.googleusercontent.com'] },
  experimental: { serverActions: { allowedOrigins: ['*'] } }
}
module.exports = nextConfig
