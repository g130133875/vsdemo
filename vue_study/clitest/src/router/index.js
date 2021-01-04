//配置路由相关信息
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home'
import About from '../components/About'
// 1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

// 2.创建VueRouter对象
const routes = [
    {
        path: '',
        redirect: '/home',
        component: Home
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]
const router = new VueRouter({
    routes,
    mode: 'history', //模式
    linkActiveClass: 'active'
})

// 3.将router对象传入到Vue实例
export default router