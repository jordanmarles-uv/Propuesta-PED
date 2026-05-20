import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;
let repo = "";
if (isGithubActions) {
  // Cuando se compila en GitHub Actions, configuramos el basePath al nombre del repo
  repo = "/Propuesta-PED";
}

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo || "",
  assetPrefix: repo || "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
