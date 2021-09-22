import {
 request
} from './request';

export function getMultiData() {
 return request({
  url: '/home/multidata'
 })
}

export function geiHomeGoods(type, page) {
 return request({
  url: '/home/data',
  params: {
   type,
   page
  }
 })
}