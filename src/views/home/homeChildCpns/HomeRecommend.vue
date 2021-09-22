<template>
  <div id="home-recommend">
    <div class="child" v-for="(item, index) in recommend">
      <img :src="item.image" alt="" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style scoped>
#home-recommend {
  width: 100%;
  padding-top: 10px;
  display: flex;
  /* justify-content: space-between; */
  text-align: center;
  font-size: 14px;
}
.child {
  flex: 1;
  padding: 0 10px;
}
.child img {
  width: 100%;
}
</style>
