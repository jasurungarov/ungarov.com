/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Agar boshqa experimental sozlamalar kerak bo'lmasa, bu bo‘limni olib tashlash mumkin
};

module.exports = nextConfig;
