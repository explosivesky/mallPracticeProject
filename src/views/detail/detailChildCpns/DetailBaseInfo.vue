<template>
  <div id="goodsInfo" v-if="Object.keys(goodsData).length !== 0">
    <div class="title"><span>{{goodsData.title}}</span></div>
    <div>
      <span class="newPrice" :style="{color:goodsData.discountBgColor}">{{goodsData.newPrice}}</span>
      <span class="oldPrice">{{goodsData.oldPrice}}</span>
      <span class="discountDesc" :style="{background:goodsData.discountBgColor}" v-if="goodsData.discountDesc">{{goodsData.discountDesc}}</span>
    </div>
    <div class="info-other">
      <span>{{goodsData.columns[0]}}</span>
      <span>{{goodsData.columns[1]}}</span>
      <span>{{goodsData.services.length === 4 ? goodsData.services[goodsData.services.length-1].name : ''}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="(item,index) in goodsData.services.slice(1,4)" :key="index">
        <img :src="goodsData.services[index].icon">
        <span>{{goodsData.services[index].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsData: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>
<style scoped>
#goodsInfo {
  padding: 0px 5px;
}
.title {
  font-size: 20px;
  margin-bottom: 20px;
}
.newPrice {
  font-size: 20px;
  margin-right: 5px;
}
.oldPrice {
  color: #9c9c9c;
  margin-right: 5px;
  font-size: 12px;
  text-decoration: line-through;
}
.discountDesc {
  /* display: block; */
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 2px 5px;
  font-weight: 700;
  color: #ffffff;
  font-size: 12px;
}
.info-other {
  margin-top: 25px;
  padding-bottom: 8px;
  display: flex;
  font-size: 12px;
  color: #9c9c9c;
  justify-content: space-between;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
}
.info-server {
  height: 60px;
  line-height: 60px;
}
.info-service {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 25px 0px;
  border-bottom: 2px solid rgba(100, 100, 100, 0.1);
}
.info-service-item img {
  height: 16px;
  width: 16px;
  vertical-align: bottom;
}
</style>