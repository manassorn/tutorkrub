const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

const config = {
  entry: [
        './src/index.js'
    ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
            },
            {
              test: /\.s[ac]ssaa$/i,
              use: [
                      // Creates `style` nodes from JS strings
                      "style-loader",
                      // Translates CSS into CommonJS
                      "css-loader",
                      // Compiles Sass to CSS
                      "sass-loader",
                    ],
            },
      {
        // Preprocess your css files
        // you can add additional loaders here (e.g. sass/less etc.)
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
            }
        ]
  },
  resolve: {
    extensions: [
            '.js',
            '.jsx'
        ],
    modules: [
            'node_modules',
            path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
        ]
  },
  resolveLoader: {
    modules: [
            'node_modules',
            path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
        ]
  },
    // plugins: [
    //     new CopyPlugin({
    //         patterns: [
    //             { from: "assets", to: "assets" },
    //         ],
    //     }),
    // ]
};

module.exports = config;