// es5 js函数

// function fn() {
//     console.log(20)
// }
// const fn1 = function() {
//     console.log(30);
// }
// fn1()


// ts中的函数
// 匿名函数有
const fn = function():number {
    return 10
}
console.log(fn());

// 无返回类型
// function fn():void {
//     console.log(30);
// }
// fn()
// number返回类型

// function fn():number {
//     return 20
// }
// console.log(fn());

// function fn():any{
//     return null
// }
// console.log(fn());


// 参数问题
// function fn(name:string,age:number):string {
//     return `我的名字是${name}----今年${age}岁了`
// }
// console.log(fn('小吴',20));
// 默认参数
// function fn(name:string,age:number=30):string {
//     return `我的名字是${name}----今年${age}岁了`
// }
// console.log(fn('小吴'));

// 可选参数
// function fn(name:string,age?:number):string {
//     if(age) {
//          return `我的名字是${name}----今年${age}岁了`
//     }else {
//         return `我的名字是${name}----今年n岁了`
//     }
   
// }
// console.log(fn('小吴'));

//剩余参数
// function fn(...res:number[]):number {
//     return res.length
// }
// console.log(fn(1,2,3,4,5,6,12,7));

// 重载



// 箭头函数
// setTimeout(() => {
//     console.log(20);
// }, 1000);


