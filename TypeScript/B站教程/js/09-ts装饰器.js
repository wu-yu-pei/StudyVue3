"use strict";
// 定义一个类装饰器
// 1.普通装饰器
// function logClass(params:any) {
//     console.log(params);
//     // 对类进行扩展
//     params.prototype.api = 'www.baidu.com';
//     params.prototype.run = function() {
//         console.log('我是run方法');
//     }
// }
// @logClass
// class Person {
//     name:string | undefined;
//     constructor(name:string) {
//         this.name = name
//     }
//     getDate() {
//         console.log(this.name);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//     }
// }
// var p:any = new Person('小吴')
// p.getDate()
// p.run()
// console.log(p.api);
//装饰器工厂 可以传参数
// function logClass(target:any) {
//     console.log(target);
//     return function(params:any) {
//         // 参数是呢个类
//         console.log(params);
//         params.prototype.api = target
//     }
// }
// @logClass('你好')
// class Person {
//     name:string | undefined;
//     constructor(name:string) {
//         this.name = name
//     }
//     getDate() {
//         console.log(this.name);
//     }
// }
// var p:any = new Person('小吴')
// p.getDate()
// console.log(p.api);
// 类装饰器重载构造函数
function logClass(target) {
    console.log(target);
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '我是修改后的name';
            return _this;
        }
        class_1.prototype.getDate = function () {
            console.log('getDate方法被我重载了');
        };
        return class_1;
    }(target));
}
var Person = /** @class */ (function () {
    function Person() {
        this.name = '我是构造函数里的name';
    }
    Person.prototype.getDate = function () {
        console.log(this.name);
    };
    Person = __decorate([
        logClass
    ], Person);
    return Person;
}());
var p = new Person();
p.getDate();
// 属性装饰器
