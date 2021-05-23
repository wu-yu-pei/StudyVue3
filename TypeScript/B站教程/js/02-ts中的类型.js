"use strict";
// 1.数字类型
var num = 20;
console.log(num);
// 2.字符串类型
var str = '哈哈哈';
console.log(str);
// 3.boolen类型
var flag = false;
console.log(flag);
// 4.数组类型
// 4.1 法一
var arr = [1, 2, 3, 4, 5];
console.log(arr);
var arr1 = ['1', 'dff', '10d'];
console.log(arr1);
// 4.2 法二
var arr2 = ['1212', 'dsfds', '101f3'];
console.log(arr2);
var arr3 = [1, 2, 8, 5, 3];
console.log(arr3);
// 5.元组类型
var arr4 = ['12', 20, true];
console.log(arr4);
// 6.枚举类型
var flag1;
(function (flag1) {
    flag1[flag1["success"] = 1] = "success";
    flag1[flag1["err"] = -1] = "err";
})(flag1 || (flag1 = {}));
var a = flag1.success;
var b = flag1.err;
console.log(a);
console.log(b);
// enum Color {red,blue,green}
// let c:Color = Color.red
// let d:Color = Color.blue
// let e:Color = Color.green
// console.log(c,d,e);   //0.1.2  如果没有赋值  会打印索引值
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 20] = "blue";
    Color[Color["green"] = 21] = "green";
})(Color || (Color = {}));
var c = Color.red;
var d = Color.blue;
var e = Color.green;
console.log(c, d, e); //0 5 6 如果上一个赋值,以上一个为基准 加一
// 7.null 类型
var f;
f = null;
// f = sdf
console.log(f);
// 8.undefined
var g;
g = undefined;
console.log(g);
// 9any类型
var h;
h = 'fdf';
h = 1010;
console.log(h);
// void类型
// function fn():void {
//     console.log(20)
// }
// fn()
// function fn():number {
//     console.log(20)
//     return 20
// }
// fn()
// never类型
