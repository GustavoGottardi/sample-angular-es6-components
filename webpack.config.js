const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/app.js',
    output: {
        path: './',
        filename: 'app-bundle.js'
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({template: './app/index.html'}),
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            { 
                test: /\.(png|jpg)$/, 
                loader: 'url-loader?limit=8192'
            },
            { 
                test: /\.html$/, 
                loader: 'raw' 
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    devtool: 'source-map'
};
