export default {
 addCart({
  state,
  commit
 }, payload) {
  return new Promise((resolve, reject) => {
   let exist;
   state.carList.find(item => {
    exist = item;
    return item.iid === payload.iid
   }) ? (commit('addCount', exist), resolve('添加商品成功')) : (commit('addCart', payload), resolve('当前商品数量 + 1'));
  })
 }
}