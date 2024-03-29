import {
 request
} from 'network/request';

export function getDetailData(iid) {
 return request({
  url: '/detail',
  params: {
   iid
  }
 })
}

export class GoodsData {
 constructor(itemInfo, columns, services) {
  this.title = itemInfo.title
  this.desc = itemInfo.desc
  this.newPrice = itemInfo.price
  this.oldPrice = itemInfo.oldPrice
  this.discountDesc = itemInfo.discountDesc
  this.discountBgColor = itemInfo.discountBgColor
  this.columns = columns
  this.services = services
  this.realPrice = itemInfo.lowNowPrice
 }
}

export class Shop {
 constructor(shopInfo) {
  this.shopLogo = shopInfo.shopLogo;
  this.name = shopInfo.name;
  this.fans = shopInfo.cFans;
  this.sells = shopInfo.cSells;
  this.score = shopInfo.score;
  this.goodsCount = shopInfo.cGoods
 }
}

export class GoodsParam {
 constructor(info, rule) {
  // 注: images可能没有值(某些商品有值, 某些没有值)
  this.image = info.images ? info.images[0] : '';
  this.infos = info.set;
  this.sizes = rule.tables;
 }
}