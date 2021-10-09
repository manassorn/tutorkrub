const { merge } = require('webpack-merge');
const CopyPlugin = require("copy-webpack-plugin");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [ new CopyPlugin({ patterns: [ { from: "assets", to: "dist/assets2" } ], options: { concurrency: 100, }, }), ],
});
