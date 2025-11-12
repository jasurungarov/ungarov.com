// module.exports = nextConfig;
/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
};


const nextConfig = {
  // Statik eksport qilish uchun (SSG) — SEO uchun yaxshi
  output: 'export',

  eslint: {
    ignoreDuringBuilds: true, // Build paytida ESLint xatolarini e'tiborsiz qoldirish
  },

  images: {
    unoptimized: true, // Tashqi rasm linklari (Pexels kabi) uchun
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Pexels rasm hosti
        pathname: '/**', // Barcha yo'llarni qamrab oladi
      },
    ],
  },

  reactStrictMode: true, // React xatolarini aniqlash va optimallashtirish
  swcMinify: true,        // JS va TS kodini tezroq minify qilish

  // Agar kelajakda header yoki rewrites qo'shmoqchi bo'lsangiz, bu joyga yozishingiz mumkin
  // headers: async () => [],
  // rewrites: async () => [],
};

module.exports = nextConfig;
