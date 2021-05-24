// 使用之前所学知识 封装一个数据库操作类


// 泛型接口
interface DBI<T> {
    add(info:T):boolean;
    update(info:T):boolean;
    detele(id:number):boolean;
    get(id:number):any[];
}
// 泛型进口必须的实现类必须式泛型类
class Mysql<T> implements DBI<T> {

    add(info: T): boolean {
        console.log(info);
        
        throw new Error("Method not implemented.");
    }
    update(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    detele(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }

}

class MongoDb<T> implements DBI<T> {
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    detele(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
        throw new Error("Method not implemented.");
    }
    
}

class User {
    name:string|undefined
    password:string|undefined
}

var u = new User()
u.name='吴'
u.password='.1.4.7'
var mysql = new Mysql<User>()
mysql.add(u)