/** @type {import('next').NextConfig} */
const nextConfig = { transpilePackages: ["@repo/ui","@repo/database","@repo/cache","@repo/seo","@repo/security","@repo/types"] };
module.exports = nextConfig;
