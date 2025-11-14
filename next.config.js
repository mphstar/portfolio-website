const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // images: {
  //   unoptimized: true,
  // },
  images: {
    remotePatterns: [
      {
        hostname: "i.scdn.co",
      },
      {
        hostname: "media.tenor.com"
      },
      {
        hostname: "cdn.discordapp.com"
      }
    ],
  },
};

module.exports = nextConfig;
