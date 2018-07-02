const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './app.js',
    output:{
        //windows环境下，一定需要绝对路径
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].bundle.js'
    }
    // output: {
    //     path: './lesson1/dist/',
    //     name: '[name].bundle.js'
    // }
}