<template>
    <div class="tab-bar-item" @click="choose">
      <div v-if="isActive"><slot name="item-icon-active"></slot></div>
      <div v-else><slot name="item-icon"></slot></div>
      <div :class="{active: isActive}"><slot name="item-text"></slot></div>
    </div>
</template>
<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    choose() {
      this.$router.replace(this.path);
    }
  }
}
</script>
<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 5px;
    margin-bottom: 2px;
  }
  .active {
    color: red;
  }
</style>