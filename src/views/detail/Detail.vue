<template>
  <div id="detail">
    <detail-nav-bar :option="['商品', '参数', '评论', '推荐']" :current-index="currentIndex" @scrollToCurrentOption="scrollToCurrentOption"></detail-nav-bar>
    <scroll :probe-type="3" :pull-up-load="true" class="scroll" ref="scroll" @scroll="scrollFn">
      <detail-swiper :swiper-data="swiperData"></detail-swiper>
      <detail-base-info :goods-data="goodsData"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @scrollRefresh="scrollRefresh"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="params"></detail-param-info>
      <detail-rate-data :user-recomments="userRecomments" ref="rate"></detail-rate-data>
      <goods :goods="recommend" ref="recommend"></goods>
    </scroll>
    <detail-bottom-bar class="bottom-btn" @addShopCar="addShopCar"></detail-bottom-bar>
    <back-top class="back-top" v-show="isShowBack" @click.native="backToTop" />
  </div>
</template>

<script>
import DetailNavBar from "./detailChildCpns/DetailNavBar"

//获取数据
import { getDetailData, GoodsData, Shop, GoodsParam } from "network/detail"
import { request } from "../../network/request"

//工具
import { backTopMixin } from "../../common/mixin"
import { formatDate } from "../../common/utils"
import { debounce } from "../../common/utils"
//组件
import DetailSwiper from "./detailChildCpns/DetailSwiper"
import DetailBaseInfo from "./detailChildCpns/DetailBaseInfo"
import DetailBottomBar from "./detailChildCpns/DetailBottomBar"
import scroll from "components/common/scroll/scroll"
import DetailShopInfo from "./detailChildCpns/DetailShopInfo"
import DetailGoodsInfo from "./detailChildCpns/DetailGoodsInfo"
import DetailParamInfo from "./detailChildCpns/DetailParamInfo"
import DetailRateData from "./detailChildCpns/DetailRateData"
import Goods from "components/common/goods/Goods"

export default {
  name: "Detail",
  mixins: [backTopMixin],
  data () {
    return {
      iid: "",
      swiperData: null,
      goodsData: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      userRecomments: {},
      recommend: [],
      refsTopY: [],
      currentIndex: 0,
      getThemeY: null,
      goodsInfoRefresh: null,
      refsArr: [],
      index: 0,
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailBottomBar,
    scroll,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailRateData,
    Goods,
  },
  destroyed () {
    this.$bus.$off("detailRefresh", this.refreshPage)
  },
  created () {
    this.iid = this.$route.params.iid
    getDetailData(this.iid).then((res) => {
      let data = res.data
      console.log(data);

      let obj = {
        topImages: data.result.itemInfo.topImages,
        itemInfo: data.result.itemInfo,
        columns: data.result.columns,
        shopInfo: data.result.shopInfo,
        services: data.result.shopInfo.services,
        detailInfo: data.result.detailInfo,
        info: data.result.itemParams.info,
        rule: data.result.itemParams.rule,
      }
      let {
        topImages,
        itemInfo,
        columns,
        services,
        shopInfo,
        detailInfo,
        info,
        rule,
      } = obj
      //轮播图数据
      this.swiperData = topImages
      //基本信息数据
      this.goodsData = new GoodsData(itemInfo, columns, services)
      //商店信息
      this.shopInfo = new Shop(shopInfo)
      //商品图片
      this.detailInfo = detailInfo
      //商品尺寸
      this.paramInfo = new GoodsParam(info, rule)
      //买家评论数据
      if (data.result.rate.cRate !== 0) {
        this.userRecomments = data.result.rate.list[0]
      }
      //详情页的推荐数据
      request({
        url: "/recommend",
      }).then((res) => {
        this.recommend = res.data.data.list
      })
      this.refsArr = Object.keys(this.$refs)

      this.getThemeY = debounce(() => {
        this.refsTopY.push(0)
        let offsetTop
        this.refsArr.forEach((item) => {
          offsetTop = this.$refs[item].$el.offsetTop
          item === "scroll" ||
            (offsetTop !== undefined && this.refsTopY.push(offsetTop - 44))
        })
      }, 100)
    })
  },
  mounted () {
    this.goodsInfoRefresh = debounce(() => {
      this.$refs.scroll.refresh()
    })
  },
  methods: {
    scrollFn (position) {
      this.isBackTopFn(position)
      let positionY = -position.y
      let arr = this.refsTopY.filter((item) => {
        return positionY >= item
      })
      if (arr.length === 3 && this.refsTopY.length === 3) {
        this.currentIndex = arr.length
      } else if (arr.length !== 0) {
        this.currentIndex = arr.length - 1
      }
    },
    //图片加载后执行
    scrollRefresh () {
      this.getThemeY()
      this.goodsInfoRefresh()
    },
    scrollToCurrentOption (index) {
      if (this.refsTopY.length === 3 && index === 2) return
      this.refsTopY.length === 3 && index === 3 ?
        this.$refs.scroll.scrollTo(0, -this.refsTopY[index - 1], 500) :
        this.$refs.scroll.scrollTo(0, -this.refsTopY[index], 500)
    },
    addShopCar () {
      let product = {
        topImage: this.swiperData[0],
        title: this.goodsData.title,
        desc: this.goodsData.desc,
        newPrice: this.goodsData.realPrice,
        iid: this.iid
      };
      this.$store.dispatch('addCart', product).then(res => {
        this.$toast.isShow(res, 2000)
      })

      let addNumber = this.goodsData.realPrice.indexOf('.') ? this.goodsData.realPrice : this.goodsData.realPrice + '00'
      this.$store.commit('addPrice', addNumber * 1)
    }
  },

}
</script>

<style scoped>
#detail {
  height: 100vh;
}
.scroll {
  height: calc(100% - 44px - 60px);
  overflow: hidden;
}
.bottom-btn {
  position: relative;
  bottom: 0;
  left: 0;
  z-index: 12;
  background-color: #fff;
}
.back-top {
  position: relative;
  z-index: 15;
}
</style>
