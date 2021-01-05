<template>
    <div>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur asperiores pariatur ex, maiores repellat numquam error cupiditate nostrum accusantium, inventore neque? Laudantium voluptates accusantium explicabo fuga vitae voluptatibus repellat!</h2>
        <h2>{{userId}}</h2>
    </div>
</template>

<script>
export default {
    name: "User",
    computed: {
        userId() {
            return this.$route.params.userId
        }
    }
}
</script>

<style lang="stylus" scoped>

</style>