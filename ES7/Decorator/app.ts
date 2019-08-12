@addSkill
class Person { }
function addSkill(target) {
  target.say = 'hello world'
}
console.log(Person['say'])
//这里如果直接使用Person.say会提示say属性不存在,如我使用的vscode编辑器就会报错,是因为ts的原因，只需要用[]的形式获取对象属性即可。
