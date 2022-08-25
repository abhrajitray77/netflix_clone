/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org', 'rb.gy'],
    dangerouslyAllowSVG: true,

  },
}

module.exports = nextConfig
