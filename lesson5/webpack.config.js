const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        app: './app.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        //决定了打包资源所在的位置
        publicPath: './dist/',
        filename: '[name].bundle.js',
    },
   module: {
       rules:[
           {
               test: /\.css$/,
               use: [
                   {
                    //使用style-loader直接在html中插入style标签
                    //    loader: 'style-loader'
                    //使用style-loader/url直接在html中插入link标签
                    // loader: 'style-loader/url'
                    //使用style-loader/useable时，可以在js代码中控制是否插入style标签
                    loader: 'style-loader',
                    options: {
                        //选择style标签插入的位置
                        // insertInto: 'div',
                        //html中，只插入一个style标签
                        // singleton: true,
                        // transform: './css.transform.js',
                    },
                   },{
                        //与style-loader时使用
                          loader: 'css-loader',
                          options:{
                              minimize: true,
                              modules: true,
                          }
                       //与style-loader/url时使用
                    //    loader: 'file-loader'
                   }
               ]
           }
       ]
   }
}