import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export', // Statik export için
  trailingSlash: true,
  distDir: 'out',
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for better performance
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'popmenucloud.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: true, // Statik build için gerekli
  },
  
  // Enable compression
  compress: true,
  
  // Remove powered-by header for security
  poweredByHeader: false,
  
  // Static file serving
  assetPrefix: '',
  
  // Performance and bfcache optimizations
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: ['lucide-react'],
    // Remove any server-side features
  },
  
  // Webpack configuration for better static builds
  webpack: (config, { isServer }) => {
    // Optimize for static builds
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  
  // Static export headers'ları desteklemez, bu yüzden headers() kaldırıldı
  // Headers web sunucusu tarafında yapılandırılmalı (.htaccess, nginx.conf vb.)
};

export default nextConfig;
