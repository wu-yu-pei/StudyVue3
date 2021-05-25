"use strict";
// 使用之前所学知识 封装一个数据库操作类
// 泛型进口必须的实现类必须式泛型类
var Mysql = /** @class */ (function () {
    function Mysql() {
    }
    Mysql.prototype.add = function (info) {
        console.log(info);
        throw new Error("Method not implemented.");
    };
    Mysql.prototype.update = function (info) {
        throw new Error("Method not implemented.");
    };
    Mysql.prototype.detele = function (id) {
        throw new Error("Method not implemented.");
    };
    Mysql.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return Mysql;
}());
var MongoDb = /** @class */ (function () {
    function MongoDb() {
    }
    MongoDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.update = function (info) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.detele = function (id) {
        throw new Error("Method not implemented.");
    };
    MongoDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MongoDb;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.name = '吴';
u.password = '.1.4.7';
var mysql = new Mysql();
mysql.add(u);
