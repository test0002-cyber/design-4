import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove standalone output which causes issues with Cloudflare Pages
  output: undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-ildpppi.nitrocdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tostemindia.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lpimages.b-cdn.net',
        pathname: '/**',
      },
    ],
  },
  // Add export for static generation if needed
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        './node_modules/@swc/core-linux-x64-gnu',
        './node_modules/@swc/core-linux-x64-musl',
        './node_modules/@swc/wasm',
      ]
    }
  }
};

export default nextConfig;