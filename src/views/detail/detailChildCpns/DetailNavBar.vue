<template>
  <div id="child-nav-bar">
    <nav-bar>
      <div slot="left" class="back" @click="backHome"></div>
      <div slot="middle" class="middle">
        <span
          v-for="(item, index) in option"
          :class="{ isActive: currentIndex === index }"
          @click="handle(index)"
          >{{ item }}</span
        >
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"
export default {
  props: {
    option: {
      type: Array,
      default() {
        return []
      },
    },
    currentIndex: {
      type: Number,
      default: 0,
    },
  },
  components: {
    NavBar,
  },
  methods: {
    backHome() {
      this.$router.push("/home")
    },
    handle(index) {
      this.$emit("scrollToCurrentOption", index)
    },
  },
  computed: {},
}
</script>

<style scoped>
.back:after {
  content: "";
  display: block;
  width: 15px;
  height: 15px;
  border-top: 2px solid black;
  border-right: 2px solid black;
  transform: rotate(-135deg);
  position: relative;
  top: 15px;
  left: 15px;
}
.middle {
  display: flex;
  font-size: 14px;
}
.middle span {
  flex: 1;
}
.isActive {
  color: var(--color-high-text);
}
</style>
