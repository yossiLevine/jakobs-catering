/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'photos.google.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/menus/:path*',
        headers: [{ key: 'Content-Disposition', value: 'inline' }],
      },
    ]
  },
}

export default nextConfig
