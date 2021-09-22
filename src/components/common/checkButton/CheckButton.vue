<template>
  <div class="check-button" :class="{ check: isChecked }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: 'checkButton',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    },
  },

};
</script>

<style scoped>
.check-button {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #aaaaaa;
}
.check-button img {
  width: 100%;
  height: 100%;
}
.check {
  border-color: #ff1901;
  background-color: #ff1901;
}
</style>
