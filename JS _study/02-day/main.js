//字符串模版
/*
const name = 'kitty';
const age = 21;
console.log(`His name is ${name} and his age is ${age}`)
*/


// 分入数组
/*
const s = 'Hello World';
console.log(s.split(''));
console.log(s.split(' '));
*/


// Arrays
/*
const array = [1,2,3,4,'apple'];
array.unshift('hi'); //在开头加
array.push(true); //在末尾加
array.pop(); //去掉末尾
console.log(Array.isArray(array)); //判断是否为数组
console.log(array) 
*/


//object
/*
const person = {
    firstName: 'Gao',
    lastName: 'Doe',
    age: 22,
    hobbies: ['study','rape'],
    location: {
        nation: 'China',
        city: 'China'
    }
}
//从person中取出,对象赋值需注意
const { firstName, hobbies , location: { nation } } = person;
console.log(nation);
//也可直接添加属性
person.email = 'guagua@Gmail.com';
console.log(person);
*/


//对象数组
/*
const todos = [
    {
        id: 1,
        text: 'first',
        isCompleted: true
    },
    {
        id: 2,
        text: 'two',
        isCompleted: true
    },
    {
        id: 3,
        text: 'three',
        isCompleted: false
    }
];

//forEach:遍历每一项
todos.forEach(function(todo){
    console.log(todo.text);
});
//map:返回一个数组
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);
//filter:返回符合条件的
const todoCompleted =  todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoCompleted);
*/


// == 和 ===  ->     == 只比较数值；=== 绝对等(包括类型)


//函数
/*
function addNums(num1 = 1, num2 = 1) {
    return num1+num2;
}  //等价于

const addNumss = (num1 = 1, num2 = 1) => num1+num2;
console.log(addNumss(5,5));
*/


//构造函数
/*
function Person(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    //原型
    Person.prototype.getFullName = function() {
        return `${firstName} ${lastName}`;
    }
}
const person1 = new Person('Gao','hehe');
const person2 = new Person('Gao','guagua');
console.log(person1.getFullName());
console.log(person2);
*/


//类
/*class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}*/


//DOM
/*
//1. Single element
document.getElementById('id名');
document.querySelector('类或标签名');

//2. Multiple element
document.querySelectorAll('');
document.getElementsByClassName('');
document.getElementsByTagName('');
*/

// 事件监听器
/*
myForm.addEventListener('submit', onSubmit);
const username = document.querySelector('#username');
//e为事件参数
function onSubmit(e) {
    e.preventDefault();
    // console.log(username.value);
    if(username.value === '') {
        msg.classList.add('error'); //添加类css
        msg.innerHTML = 'Please enter the username.';

        setTimeout(() => msg.remove(), 3000); //3s后消除
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document,createTextNode(
            `${username.value} : ${password.value}`
        ));
        ul.appendChild(li);
    }
}
*/


//回调函数
/*
function add(first, second, callback){ 
    console.log(first+second);
    callback();  //回调函数
}
add(1,2,function(){  //函数本身也是对象
    console.log('done');
})
*/


//获取body和html元素
var bodyEle = document.body;  //返回body元素对象
var htmlEle = document.documentElement;  //返回html元素
