// 必须使用 Commenjs导出
const path = require('path')
module.exports = {
    // 入口
    entry:'./src/index.js',
    // 出口
    output:{
        path:path.resolve(__dirname,'./build'),//绝对路径
        filename:'bundle.js'
    }
}