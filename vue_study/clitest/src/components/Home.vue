<template>
    <div>
        <h2>首页</h2>
        <p>内容</p>
        <router-view></router-view>
        <router-link to="/home/news">新闻</router-link>
    </div>
</template>

<script>
export default {
    name: "Home"
}
</script>

<style lang="stylus" scoped>

</style>