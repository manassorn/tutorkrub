const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('./webpack/WebpackShellPlugin')
const exec = require('child_process').exec;

module.exports = merge(common, {
  mode: 'production',
  plugins: [ 
    new WebpackShellPlugin({ 
      onBuildStart: ['echo "hello world"'], 
      onBuildEnd: ['cp -r assets dist/assets',
      'cp index.html dist/index2.html'] }),

  ],
});
