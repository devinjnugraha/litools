import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out/litools",
  basePath: "/litools",
  assetPrefix: "/litools",
};

export default nextConfig;
