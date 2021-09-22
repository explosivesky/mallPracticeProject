<template>
  <div id="cart-lsit">
    <div class="cart-list-item">
      <check-button :isChecked="cartList.checked" class="check-btn" @click.native="isShowChecked"></check-button>
      <div class="img">
        <img :src="cartList.topImage" alt="" />
      </div>
      <ul class="item-info">
        <li class="title ellepsis">{{ cartList.title }}</li>
        <li class="desc ellepsis">{{ cartList.desc }}</li>
        <li class="price">
          {{ cartList.newPrice }} <span>×{{ cartList.count }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CheckButton from "components/common/checkButton/CheckButton";
export default {
  data () {
    return {
      cartListData: null
    }
  },
  props: {
    cartList: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  components: {
    CheckButton
  },
  methods: {
    isShowChecked () {
      this.cartList.checked = !this.cartList.checked;
    }
  }
}
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  height: 120px;
  border-bottom: 2px solid #cccccc;
  display: flex;
  align-items: center;
  padding: 10px 15px 10px 3px;
}
.check-btn {
  margin: 0 auto;
}

.cart-list-item .img {
  width: 30%;
  height: 100%;
}
.cart-list-item .img img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.cart-list-item .title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
}
.cart-list-item .desc {
  font-size: 14px;
  margin-bottom: 25px;
}
.cart-list-item .price {
  font-size: 18px;
  color: #f17440;
}
.cart-list-item .price span {
  color: #4d4d4d;
  float: right;
}
.item-info {
  width: 55%;
  margin-left: 5%;
}
.ellepsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
ul > li {
  list-style-type: none;
}
</style>
