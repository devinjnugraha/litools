import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "out/litools",
  basePath: "/litools",
  trailingSlash: true,
};

export default nextConfig;
