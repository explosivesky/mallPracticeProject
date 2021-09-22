<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item link="/home">
        <img slot="icon" src="~assets/img/tabBar/home.svg" alt="" />
        <img
          slot="icon-active"
          src="~assets/img/tabBar/home_active.svg"
          alt=""
        />
        <div slot="text">
          首页
        </div>
      </tab-bar-item>
      <tab-bar-item link="/category">
        <img slot="icon" src="~assets/img/tabBar/category.svg" alt="" />
        <img
          slot="icon-active"
          src="~assets/img/tabBar/category_active.svg"
          alt=""
        />
        <div slot="text">
          分类
        </div>
      </tab-bar-item>
      <tab-bar-item link="/shopcart">
        <img slot="icon" src="~assets/img/tabBar/shopcart.svg" alt="" />
        <img
          slot="icon-active"
          src="~assets/img/tabBar/shopcart_active.svg"
          alt=""
        />
        <div slot="text">
          购物车
        </div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
        <img slot="icon" src="~assets/img/tabBar/profile.svg" alt="" />
        <img
          slot="icon-active"
          src="~assets/img/tabBar/profile_active.svg"
          alt=""
        />
        <div slot="text">
          我的
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar"
import TabBarItem from "components/common/tabbar/TabBarItem"
export default {
  components: {
    TabBar,
    TabBarItem,
  },
}
</script>

<style></style>
