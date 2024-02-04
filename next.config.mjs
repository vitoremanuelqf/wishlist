/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.netshoes.com.br',
      },
    ],
  },
}

export default nextConfig
