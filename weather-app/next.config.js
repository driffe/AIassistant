/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://api.example.com/:path*',
        },
      ]
    },
};
const withPWA = require('next-pwa')({
  dest: 'public'
})


module.exports = withPWA(nextConfig)
