
function Foo(name) { 
  this.name = name;
}
Foo.prototype.myName = function() { 
  return this.name;
};
function Bar(name,label) { 
  Foo.call( this, name ); 
  this.label = label;
}
// 我们创建了一个新的 Bar.prototype 对象并关联到 Foo.prototype 
// Bar.prototype = Object.create( Foo.prototype );
Bar.prototype = Foo.prototype //  因 此 当 你 执 行 类 似 Bar.prototype. myLabel = ... 的赋值语句时会直接修改 Foo.prototype 对象本身。
// 注意!现在没有 Bar.prototype.constructor 了 
// 如果你需要这个属性的话可能需要手动修复一下它
Bar.prototype.myLabel = function() { 
  return this.label;
};
var a = new Bar( "a", "obj a" );
console.log(a.myName()); // "a"
console.log(a.myLabel()); // "obj a"
console.log(Foo.prototype);// Foo { myName: [Function], myLabel: [Function] }