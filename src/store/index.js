import Vue from 'vue';
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

//1.安装插件
Vue.use(Vuex);

//2.创建store 对象
const state = {
 carList: [],
 totalPrice: 0
}
const store = new Vuex.Store({
 state: state,
 mutations: mutations,
 //actions 除了放 异步函数以外，也可以把判断逻辑 放到这里面
 actions: actions,
 getters: getters
});

//3.挂载Vue实例上
export default store