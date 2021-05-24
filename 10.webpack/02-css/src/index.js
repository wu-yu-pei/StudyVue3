// ESmodule导入]
import {math} from './js/math'
// Commenjs导入
const p = require('./js/person.js')
// 导入creat.js
import './js/creatdiv'
// 导入css
import './css/style.css'    //由于webpack不会给css打包 所以我们就需要下载css-loader 然后在webpack.config.js中配置
// 导入less
import './css/index.less'
math()
console.log(p);