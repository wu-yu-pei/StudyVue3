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

// 类类型接口    实现接口的类必须包含接口中定义的属性和方法
// interface Animal {
//     name:string;
//     eat():void;
// }

// class Dog implements Animal{
//     name:string
//     constructor (name:string) {
//         this.name = name
//     }
//     eat(value?:string):void {
//         console.log(this.name+'吃粮食');
        
//     }
// }

// class Cat implements Animal{
//     name:string
//     constructor (name:string) {
//         this.name = name
//     }
//     eat(value?:string):void {
//         console.log(this.name+'吃粮食');
//         if(value) {
//             console.log(this.name+value);
//         }
        
//     }
// }

// const dog = new Dog('小狗狗')
// dog.eat()

// const cat = new Cat('小猫猫')
// cat.eat('1212')


//                                                          接口的扩展,接口的继承
// class Animal {
//     name:string
//     constructor(name:string) {
//         this.name=name
//     }

//     eat():void {

//     }
// }
// interface Person extends Animal{
    
// }

// class Web implements Person {
//     name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     eat() {
//         console.log('吃东西');
        
//     }
// }

// var web = new Web('哈哈')
// web.eat()