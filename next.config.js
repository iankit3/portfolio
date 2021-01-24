const isNetlify = process.env.NETLIFY == true ? true : false;
const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

module.exports = {
  distDir: "build",
  basePath,
  assetPrefix: `${basePath}/`,
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};
