// ts中额类
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


// ts中类的继承
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

// ts中类的修饰符


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
 

