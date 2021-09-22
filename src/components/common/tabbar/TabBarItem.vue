<template>
  <div id="tab-bar-item" @click="handle">
    <div v-if="!isActive">
      <slot name="icon"></slot>
    </div>
    <div v-else>
      <slot name="icon-active"></slot>
    </div>
    <div :style="{ color: styleActive }">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
    },
    styleColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {}
  },
  methods: {
    handle() {
      this.$router.push(this.link).catch((err) => err)
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1
    },
    styleActive() {
      return this.isActive ? this.styleColor : ""
    },
  },
}
</script>

<style scoped>
#tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
#tab-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 5px;
}
</style>
