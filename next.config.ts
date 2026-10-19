import type { NextConfig } from "next";

// GITHUB_PAGES=true builds a static copy of the site for the gh-pages test branch,
// served from https://combat-robotics-yorku.github.io/ClubWebsite/.
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/ClubWebsite" : "";

const nextConfig: NextConfig = {
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isGitHubPages && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
