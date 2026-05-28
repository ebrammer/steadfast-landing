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
      {
        source: "/auth/recovery/",
        destination: "/auth/recovery",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
