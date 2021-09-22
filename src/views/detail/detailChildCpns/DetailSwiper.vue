<template>
  <div id="detail-swiper">
    <swiper>
      <swiper-item alt="" v-for="(item,index) in swiperData" :key="index">
        <img :src="item">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  components: {
    Swiper, SwiperItem
  },
  props: {
    swiperData: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
#detail-swiper {
  height: 300px;
  overflow: hidden;
  margin-bottom: 20px;
}
#detail-swiper img {
  width: 100%;
  height: 100%;
}
</style>