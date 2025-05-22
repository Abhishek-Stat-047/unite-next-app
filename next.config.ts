import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  images: {
    dangerouslyAllowSVG: true,
  },
  distDir: process.env.OUTPUT_DIR || ".next",
};

// Only apply bundle analyzer when explicitly enabled
// This prevents webpack from being loaded when using Turbopack
let configWithAnalyzer = nextConfig;

if (process.env.ANALYZE === "true") {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });

  configWithAnalyzer = withBundleAnalyzer(nextConfig);
}

module.exports = configWithAnalyzer;
