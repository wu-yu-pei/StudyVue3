//必须利用 comenjs的方法导入和导出
const path = require('path')
const {CleanWebpackPlugin}=  require('clean-webpack-plugin')
const HtmlWebpackPlugin  = require('html-webpack-plugin')
module.exports = {
    // 模式的配置
    mode:'development',
    // 映射代码 方便我们在控制台查看代码所处的文件夹
    devtool:'source-map',
    // 入口文件
    entry:'./src/index.js',
    // 输出位置
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'js/index.js'
    },
    // 在这里面配置loader
    module:{
        rules: [
            // 配置打包css  需要cssloader style-loader
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            // 配置使用less
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            // 配置打包图片  打包css里面引入的图片
            {
                test:/\.(jpe?g|png|gif|svg)/,
                use:{
                    loader:'file-loader',
                    options:{
                        outputPath:'img',
                        name:'[name]_[hash:6].[ext]'
                    }
                }
            },
            // 打包url图片资源
        ]
    },
    // 配置插件
    plugins:[
        // 删除上一次的打包资源  
        new CleanWebpackPlugin(),
        // 对thml文件进行打包
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ]
}