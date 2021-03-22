import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('@/components/login/Login')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router