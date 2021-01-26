import axios from 'axios'

// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   instance(config)
//     .then(res => {
//       success(res)
//     })
//     .catch(err => {
//       failure(err)
//     })
// }

// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }


export function request(config) {
  // 1. 创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 2. axios的拦截器

  //2.1 请求拦截
  instance.interceptors.request.use(config => {
    //1. 可拦截config中的一些信息不符合服务器的要求
    //2. 发送网络请求时,希望在界面显示请求的图标
    //3. 某些需要携带特殊信息的网络请求
    console.log(config);
  }, err => {
    console.log(err);
  })
  //2.2 响应拦截
  instance.interceptors.response.use(config => {
    console.log(config);
  }, err => {
    console.log(err);
  })

  // 3. 发送真正的网络请求
  return instance(config);
}