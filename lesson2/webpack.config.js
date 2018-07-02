const path = require('path')
module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // use: 'babel-loader',
                //可以为babel-loader指定特定的presets，此处使用对象的方式
                use: {
                    loader: 'babel-loader',
                    //此处是babel-loader的配置项
                    options: {
                        //preset选项
                        // presets: ['babel-preset-env'],
                        presets: [
                            //如果需要给特定的presets指定targets参数，则可以这样设置
                            // [
                            //     ['babel-preset-env', {
                            //         targets:{
                            //             browsers: ['last 2 versions', '>1%']
                            //         }
                            //     }]
                            // ],
                            //可以针对不同的浏览器：chrome
                            // ['babel-preset-env', {
                            //     targets: {
                            //         chrome: 52
                            //     }
                            // }]
                            //混合模式
                            // ['babel-preset-env',{
                            //     targets:{
                            //         chrome: 52,
                            //         browsers: ['last 2 versions', 'safari 7']
                            //     }
                            // }]
                            //可以根据不同端，设置不同的presetstarget参数：nodejs设置
                            // ['babel-preset-env', {
                            //     targets: {
                            //         node: '6.10'
                            //     }   
                            // }]
                        ]
                    }
                },
                exclude: '/node_modules/'
            },
        ]
    }
}