/** @type {import('next-i18next').NextI18NextConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'en',   // asosiy til
    locales: ['uz', 'ru', 'en', 'ar'], // qo‘llab-quvvatlanadigan tillar
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
