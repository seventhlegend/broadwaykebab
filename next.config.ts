import type { NextConfig } from "next";

const githubPagesBasePath =
  process.env.GITHUB_PAGES === "true" ? "/broadwaykebab" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: githubPagesBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: githubPagesBasePath,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
