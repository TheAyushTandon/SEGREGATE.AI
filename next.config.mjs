/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['blob.v0.dev'],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/about-awareness',
      },
      {
        source: '/awareness',
        destination: '/about-awareness',
      },
      {
        source: '/app',
        destination: '/app-team',
      },
      {
        source: '/team',
        destination: '/app-team',
      },
    ]
  },
}

export default nextConfig
