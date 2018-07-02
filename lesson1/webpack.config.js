const path = require('path')
const webpack = require('webpack')

module.exports = {
    //单入口
    // entry: './app.js',
    //多入口
    entry: {
        'entry/1/entry1': './1.js',
        'entry2/2/entry2': './2.js',
    },
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