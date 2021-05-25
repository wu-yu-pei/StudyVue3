module.exports = {
    module: {
        // 在脚手架中使用less   安装 less less-loader  css-loader style-loaser  然后配置  如果报错(检查是否是less-loader版本过高)
        rules: [
          {
            test: /\.less$/,
            loader: "style-loader!css-loader!less-loader",
          }
        ]
    }
}