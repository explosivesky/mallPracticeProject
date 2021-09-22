import Vue from 'vue'

//防抖
export function debounce(fn, delay = 100) {
 let timer = null;
 return function (...args) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(...args, () => {
   //这里的箭头函数 的this 引用的是 匿名函数的 this ，当闭包的情况下，谁引用 匿名函数 this 就指向谁
   fn.apply(this, ...args)
  }, delay)
 }
}
//时间戳转换
function padLeftZero(str) {
 return ("00" + str).substr(str.length);
}

// 时间格式化
export function formatDate(date, fmt) {
 if (/(y+)/.test(fmt)) {
  fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
 }

 let o = {
  "M+": date.getMonth() + 1,
  "d+": date.getDate(),
  "h+": date.getHours(),
  "m+": date.getMinutes(),
  "s+": date.getSeconds()
 };

 for (let k in o) {
  if (new RegExp(`(${k})`).test(fmt)) {
   let str = o[k] + "";
   fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
  }
 }

 return fmt;
}

//Vue.set
export function vueSet(obj, target, val) {
 Vue.set(obj, target, val)
}