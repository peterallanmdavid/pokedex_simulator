var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: __dirname + '/index.js',
    output: {
        path: __dirname + '/build/',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.ts', '.js'],
    },
    module: {
        loaders: [
            {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    loaders: ['babel'],
            },
            {
                test: /\.css$/,
                loader: 'style!css',
            },
            {
                test: /\.woff2?(.*)$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.ttf(.*)$/,
                loader: 'file-loader',
            },
            {
                test: /\.eot(.*)$/,
                loader: 'file-loader',
            },
            {
                test: /\.svg(.*)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(json|geojson)$/,
                loader: 'json-loader',
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'url-loader',
            },
        ],
    },
    devtool: '#inline-source-map',
    devServer: {
        contentBase: __dirname + '/app',
        port: 3000,
    },
}
