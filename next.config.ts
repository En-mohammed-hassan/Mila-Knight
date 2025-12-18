import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Avoid accidental workspace-root inference when multiple lockfiles exist on disk.
    root: __dirname,
  },
};

export default nextConfig;
