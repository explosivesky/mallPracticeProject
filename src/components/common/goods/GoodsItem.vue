<template>
  <div id="goods-item" @click="detailPage">
    <!-- <a :href="goodsItem.link"> -->
    <img class="goods-show" v-lazy="showImage" alt="" />
    <p>{{ goods.title }}</p>
    <div class="info">
      <span class="price">{{ goods.price }}</span>
      <img
        class="collect-icon"
        src="~assets/img/common/collect.svg"
        alt=""
        @load="handle"
      />
      <span class="collect">{{ goods.cfav }}</span>
    </div>
    <!-- </a> -->
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    detailPage() {
      this.$router.push("/detail/" + this.goods.iid)
    },
    handle() {
      this.$route.path.indexOf("/detail") === -1
        ? this.$bus.$emit("homeRefresh", this.refreshPage)
        : this.$bus.$emit("detailRefresh", this.refreshPage)
      //   if (this.$route.path.indexOf('/home') === -1) {
      //     this.$bus.$emit('detailRefresh')
      //   } else {
      //     this.$bus.$emit('homeRefresh')
      //   }
    },
  },
  computed: {
    showImage() {
      return this.goods.image || this.goods.show.img
    },
  },
}
</script>

<style scoped>
#goods-item {
  width: 49%;
  height: 200px;
  margin-bottom: 60px;
  font-size: 12px;
}
p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 00;
}
.goods-show {
  border-radius: 5px;
  height: 226px;
  width: 100%;
}
.collect-icon {
  width: 10px;
  height: 10px;
}
.info {
  text-align: center;
}
.price {
  color: var(--color-tint);
  margin-right: 5px;
}
</style>
