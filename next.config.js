/** @type {import('next').NextConfig} */
const path = require("path");
const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config, { isServer }) => {
    config.resolve.alias["~"] = path.join(__dirname, "src");
    return config;
  },
};

module.exports = withNextIntl(nextConfig);
