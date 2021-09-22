<template>
  <div id="home">
    <nav-bar class="nav">
      <span slot="middle" class="title">购物街</span>
    </nav-bar>
    <tab-control :title="title" @control="control" v-show="isShow" ref="control1" class="tab-control"></tab-control>
    <scroll class="scroll" :probeType="2" :pullUpLoad="true" @pullingUp="pullLoadMore" ref="scroll" @scroll="scrollFn">
      <home-swiper :banner="banner" @homeSwiperLoaded="homeSwiperLoaded"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <feature-views></feature-views>
      <tab-control :title="title" @control="control" ref="control2"></tab-control>
      <goods :goods="goodsData" ref="goods"></goods>
    </scroll>
    <back-top v-show="isShowBack" @click.native="backToTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navBar/NavBar"
import HomeSwiper from "views/home/homeChildCpns/HomeSwiper"
import HomeRecommend from "views/home/homeChildCpns/HomeRecommend"
import FeatureViews from "views/home/homeChildCpns/FeatureViews"
import Scroll from "components/common/scroll/scroll"
import TabControl from "components/common/tabControl/TabControl"
import Goods from 'components/common/goods/Goods'

//网络请求
import { getMultiData, geiHomeGoods } from "network/home"

//工具
import { debounce } from '../../common/utils'
import { refreshMixin, backTopMixin } from '../../common/mixin'
export default {
  mixins: [refreshMixin, backTopMixin],
  data () {
    return {
      banner: [],
      recommend: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      totalType: ['pop', 'new', 'sell'],
      currentType: 'pop',
      themeY: 0,
      currentPositionY: 0,
      isShow: false,

    }
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    FeatureViews,
    Scroll,
    TabControl,
    Goods,
  },
  activated () {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.currentPositionY, 0);
  },
  deactivated () {
    this.currentPositionY = this.$refs.scroll.getScrollY()
    this.$bus.$off('homeRefresh', this.refreshPage)
  },
  created () {
    this._getMultiData()
    this._geiHomeGoods('pop')
    this._geiHomeGoods('new')
    this._geiHomeGoods('sell')
  },
  methods: {
    homeSwiperLoaded () {
      this.themeY = this.$refs.control2.$el.offsetTop;
    },
    _getMultiData () {
      getMultiData().then((res) => {
        let data = res.data
        this.banner = data.data.banner.list
        this.recommend = data.data.recommend.list
      })
    },
    _geiHomeGoods (type) {
      let page = this.goods[type].page + 1;
      geiHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list)
        this.goods[type].page++;
      })
    },
    control (index) {
      //根据点击的 商品 类型，获取当前商品类型的 数据
      this.currentType = this.totalType[index]
      this.$refs.control1.currentIndex = index;
      // this.$refs.control2.currentIndex = index;
    },
    pullLoadMore () {
      this._geiHomeGoods(this.currentType);
      this.$refs.scroll.scroll.finishPullUp();
      this.$refs.scroll.refresh();
    },
    scrollFn (position) {
      this.isShow = (-position.y) >= this.themeY;
      this.isBackTopFn(position)
    },

  },
  computed: {
    //将当前选中的商品的 数据 传进 goods 组件中 进行渲染
    goodsData () {
      return this.goods[this.currentType].list
    }
  }
}
</script>

<style scoped>
.title {
  color: #ffffff;
}
#home {
  height: 100vh;
  position: relative;
}
.scroll {
  height: calc(100% - 49px - 44px);
  overflow: hidden;
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
}
.nav {
  background-color: var(--color-tint);
}
/* .tab-control {
  position: relative;
  z-index: 9;
} */
</style>
