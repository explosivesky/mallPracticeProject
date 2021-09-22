<template>
  <div id="wrapper" ref="wrapper">
    <div id="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"

export default {
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      scroll: null,
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })
    //将此事件发送出去
    this.scroll.on('scroll', position => {
      this.$emit('scroll', position)
    })
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo (x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh () {
      console.log('刷新');

      this.scroll && this.scroll.refresh()
    },
    getScrollY () {
      //获取当前滚动位置
      return this.scroll ? this.scroll.y : 0
    }
  },
}
</script>

<style scoped></style>
