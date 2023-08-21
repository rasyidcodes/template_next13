/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    trailingSlash: true,
    reactStrictMode: true,
    images: {
      loader: 'custom',
      path: 'localhost:5050/2023/porsenigama',
      loaderFile: './components/loader.js',
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'localhost:5050',
          port: '',
        },
        {
          protocol: 'https',
          hostname: 'drive.google.com',
          port: '',
        },
      ],
    },
    async rewrites() {
      return [
        {
          source: '/palapedia/coming-soon',
          destination: '/coming-soon',
        },
      ]
    },
  }
  
  module.exports = nextConfig
  