<template>
  <div id="shop-cart">
    <nav-bar class="nav-bar">
      <div slot="middle">购物车({{cartListCpt}})</div>
    </nav-bar>
    <scroll :probeType="3" class="wrapper" :pullUpLoad="true" ref="wrapper">
      <cart-list-item :key="index" v-for="(item, index) in cartList" :cart-list="item"></cart-list-item>
    </scroll>
    <calculate-price></calculate-price>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
import Scroll from "../../components/common/scroll/scroll";
import CartListItem from "./shopCarChildCops/CartListItem";
import CalculatePrice from './shopCarChildCops/CalculatePrice'

import { mapGetters } from 'vuex'

export default {
  components: {
    NavBar,
    Scroll,
    CartListItem,
    CalculatePrice
  },
  activated () {
  },
  computed: {
    ...mapGetters(['getCartList', 'getCartLength']),
    cartList () {
      return this.getCartList;
    },
    cartListCpt () {
      return this.getCartLength
    }
  }
};
</script>

<style scoped>
#shop-cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
}
.wrapper {
  height: calc(100% - 93px - 30px);
  overflow: hidden;
}
</style>
