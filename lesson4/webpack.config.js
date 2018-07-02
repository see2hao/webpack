const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        pageA: './pageA.js',
        // pageB: './pageB.js',
        vendor: ['lodash', 'jquery'],
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: './dist/',
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            async: 'async-common',
            children: true,
            minChunks: 2,
            // minChunks: Infinity,
            //当指定children时，无法再指定chunks
            // chunks: ['pageA', 'pageB'],
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