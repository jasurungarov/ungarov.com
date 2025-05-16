// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
//   experimental: {
//     fontLoaders: [
//       {
//         loader: '@next/font/google',
//         options: { timeout: 15000 } // Increased timeout to 15 seconds
//       }
//     ]
//   }
// };

// module.exports = nextConfig;


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
