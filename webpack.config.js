const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const METADATA = {
    baseUrl: '/',
    host: 'localhost',
    port: 3000
};

module.exports = {
    metadata: METADATA,
    devtool: 'source-map',
    debug: true,

    entry: {
        'main': './src/main.ts'
    },

    output: {
        path: 'dist',
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    resolve: {
        extensions: ['', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },

            { test: /\.css$/, loader: 'raw-loader' },

            { test: /\.html$/, loader: 'raw-loader', exclude: ['index.html'] }
        ]
    },

    plugins: [
        new ForkCheckerPlugin(),
        new HtmlWebpackPlugin({ template: './index.html', chunksSortMode: 'none', filename: 'index.html' })
    ],

    devServer: {
        port: METADATA.port,
        host: METADATA.host,
        // contentBase: 'src/',
        historyApiFallback: true,
        watchOptions: { aggregateTimeout: 300, poll: 1000 }
    }
};