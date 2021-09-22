<template>
  <div id="goods-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="info-desc">
      <div class="start"></div>
      <div class="info-desc-text">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-keys">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item, index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
        @load="handle"
      />
    </div>
  </div>
</template>

<script>
// import { mixin } from 'common/mixins'
export default {
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      count: 0,
      imageLength: 0,
    }
  },
  methods: {
    //方法1.发送事件总线，通过混入接受事件并调用防抖
    handle() {
      this.$emit("scrollRefresh")
    },
    // 方法2.商品展示图片  全部加载完后 在调用 Bscroll 的 refresh 方法
    // handle () {
    //   if (++this.count === this.imageLength) {
    //     this.$emit('scrollRefresh')
    //   }
    // }
  },
  watch: {
    // detailInfo () {
    //   this.imageLength = this.detailInfo.detailImage[0].length
    // }
  },
}
</script>

<style scoped>
.info-desc {
  padding: 20px 15px 15px 15px;
  font-size: 14px;
  position: relative;
}
.start,
.end {
  width: 90px;
  height: 1px;
  float: left;
  background-color: #333;
}
.end {
  float: right;
}
.info-desc .start::before {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  background-color: #333;
  position: absolute;
  top: -5px;
  left: 15px;
}
.info-desc .end::after {
  content: "";
  display: block;
  width: 5px;
  height: 5px;
  background-color: #333;
  position: absolute;
  /* top: -5px; */
  right: 15px;
}
.info-desc-text {
  padding: 15px 0;
}
.info-list img {
  width: 100%;
}
</style>
