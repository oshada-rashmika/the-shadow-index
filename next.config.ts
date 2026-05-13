import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopackFileSystemCacheForBuild: true,
  },

  cacheComponents: true,
};

export default nextConfig;
