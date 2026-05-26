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
};

export default nextConfig;