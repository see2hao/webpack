const webpack = require('webpack')
const path = require('path')
const Purifycss = require('purifycss-webpack')
const glob = require('glob-all')

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
            //    test: /\.css$/,
            //处理css预编译文件：less、sass
            test: /\.less$/,
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
                              //启用css模块
                              modules: true,
                              //修改class的名称（打包后的class名称）
                              localIdentName: '[name]',
                          }
                       //与style-loader/url时使用
                    //    loader: 'file-loader'
                   },
                   //postcss
                   {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                // require('autoprefixer'),
                                //postcss-cssnext 实际上是包含autoporefixer的，所以，当引入了postcss-cssnext的时候，
                                //可以去除autoprefixer插件
                                require('postcss-cssnext'),
                            ]
                        }
                   },
                   {
                       loader: 'less-loader',
                   }
               ]
           }
       ]
   },
   plugins: [
       new Purifycss({
           paths: glob.sync([
               path.join(__dirname, './*.html'),
               path.join(__dirname, './src/*.js'),
           ])
       }),
    //    new webpack.optimize.CommonsChunkPlugin(),
   ]
}