const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // static export
  basePath: isProd ? '/REPO-ADI' : '',
  assetPrefix: isProd ? '/REPO-ADI/' : '',
};
