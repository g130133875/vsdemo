import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// 1.基本请求
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'http://123.207.32.32:8000/home.data',
//   // 针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// // 2.axios发送并发请求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
// axios.all([axios({
//   url: '/home/multidata',
// }),axios({
//   url: '/home/multidata',
// })]).then(axios.spread((res1, res2) => {
//   console.log(res1,res2);
// }))


// 3. 创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })

// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })

import {request} from './network/request'
request({
  url: 'home/multidata',
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})