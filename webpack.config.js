const webpack = require('webpack');
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
        modules:[
            'node_modules',
            path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
        ]
    },
    resolveLoader: {
        modules:[
            'node_modules',
            path.join(process.env.NPM_CONFIG_PREFIX || __dirname, 'lib/node_modules')
        ]
    },
    devServer: {
        port: 9950,
        
        historyApiFallback: { index: 'dist/index2.html' }
    }
};

module.exports = config;