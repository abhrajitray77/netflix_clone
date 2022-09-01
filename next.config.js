/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['image.tmdb.org',
               'rb.gy', 
               'assets.nflxext.com'],
    dangerouslyAllowSVG: true,

  },
}

module.exports = nextConfig
