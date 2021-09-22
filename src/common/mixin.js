import {
 debounce
} from '../common/utils'

export const refreshMixin = {
 data() {
  return {
   refreshPage: null,
   newRefresh: null
  }
 },
 mounted() {
  this.newRefresh = debounce(this.$refs.scroll.refresh);
  this.refreshPage = () => {
   this.newRefresh();
  };
  this.$route.path.indexOf('/detail') === -1 ? this.$bus.$on('homeRefresh', this.refreshPage) : this.$bus.$on('detailRefresh', this.refreshPage);
 }
}


import BackTop from 'components/common/backTop/BackTop'

export const backTopMixin = {
 data() {
  return {
   isShowBack: false,
  }
 },
 components: {
  BackTop
 },
 methods: {
  backToTop() {
   this.$refs.scroll.scrollTo(0, 0, 300)
  },
  isBackTopFn(position) {
   this.isShowBack = (-position.y) >= 230
  }
 }
}