import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import VueLazyLoad from "vue-lazyload"
import FastClick from "fastclick"
import store from './store'
import toast from './components/common/toast'

Vue.config.productionTip = false

//创建事件总线
Vue.prototype.$bus = new Vue()
//创建插件
Vue.use(toast);
//懒加载
Vue.use(VueLazyLoad, {
 loading: require("./assets/img/common/微信图片_20210726175120.jpg"),
})
FastClick.attach(document.body)
new Vue({
 render: (h) => h(App),
 router,
 store,
}).$mount("#app")