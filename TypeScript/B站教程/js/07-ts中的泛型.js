"use strict";
// function getValue(value:string):string {
//     return value
// }
// console.log(getValue('10'));
// function getValue(value:number):number {
//     return value
// }
// console.log(getValue(10));
//  泛型的方式定义函数
// function getValue<T> (value:T):T{
//     return value
// }
// console.log(getValue(123));
// console.log(getValue('123'));
// 泛型的方式定义类
// 普通方式
// class minNum {
//     list:number[] = [];
//     add(val:number):void {
//         this.list.push(val)
//     }
//     sort():number{
//         let minnum = this.list[0]
//         for(let i = 0;i<this.list.length;i++) {
//             if(minnum>this.list[i]) {
//                 minnum = this.list[i]
//             }
//         }   
//         return minnum
//     }
// }
// var m = new minNum()
// m.add(1)
// m.add(10)
// m.add(5)
// m.add(8)
// m.add(100)
// console.log(m.sort());
// 泛型的方式
// class minNum<T> {
//     list:T[] = [];
//     add(val:T):void {
//         this.list.push(val)
//     }
//     sort():T{
//         let minnum = this.list[0]
//         for(let i = 0;i<this.list.length;i++) {
//             if(minnum>this.list[i]) {
//                 minnum = this.list[i]
//             }
//         }   
//         return minnum
//     }
// }
// var m = new minNum<string>()
// m.add('a')
// m.add('b')
// m.add('c')
// m.add('f')
// m.add('t')
// console.log(m.sort());
//泛型接口
// 1.
// interface Phone {
//     <T>(name:T):T;
// }
// const getPhone:Phone = function<T>(name:T):T {
//     return name
// }
// console.log(getPhone<string>('xixi'));
// 2.
// interface Phone<T> {
//     (value:T):T
// }
// const getPhone:Phone<string> = function<T>(value:T):T {
//     return value
// }
// console.log(getPhone('哈哈哈'));
//                                              把类作为约束
// class Person {
//     firstName:String|undefined;
//     lastName:String|undefined
// }
// class Mysql {
//     add(person:Person):boolean {
//         console.log(person);
//         return true
//     }
// }
// var p = new Person
// p.firstName = '吴'
// p.lastName = '配'
// var mysql = new Mysql()
// mysql.add(p)
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var Mysql = /** @class */ (function () {
    function Mysql() {
    }
    Mysql.prototype.add = function (person) {
        console.log(person);
        return true;
    };
    return Mysql;
}());
var p = new Person;
p.firstName = '吴';
p.lastName = '配';
var mysql = new Mysql();
mysql.add(p);
