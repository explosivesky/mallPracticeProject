import Vue from 'vue';
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Profile = () => import('../views/profile/Profile.vue')
const ShopCart = () => import('../views/shopcart/ShopCart.vue')
const Detail = () => import('../views/detail/Detail.vue')

const routes = [{
  path: '',
  redirect: '/home'
 },
 {
  path: '/home',
  component: Home
 }, {
  path: '/category',
  component: Category
 }, {
  path: '/profile',
  component: Profile
 }, {
  path: '/shopCart',
  component: ShopCart
 },
 {
  path: '/detail/:iid',
  component: Detail
 }
];

const router = new vueRouter({
 routes,
 mode: 'history'
});
export default router;