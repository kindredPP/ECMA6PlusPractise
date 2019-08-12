class Person {
  constructor() {}

  @myname
  name() {
    console.log('name in')
  }
}
function myname(target, key, descriptor) {
  console.log(target)
  console.log(key)
  console.log(descriptor)

  descriptor.value = function () {
    console.log("add name")
  }
} 
var personOne = new Person()
personOne.name()