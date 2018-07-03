const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Purifycss = require('purifycss-webpack')
const glob = require('glob-all')

const pathsToClean = [
    'dist',         //移除dist目录
    // 'build/*.*',    //移除build目录下的所有文件
    // 'web/*.js'      //移除web目录下，所有的js文件
  ]

const cleanOptions = {
    //打印根目录
    root: '',
    //打印日志
    verbose: true,
    //不移除的文件
    exclude: [],
}

module.exports = {
    entry: {
        main: './app.js',
        route: './route.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        // publicPath: './dist/',
        filename: '[name].bundle.[hash:5].js',
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    minimize: true,
                                }
                            },
                            'less-loader',  
                        ],
                })
            },
            //style-loader css-loader postcss-loader less-loader
            // {
            //     test: /\.less$/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //         },{
            //             loader: 'css-loader',
            //             options: {
            //                 minimize: true,
            //             },
            //         },{
            //             loader: 'postcss-loader',
            //             options: {
            //                 ident: 'postcss',
            //                 plugins:[
            //                     require('postcss-cssnext'),
            //                 ]
            //             },
            //         },{
            //             loader: 'less-loader',
            //         }
            //     ]
            // },
            {
                test: /\.(jpg|png|jpeg|gif)$/,
                use: [
                    {
                        // loader: 'file-loader',
                        //如果小于一定大小的img，则使用base64插入css中，减少http请求次数
                        loader: 'url-loader',
                        options: {  
                            limit: 1000000,
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        //css tree-shaking 
        new Purifycss({
            paths: glob.sync([
                path.join(__dirname, './src/css/*.less'),
                path.join(__dirname, './*.html'),
            ])
        }),
        //js tree-shaking 
        // new webpack.optimize.CommonsChunkPlugin({
        //     children: true,
        // }),
        //编译时，自动删除dist目录
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        //自动生成html文件，并插入生成的资源
        new HtmlWebpackPlugin({
            title: 'test',
            filename: 'index.html',
            template: './src/templates/template1.html',
        }),
        //从bundle或bundles中提取至单独的文件中
        //webpack4.0后，使用mini-css-extract-plugin替换了此插件 https://github.com/webpack-contrib/mini-css-extract-plugin
        new ExtractTextWebpackPlugin('[name].bundle.[hash:5].css'),
    ]
}