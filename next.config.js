/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  allowedDevOrigins: ['172.18.25.98'],
};

module.exports = nextConfig;
