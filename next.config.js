/** @type {import('next').NextConfig} */
const nextConfig = {
//  output: 'export',
//  output: 'standalone',
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: [
      "images.pexels.com",
      "img.freepik.com",
      "avatars.githubusercontent.com",
      "lh3.googleusercontent.com",
    ],
  },
  distDir: 'build',
};

module.exports = nextConfig;