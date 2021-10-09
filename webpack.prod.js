const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPlugin = require('./webpack/WebpackShellPlugin')
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = merge(common, {
  mode: 'production',
  plugins: [ 
    new WebpackShellPluginNext({ 
      onBuildEnd: ['cp -r assets dist/assets',
      'cp index.html dist/index2.html'] }),

  ],
});
