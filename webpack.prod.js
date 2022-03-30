const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WebpackShellPluginNext = require('webpack-shell-plugin-next');

module.exports = merge(common, {
  mode: 'production',
  plugins: [ 
    new WebpackShellPluginNext({ 
      onBuildEnd: {
        scripts:['cp -r public/assets dist/assets',
      'cp public/index.html dist/index.html']
      } 
    }),

  ],
});
