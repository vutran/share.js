var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        // load the web-dev-server
        'webpack/hot/dev-server',
        // load the entry point for webpack to bundle
        './src/index.js'
    ],
    // Create the bundle output file
    output: {
        path: path.join( __dirname, 'dist'),
        filename: "share.min.js"
    },
    // web-dev-server configs
    devServer: {
        // noInfo: true,
        contentBase: __dirname,
        hot: true
    },
    module: {
        loaders: [
            // apply react-hot-loader, babel to js files
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/,
                include: path.join(__dirname, 'src')
            },
            // apply html-loader to html files
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }
};
