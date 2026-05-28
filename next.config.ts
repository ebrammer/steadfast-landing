import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/auth/callback/",
        destination: "/auth/callback",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
