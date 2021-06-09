const path = require('path');

module.exports = {
    // 指定打包的入口文件
    entry: './index.js',
    output: {
        // 公共路径设置
        // publicPath: 'https://cdn.baidu.com',
        path: path.resolve(__dirname, './build'),
        filename: 'index.js'

    },
    module: {
        // 遇到不认识的模块用loader
        rules: [
            {

                test: /\.(png|jpe?g|gif)$/,
                use: {
                    // loader: 'file-loader', //就是把模块，放在另外一个目录里，并且把位置返回给我们，适合设置字体
                    loader: 'url-loader',  // 可以限定模块的体积，根据体积判断是否需要转换成base64,减少http请求
                    options: {
                        // name是打包前模块的名称，ext是打包前的模块格式
                        name: "[name]_[hash].[ext]",
                        outputPath: 'images/',
                        limit: 2000
                    }

            
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] 
                // css-loader识别css模块， style-loader将css文件放在style中
            },
            {
                test: /\.scss$/,  //loader是有执行顺序，从后往前
                use: ['style-loader', 'css-loader', 'sass-loader'] 
                // css-loader识别css模块， style-loader将css文件放在style中
            }
        ]
    }

}