import {
 vueSet
} from '../common/utils'

export default {
 addCount(state, payload) {
  vueSet(payload, 'count', payload.count + 1)
 },
 addCart(state, payload) {
  vueSet(payload, 'count', 1);
  vueSet(payload, 'checked', true)
  state.carList.push(payload)
 },
 addPrice(state, payload) {
  state.totalPrice += payload;
 }
}