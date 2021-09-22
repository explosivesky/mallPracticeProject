<template>
  <!-- 因为 轮播图组建中 过去的元素是 slide 所以 必须使用类名 slide -->
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Slide",
}
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>
