import type { NextConfig } from "next";
import NextBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = NextBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
});
const nextConfig: NextConfig = {
    turbopack: {},
    images: {
        dangerouslyAllowSVG: true,
    },
    distDir: process.env.OUTPUT_DIR || ".next",
};

module.exports = withBundleAnalyzer(nextConfig);
