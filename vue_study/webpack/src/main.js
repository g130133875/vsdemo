//1.使用common.js的模块化规范
const {add,mul} = require('./math.js')
console.log(add(20,30));

//2.使用ES6的模块化规范
import * as man from "./info";
console.log(man.name);
console.log(man.gender);