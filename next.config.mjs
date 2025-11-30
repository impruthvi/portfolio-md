/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.impruthvi.me'
      }
    ]
  },
  // Enable compression
  compress: true,
  // Optimize production builds
  swcMinify: true,
  // Strict mode for better debugging
  reactStrictMode: true,
  // Power settings for better performance
  poweredByHeader: false,
  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons']
  }
};

export default nextConfig;
