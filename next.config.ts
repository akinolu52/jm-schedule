import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for GitHub Pages (Static Site Generation)
  basePath: "/jm-schedule", // Required for GitHub Pages project site
  images: {
    unoptimized: true, // Required as GitHub Pages doesn't support Next.js Image Optimization
  },
};

export default nextConfig;
