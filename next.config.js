/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    // providing the locales supported by your application
    locales: ["en", "ru", "uz"],

    //  default locale used when the non-locale paths are visited
    defaultLocale: "ru",
  },
  reactStrictMode: true,
  images: {
    domains: ['assets.reqres.in', "youtube.com"],
    swcMinify: false, // it should be false by default 
  },


}

module.exports = nextConfig
