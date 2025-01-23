/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://avatar.vercel.sh",
      "https://randomuser.me",
      "mighty.tools",
      "via.placeholder.com",
      "cdn.waifu.im",
      "i.pinimg.com",
    ], // Add domains for external images
  },
};

module.exports = nextConfig;
