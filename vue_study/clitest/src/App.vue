<template>
<div id="app">
  <router-link to="/home" tag="button" replace>首页</router-link>
  <button @click="aboutClick">内容</button>
    <router-view></router-view>
  <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
  <!-- <button @click="homeClick">11</button> -->

</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    // homeClick() {
    //   this.$router.push('/home')  //通过代码
    //   console.log('home');
    // },
    aboutClick() {
      this.$router.push({
        path: '/about',
        query: {
          name: 'kitty',
          age: '20',
          height: '1.90'
        }
      })
    }
  }
}
</script>

<style>
 .active {
   color: red;
 }
</style>
