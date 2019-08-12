@addSkill
class Person { }
function addSkill(target) {
  target.say = 'hello world'
}
console.log(Person.say)