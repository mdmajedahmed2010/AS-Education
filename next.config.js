/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'scontent.xx.fbcdn.net', 'static.xx.fbcdn.net'],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
