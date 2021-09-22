import Toast from './Toast.vue';
import Vue from 'vue';

const obj = {};
obj.install = function (Vue) {
 //创建组件构造器，并 new 
 const toastConstructor = Vue.extend(Toast);
 const toast = new toastConstructor()
 toast.$mount(document.createElement('div'));
 document.body.appendChild(toast.$el)
 Vue.prototype.$toast = toast;
};
export default obj