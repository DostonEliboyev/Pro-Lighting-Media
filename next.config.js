/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.reqres.in', "youtube.com"],
    swcMinify:false, // it should be false by default 
  },
}

module.exports = nextConfig
