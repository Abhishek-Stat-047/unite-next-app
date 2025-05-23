import type { NextConfig } from "next";

import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});
const isDocker = process.env.BUILD_ENV === "docker";
const nextConfig: NextConfig = {
    turbopack: {},
    images: {
        dangerouslyAllowSVG: true,
    },
    output: isDocker ? "standalone" : undefined,
    distDir: process.env.OUTPUT_DIR || ".next",
};

module.exports = withBundleAnalyzer(nextConfig);
