function Foo() {}

var a = new Foo()

console.log(Foo.prototype === Object.getPrototypeOf(a)) // true
console.log(Foo.prototype === a.__proto__) // true
/**
 * 这种奇怪的“类似类”的行为利用了函数的一种特殊特性: 
 * 所有的函数默认都会拥有一个 名为 prototype 的公有并且不可枚举(参见第 3 章)的属性，
 * 它会指向另一个对象: 这个对象通常被称为 Foo 的原型，
 */
/**
 * 对象是在调用 new Foo()(参见第 2 章)时创建的，
 * 最后会被(有点武断地)关联到这个“Foo 点 prototype”对象上
 */

console.log(Foo.prototype.constructor === Foo)
console.log(a.constructor === Foo)
console.log(a.__proto__.constructor === Foo)