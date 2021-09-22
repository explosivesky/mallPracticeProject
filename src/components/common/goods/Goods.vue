<template>
  <div id="goods">
    <goods-item :key="index" v-for="(item,index) in goods" :goods="item"></goods-item>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  components: {
    GoodsItem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
#goods {
  display: flex;
  flex-wrap: wrap;
  padding: 0px 6px 6px 6px;
  justify-content: space-between;
  width: 100%;
}
</style>