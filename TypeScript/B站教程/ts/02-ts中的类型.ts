// 1.数字类型

let num:number = 20
    console.log(num);


// 2.字符串类型

let str:string = '哈哈哈'
    console.log(str);

// 3.boolen类型

let flag:boolean = false
    console.log(flag);

// 4.数组类型

    // 4.1 法一
    let arr:number[] = [1,2,3,4,5]
        console.log(arr);

    let arr1:string[] = ['1','dff','10d']
        console.log(arr1);

    // 4.2 法二
    let arr2:Array<String> = ['1212','dsfds','101f3']
        console.log(arr2);

    let arr3:Array<Number> = [1,2,8,5,3]
        console.log(arr3);

// 5.元组类型

let arr4:[string,number,boolean] = ['12',20,true]
        console.log(arr4);

// 6.枚举类型
enum flag1 {success=1,err=-1}

let a:flag1 = flag1.success
let b:flag1 = flag1.err
console.log(a);
console.log(b);

// enum Color {red,blue,green}
// let c:Color = Color.red
// let d:Color = Color.blue
// let e:Color = Color.green

// console.log(c,d,e);   //0.1.2  如果没有赋值  会打印索引值


enum Color {red,blue=20,green}
let c:Color = Color.red
let d:Color = Color.blue
let e:Color = Color.green

console.log(c,d,e);   //0 5 6 如果上一个赋值,以上一个为基准 加一


// 7.null 类型
var f:null
f = null
// f = sdf
console.log(f)

// 8.undefined
var g:undefined
 g = undefined
console.log(g);

// 9any类型
var h:any
h = 'fdf'
h = 1010
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


