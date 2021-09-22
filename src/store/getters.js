export default {
 getCartLength(state) {
  return state.carList.length
 },
 getCartList(state) {
  return state.carList;
 },
 getTotalPrice(state) {
  return state.totalPrice;
 }
}
// export default {
//   getCartLength(state) {
//    //添加购物车数量
//    return state.carList.length
//   },
//   //购物车内容
//   getCartList(state) {
//    return state.carList
//   },
//   //isShowChecked
//   // isShowChecked(state) {
//   //   return state.isChecked
//   // }
//  }