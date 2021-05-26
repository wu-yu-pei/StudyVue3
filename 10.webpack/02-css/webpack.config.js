// 必须使用 Commenjs导出
const path = require('path')

module.exports = {
    // 入口
    entry:'./src/index.js',
    // 出口
    output: {
        path:path.resolve(__dirname,'./build'),//绝对路径
        filename:'bundle.js'
    },
    module: {
        rules: [
            // 打包css 依靠css-loader 和 styke-loader
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    "css-loader",
                    // css的一个强大插件
                    {
                        loader:"postcss-loader",
                        options:{
                            postcssOptions:{
                                // 插件
                                plugins:[
                                    require('postcss-preset-env')
                                ]
                            }
                        }
                    }
                ]
            },
            // 打包less 依靠 .....
            {
                test:/\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    }
}