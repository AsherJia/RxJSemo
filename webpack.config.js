const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, './src/index.js')
        ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2']
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, './dist'),
        compress: true, // enable gzip compression
        port: 9000
    },
    plugins: [
         new HtmlWebpackPlugin({
            template: path.join(__dirname, './template.html')
        })
    ]
}
