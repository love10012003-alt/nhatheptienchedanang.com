/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 'images.unsplash.com' }, { hostname: 'lh3.googleusercontent.com' }, { hostname: 'picsum.photos' }],
    formats: ['image/avif','image/webp']
  },
  experimental: { serverActions: { allowedOrigins: ['*'] } }
}
module.exports = nextConfig
