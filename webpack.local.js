const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
      publicPath: '/public'
    },
    port: 9950,
    historyApiFallback: { index: '/public/index.html' },
    proxy: {
      '/api': 'http://localhost:80',
    },
  }
});