import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const store = new Vuex.Store({
  state: {
    //共享的数据
    counter: 100,
    students: [
      {id: 100, name: 'aa', age: 18},
      {id: 101, name: 'aaa', age: 19},
      {id: 102, name: 'aaaa', age: 20},
    ]
  },
  mutations: {
    //mutation方法，只能是同步操作
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  },
  actions: {

  },
  getters: {
    // 防止getters方法
    morethan18(state) {
      return state.students.filter(s => s.age >18)
    },
    morethan18Len(state, getters) {
      return getters.morethan18.length
    },
    morethan(state) {
      // return function(age) {
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {

  }
})

// 3.导出store独享
export default store