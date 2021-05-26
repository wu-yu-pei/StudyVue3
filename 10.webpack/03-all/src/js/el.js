var div = document.createElement('div')
div.innerHTML = '哈哈哈,我是添加进的div'
// 这样导入图片  不是import的方式
import imgurl from '../img/01.jpg'
var img = document.createElement('img')
img.src = imgurl
document.body.appendChild(img)
document.body.appendChild(div)