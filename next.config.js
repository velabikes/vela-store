const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  target: "serverless",
};

module.exports = withBundleAnalyzer(nextConfig);

module.exports = {
  publicRuntimeConfig: {
    imageFolderPath: "/velax/image-scroll-1",
  },
};
