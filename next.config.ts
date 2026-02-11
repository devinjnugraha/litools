import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out/litools",
  basePath: "/litools",
  assetPrefix: "/litools",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
