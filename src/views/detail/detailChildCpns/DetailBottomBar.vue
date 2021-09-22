<template>
  <div id="detail-bottom-bar">
    <ul class="left">
      <li class="left-child">
        <div class="service">
          <p class="service-bgc"></p>
        </div>
        <span>客服</span>
      </li>
      <li class="left-child">
        <div class="shop">
          <p class="shop-bgc"></p>
        </div>
        <span>店铺</span>
      </li>
      <li class="left-child">
        <div class="collaction">
          <p class="collaction-bgc"></p>
        </div>
        <span>收藏</span>
      </li>
    </ul>
    <ul class="right">
      <li class="right-child left-bgc" @click="addShopCar">加入购物车</li>
      <li class="right-child right-bgc">购买</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    addShopCar () {
      this.$emit('addShopCar')
    }
  }
}
</script>

<style scoped>
#detail-bottom-bar {
  width: 100%;
  height: 60px;
  display: flex;
  text-align: center;
  font-size: 14px;
}
#detail-bottom-bar ul {
  flex: 1;
}
li {
  list-style-type: none;
}
#detail-bottom-bar .left .left-child {
  flex: 1;
}
#detail-bottom-bar .right .right-child {
  flex: 1;
  line-height: 60px;
}
#detail-bottom-bar .left {
  display: flex;
}
#detail-bottom-bar .right {
  display: flex;
}
.left-child p {
  width: 22px;
  height: 22px;
  margin: 0 auto;
  position: absolute;
  top: 7px;
  left: 0;
  bottom: 0;
  right: 0;
}

.service-bgc {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 41%/100%
    600%;
}
.shop-bgc {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 76%/100%
    600%;
}
.collaction-bgc {
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 -2%/100% 600%;
}
.left-bgc {
  background-color: #ffde0e;
}
.right-bgc {
  background-color: #ff779a;
  color: #fff;
}
.service,
.shop,
.collaction {
  width: 100%;
  height: 30px;
  display: flex;
  position: relative;
}
.left-child span {
  display: block;
  width: 100%;
  height: 30px;
  line-height: 30px;
}
</style>