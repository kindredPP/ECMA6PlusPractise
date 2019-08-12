@looks
class Person { }
function looks(target) {
    target.looks = 'handsome'
    console.log('I am handsome')
}
// 这是因为装饰器对类的行为的改变，是代码编译时发生的，而不是在运行时。
// 这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数。
console.log(Person['looks'])