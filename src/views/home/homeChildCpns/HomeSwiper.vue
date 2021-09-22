<template>
  <swiper>
    <swiper-item :key="index" v-for="(item, index) in banner">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="homeSwiperLoaded" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper"
export default {
  props: {
    banner: {
      type: Array,
      default () {
        return []
      },
    },
  },
  data () {
    return {
      swiperThrottle: false
    }
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    homeSwiperLoaded () {
      if (!this.swiperThrottle) {
        this.$emit('homeSwiperLoaded')
        this.swiperThrottle = true
      }
    }
  }
}
</script>

<style scoped></style>
