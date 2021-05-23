"use strict";
//                                                  ts中的类
// class Person {
//     name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     run() {
//         console.log(`${this.name}在运动`);
//     }
// }
// var p = new Person('小吴')
// p.run()
//                                                  ts中类的继承
// class Person {
//     name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     run() {
//         console.log(`${this.name}在运动`);
//     }
// }
// class Web extends Person{
//     age:number
//     constructor(name:string,age:number) {
//         super(name)
//         this.age = age
//     }
//     // 会覆盖父类的方法
//     run() {
//         console.log('子类的run方法被调用了');
//     }
//     work() {
//         console.log(`${this.age}的${this.name}在工作`);
//     }
// }
// var w = new Web('小吴',20)
// w.run()
// w.work()
//                                                          ts中类的修饰符
// public在父类,子类,外部都可以访问
// class Person {
//     public name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     run() {
//         console.log(`${this.name}在运动`);
//     }
// }
// class Web extends Person{
//     age:number
//     constructor(name:string,age:number) {
//         super(name)
//         this.age = age
//     }
//     // 会覆盖父类的方法
//     run() {
//         console.log('子类的run方法被调用了');
//     }
//     work() {
//         console.log(`${this.age}的${this.name}在工作`);
//     }
// }
// var w = new Web('小吴',20)
// w.run()
// w.work()
// private 只有在自己类的内部可以访问
// class Person {
//     private name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     run() {
//         console.log(`${this.name}在运动`);
//     }
// }
// class Web extends Person{
//     age:number
//     constructor(name:string,age:number) {
//         super(name)
//         this.age = age
//     }
//     // 会覆盖父类的方法
//     run() {
//         console.log('子类的run方法被调用了');
//     }
//     work() {
//         console.log(`${this.age}的${this.name}在工作`);
//     }
// }
// var w = new Web('小吴',20)
// w.run()
// w.work()
// protected 可以在父类和子类中访问  外部访问不了
// class Person {
//     protected name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     run() {
//         console.log(`${this.name}在运动`);
//     }
// }
// class Web extends Person{
//     age:number
//     constructor(name:string,age:number) {
//         super(name)
//         this.age = age
//     }
//     // 会覆盖父类的方法
//     run() {
//         console.log('子类的run方法被调用了');
//     }
//     work() {
//         console.log(`${this.age}的${this.name}在工作`);
//     }
// }
// var w = new Web('小吴',20)
// w.run()
// w.work()
// console.log(w.name);  //属性“name”受保护，只能在类“Person”及其子类中访问。ts(2445)
//                                                  ts中的静态属性和静态方法(static关键字)
// es5里的静态属性和静态方法
// class Person{
//     name:string
//     constructor(name:string) {
//         this.name = name
//     }
// }
// Person.err = 'cuowu'
// Person.eat = function() {
//     console.log('eat');
// }
// Person.eat()
// ts中的静态属性和静态方法 (static方法)
// class Person{
//     static age:number=20
//     name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     static run() {
//         console.log(`${this.age}岁的人在运动`);
//     }
// }
// var p = new Person('小与')
// // p.run() 静态方法只能由类来调用   实例不可一调用静态方法
// Person.run()
//                                                 ts中的多态(父类中定义的方法,不去实现,让子类如分别实现次)
// class Animal {
//     name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     eat() {
//         console.log('吃东西');
//     }
// }
// class Dog extends Animal{
//     constructor(name:string) {
//         super(name)
//     }
//     eat() {
//         console.log('小狗狗吃肉肉');
//     }
// }
// class Cat extends Animal{
//     constructor(name:string) {
//         super(name)
//     }
//     eat() {
//         console.log('小猫猫吃鱼鱼');
//     }
// }
// var  dog = new Dog('haha')
// dog.eat()
// var cat = new Cat('嘻嘻嘻')
// cat.eat()
//                                          ts中的抽象类(abstract)一个类如果继承了抽象类,就必须实现其抽象方法
// abstract class Animal {
//     name:string
//     constructor(name:string) {
//         this.name = name
//     }
//     abstract eat():void;       //抽象类中的方法不能具有事项
// }
// class Dog extends Animal{
//     constructor(name:string) {
//         super(name)
//     }
//     eat() {
//         console.log('小狗狗吃肉肉');
//     }
// }
// class Cat extends Animal{
//     constructor(name:string) {
//         super(name)
//     }
//     eat() {
//         console.log('小猫猫吃鱼鱼');
//     }
// }
// var  dog = new Dog('haha')
// dog.eat()
// var cat = new Cat('嘻嘻嘻')
// cat.eat()
