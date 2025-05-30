import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // domains: ["images.unsplash.com", "tailwindcomponents.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "tailwindcomponents.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
