const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

module.exports = {
  distDir: "build",
  basePath,
  assetPrefix: `${basePath}/`
};