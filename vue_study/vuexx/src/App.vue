<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
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
    }
  }
}
</script>

<style>


</style>
