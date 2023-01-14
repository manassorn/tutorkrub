const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [ 
    // new WebpackShellPluginNext({
    //   onBuildEnd: {
    //     scripts:['cp -r public/assets dist/assets',
    //   'cp public/index.html dist/index.html']
    //   }
    // }),

  ],
});
