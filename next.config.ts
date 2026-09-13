import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    qualities: [75, 90, 95],
  },
  /** Apex-domein permanent naar www (pad behouden) */
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "huisartsenpraktijksemmerzake.be" }],
        destination: "https://www.huisartsenpraktijksemmerzake.be/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
