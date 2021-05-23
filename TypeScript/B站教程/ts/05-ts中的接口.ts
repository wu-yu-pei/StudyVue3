// 属性接口 (对象接口)
// interface fullName {
//     firstName:string;
//     lastName:string
// }

// function getFullName(name:fullName):void {
//     console.log(name.firstName+name.lastName);
// }

// getFullName({
//     firstName:'吴',
//     lastName:'配'
// })

// function getInfo(info:fullName) {
//     console.log(info.firstName+info.lastName);
// }
// getInfo({
//     firstName:'顾',
//     lastName:'营'
// })


//接口的可选属性

// interface fullName {
//     firstName:string;
//     lastName?:string   //加上一个?就代表是一个可选属性
// }

// function getFullName(name:fullName):void {
//     console.log(name.firstName+name.lastName);
// }

// getFullName({
//     firstName:'吴',
// })

// 函数类型的接口
// interface enty {
//     (key:string,value:string):string
// }
// const md5:enty = function(key:string,value:string):string {
//     return key+value
// }
// function md6(key:string,value:string):string {
//     return key+value
// }
// console.log((md5('12','23')));
// console.log((md6('12','233')));
