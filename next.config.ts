import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    useCache: true,
    viewTransition: true,
    useLightningcss: false,
  },
  generateEtags: true,
  compress: true,
  cleanDistDir: true,
  reactStrictMode: false,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  eslint: {
    /** Only run ESLint on these directories with `next lint` and `next build`. */
    dirs: ["src"],
    /** Do not run ESLint during production builds (`next build`). */
    ignoreDuringBuilds: false,
  },
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
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;
