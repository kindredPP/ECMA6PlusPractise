console.log("---------methods-----------")
console.time("---------methods-----------")
class Person {
  constructor() {}
  @dec(1)
  @dec(2)
  name() {
    console.log('name in')
  }
}
function dec(id) {
  console.log("out", id)
  return function(target, key, descriptor) {
    console.log(id)
  }
}
var person = new Person()
person.name()
console.timeEnd("---------methods-----------")