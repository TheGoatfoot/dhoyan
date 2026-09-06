import type { NextConfig } from "next";

// GitHub Pages repository deployment configuration
const isProd = process.env.NODE_ENV === "production";
const repoName = "dhoyan";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isProd ? `/${repoName}` : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
