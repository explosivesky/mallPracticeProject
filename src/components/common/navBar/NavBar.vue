<template>
  <div id="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle">
      </slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#nav-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
}

.middle {
  flex: 1;
  font-size: 16px;
}

.left,
.right {
  width: 60px;
}
</style>
