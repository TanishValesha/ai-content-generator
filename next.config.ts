import type { NextConfig } from "next";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn-icons-png.flaticon.com"],
  },
  /* config options here */
};

export default nextConfig;
