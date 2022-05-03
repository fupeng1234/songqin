//1、普通的变量赋值方法
testList = [1,2,3]
// let a = testList[0]
// let b = testList[1]
// let c = testList[2]

//解构赋值---类似于python解包的概念
let [a,b,c] = testList
// console.log(c)

//解构赋值也可以用于对象
const obj = {
    name:"haiwei",
    age:"22",
    // addr:"南京"
}
let {name,age} = obj   //相当于把对象解包了，把对象的属性逐个提取出来
                       //如果接收的变量少于对象属性，没有任何问题
                       //如果接收的变量多于对象属性，多出来的变量为undefined
// console.log(age)

//2、对象的常规形式
const obj2 = {
    name:name,   //属性名和属性值相同时，可以触发变量的简写
    age:age
}
//对象的简写形式
const obj3 = {   
    name,     //属性名和属性值相同时，可以触发变量的简写
    age
}
// console.log(obj3.name)

//3、扩展运算符
// let person = obj  //这种写法是把obj赋值给了person，改变obj的值也会影响person
let person = {...obj}   //取出当前对象的所有属性，复制一份给另一个对象
obj.name = '1213313'   //此时更改obj的属性是不会影响person，person相当于单独个体，用obj复制了一份
// console.log(person)

//数组的扩展运算符
// let lis2 = testList    //原理同上
let list2 = [...testList]  //将列表元素挨个复制到list2数组中，index作为key，value就等于value
testList.push('hello')
// console.log(list2)

//传统函数写法
function hello(name){
    console.log('hello',name)
};
hello('better')
//箭头函数写法：箭头函数省略funtion   可以不用return
//左边是入参，右边是要运算或返回的部分
//(arg1,arg2,arg3....)=>{js表达式}
//如果只有1个入参，可以省略大括号
//如果{}内只有1行可以省略{}
const hello2 = (name) =>{
    console.log('hello',name)
}
hello('better')
hello2('www')
//箭头函数的返回值
const getName = ()=>{return 'haiwei'}
console.log(getName())

//箭头函数没有自己的this
//this在面向对象语言中表示的是当前对象
const teacher = {
    teach(){
         console.log('传统模式',this)   //传统函数的this会指向当前对象
    },//对象里面定义函数不用加function
    teach2:()=>{
         console.log('箭头模式',this)   //箭头模式没有，指向的是顶层对象window
                                       //建议调用箭头函数时，不要使用this，会出现bug
    }
}
teacher.teach()
teacher.teach2()