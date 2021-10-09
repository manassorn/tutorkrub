const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const exec = require('child_process').exec;

module.exports = merge(common, {
  mode: 'production',
  plugins: [ 
    { 
      apply: (compiler) => { 
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => { 
          exec('cp -r assets dist/assets', (err, stdout, stderr) => { 
            if (stdout) process.stdout.write(stdout); 
            if (stderr) process.stderr.write(stderr); 
          }); 
        }); 
      } 
    }
  
  ],
});
