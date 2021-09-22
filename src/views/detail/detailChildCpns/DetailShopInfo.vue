<template>
  <div id="shop-info" v-if="Object.keys(shop).length!== 0">
    <div class="shop-info-icon">
      <img :src="shop.shopLogo" alt=""><span>{{shop.name}}</span>
    </div>
    <div class="shop-info-show">
      <div class="solid">
        <div class="shop-info-show-sells flex">
          <span>{{shop.sells | sellsCountFeilter}}</span>
          <span>{{shop.goodsCount}}</span>
        </div>
        <div class="shop-info-show-text flex">
          <span>总销量</span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-info-show-score">
        <table>
          <tr v-for="item in shop.score">
            <td>{{item.name}}</td>
            <td class="score" :class="{'is-better' : item.isBetter}">{{item.score}}</td>
            <td class="score-more" :class="{'score-more-better' : item.isBetter}">{{item.isBetter ? "高" : "低"}}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    sellsCountFeilter (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + '万'
    }

  }
}
</script>

<style scoped>
.shop-info-icon {
  padding: 44px 5px;
}
.shop-info-icon img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border: 1px solid #9c9c9c;
  vertical-align: middle;
  margin-right: 10px;
}
.shop-info-show {
  display: flex;
  position: relative;
}
.shop-info-show div {
  flex: 1;
}
.flex {
  display: flex;
  justify-content: space-around;
}
.solid {
  border-right: 2px solid #e9e9e9;
  position: absolute;
  top: 15px;
  left: 0;
  right: 50%;
  text-align: center;
}
.shop-info-show-sells {
  margin-bottom: 13px;
  font-size: 20px;
}
.shop-info-show-sells :nth-child(2) {
  margin-left: -12px;
}
.shop-info-show-text {
  font-size: 15px;
  padding-left: 8px;
}
.shop-info-show-score {
  position: absolute;
  top: 0;
  left: 50%;
  right: 0;
  font-size: 15px;
}
.shop-info-show-score table {
  width: 135px;
  margin-left: 15px;
}
.shop-info-show-score table td {
  padding: 5px 0;
}
.shop-info-show-score .score {
  color: #5ea732;
}
.shop-info-show-score .is-better {
  color: #f13e3a;
}
.shop-info-show-score .score-more {
  background-color: #5ea732;
  color: #ffffff;
}
.shop-info-show-score .score-more-better {
  background-color: #f13e3a;
}
.shop-bottom {
  text-align: center;
  margin-top: 90px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>