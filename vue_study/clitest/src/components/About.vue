<template>
    <div>
        <h2>内容</h2>
        <h2>{{$route.query.name}}</h2>
        <h2>{{$route.query.age}}</h2>
        <h2>{{$route.query.height}}</h2>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style lang="stylus" scoped>

</style>