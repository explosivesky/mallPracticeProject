<template>
  <div id="calculate-price">
    <div class="left">
      <check-button :isChecked="isChecked" @click.native="handle"></check-button>
      <span>全选</span>
    </div>
    <div class="center">
      合计:{{totalPrice}}
    </div>
    <div class="right">去计算({{calculateCount}})</div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";
import { mapGetters } from 'vuex';

export default {

  data () {
    return {
      totalCount: 0,
    }
  },
  components: {
    CheckButton
  },
  computed: {
    ...mapGetters(['getCartLength', 'getCartList', 'getTotalPrice']),
    totalPrice () {
      return '￥' + this.getTotalPrice
    },
    calculateCount () {
      let totalCount = 0;
      this.getCartList.forEach(item => {
        totalCount += item.count
      })
      return totalCount;
    },
    isChecked () {
      //遍历 购物车商品，如果有一个是 false 那么返回的是 false，全是 true 才返回 true
      return this.getCartList.every(item => {
        return item.checked
      })
    }
  },
  methods: {
    handle () {
      if (this.isChecked) {
        this.$store.state.carList.forEach(item => {
          item.checked = false;
        })
      } else {
        this.$store.state.carList.forEach(item => {
          item.checked = true;
        })
      }
    }
  }
}
</script>

<style scoped>
#calculate-price {
  width: 100%;
  height: 30px;
  /* background-color: blue; */
  display: flex;
  align-items: center;
}
.left {
  margin-left: 5px;
  width: 20%;
  display: flex;
  font-size: 14px;
  color: #ccc;
}
.center {
  font-size: 16px;
  flex: 1;
}
.right {
  background-color: #ff1901;
  color: #ffffff;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
  width: 30%;
}
</style>