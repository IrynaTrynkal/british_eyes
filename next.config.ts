import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
    experimental: {
        serverActions: { bodySizeLimit: "2mb" },
    },
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
