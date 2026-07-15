/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/okna/kalininkiy",
        destination: "/okna/kalininskiy",
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
