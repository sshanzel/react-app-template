const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    target: 'web',
    devtool: 'cheap-module-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        stats: 'minimal',
        overlay: true,
        historyApiFallback: true,
        disableHostCheck: true,
        headers: { 'Access-Control-Allow-Origin': '*' },
        https: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
            // favicon: 'src/favicon.ico'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader']
            },
            {
                test: /(\.css)$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loaders: ['react-hot-loader/webpack', 'eslint-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    externals: {
        Config: JSON.stringify(
            process.env.ENV === 'development' ?
                {
                    serverUrl: 'https://localhost:44336',
                    siteURL: 'http://localhost:3000/'
                } : { serverUrl: '' }
        )
    }
};
