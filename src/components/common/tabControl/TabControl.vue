<template>
  <!-- <div id="tab-control">
    <div class="child" :key="index" v-for="(item,index) in title" @click="handle(index)">
      <span :class="{ active: index === currentIndex }">{{ item }}</span>
    </div>
  </div> -->

  <div id="tab-control">
    <div class="child" :key="index" v-for="(item, index) in title" @click="handle(index)">
      <span :class="{ active: index === currentIndex }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Array,
      default () {
        return []
      },
    },
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    handle (index) {
      this.currentIndex = index;
      this.$emit('control', index)
    }
  },

}
</script>

<style scoped>
#tab-control {
  width: 100%;
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
  position: relative;
  z-index: 2;
  background-color: #ffffff;
}
.child {
  flex: 1;
}
.active {
  padding: 5px;
  border-bottom: 3px solid var(--color-high-text);
  color: var(--color-high-text);
}
</style>
