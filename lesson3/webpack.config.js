const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        pageA: './pageA.js',
        pageB: './pageB.js',
        vendor: ['lodash', 'jquery'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.[hash:5].js',
        chunkFilename: '[name].chunk.[hash:5].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2,
            // minChunks: Infinity,
            chunks: ['pageA', 'pageB'],
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'manifest'],
            // minChunks: 2,
            minChunks: Infinity,
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'manifest',
        //     // minChunks: 2,
        //     minChunks: Infinity,
        // })
    ]
}