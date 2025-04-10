/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'localhost', 'yourgymwebsite.com', 'maps.google.com', 'cdn.jsdelivr.net'],
  },
};

module.exports = nextConfig;