/** @type {import('next').NextConfig} */
const nextConfig = {
    // Performance optimizations
    compress: true,
    poweredByHeader: false,

    // Experimental features for better performance
    experimental: {
      optimizePackageImports: [
        '@tabler/icons-react',
        'lucide-react',
        'react-icons',
        'framer-motion',
        '@radix-ui/react-accordion',
        '@radix-ui/react-dialog',
        '@radix-ui/react-slot'
      ],
    },

    webpack: (config, { dev, isServer }) => {
      // SVG handling
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      // Production optimizations
      if (!dev && !isServer) {
        config.optimization.splitChunks = {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            animations: {
              test: /[\\/]node_modules[\\/](framer-motion|gsap|lenis)[\\/]/,
              name: 'animations',
              chunks: 'all',
              priority: 20,
            },
            ui: {
              test: /[\\/]node_modules[\\/](@radix-ui|@tabler|lucide-react)[\\/]/,
              name: 'ui',
              chunks: 'all',
              priority: 15,
            },
            particles: {
              test: /[\\/]node_modules[\\/](@tsparticles|@splinetool|lottie)[\\/]/,
              name: 'particles',
              chunks: 'all',
              priority: 5,
            },
          },
        };

        // Tree shaking optimizations
        config.optimization.usedExports = true;
        config.optimization.sideEffects = false;
      }

      return config;
    },

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**',
        },
      ],
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60,
    },
  };

  export default nextConfig;
  
