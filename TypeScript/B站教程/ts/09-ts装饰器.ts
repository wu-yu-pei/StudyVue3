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

function logClass(target:any) {
    console.log(target);
    
    return class extends target {
        name:any='我是修改后的name'
        getDate() {
            console.log('getDate方法被我重载了');
            
        }
    }
}

@logClass
class Person {
    name:string | undefined;
    constructor() {
        this.name = '我是构造函数里的name'
    }
    getDate() {
        console.log(this.name);
        
    }
}
var p:any = new Person()
p.getDate()

// 属性装饰器

// 方法装饰器

