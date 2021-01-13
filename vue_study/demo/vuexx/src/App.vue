<template>
  <div id="app">
    <!-- <h2>{{$store.state.counter}}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button> -->
    <!-- <h2>{{$store.state.students}}</h2>
    <h2>{{$store.getters.morethan18}}</h2>
    <h2>{{$store.getters.morethan18Len}}</h2>
    <h2>{{$store.getters.morethan(18)}}</h2> -->
    <h2>{{$store.state.message}}</h2>
    <button @click="change">修改状态</button>
    <h2>----------------------------------</h2>
    <test-vuex/>
  </div>
</template>

<script>
import TestVuex from '@/components/TestVuex.vue'

export default {
  name: 'App',
  components: {
    TestVuex
  },
  methods: {
    increase() {
      this.$store.commit('increment')
    },
    decrease() {
      this.$store.commit('decrement')
    },
    change() {
      this.$store.dispatch('cook', '做饭了').then(
        res => {
          console.log(res);
        }
      )
    }
  }
}
</script>

<style>


</style>
