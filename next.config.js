/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'raw.githubusercontent.com', 'avatars.githubusercontent.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig 