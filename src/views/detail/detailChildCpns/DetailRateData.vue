<template>
  <div id="rate-info">
    <div class="user-rate">
      用户评论
      <span>
        更多
        <i></i>
      </span>
    </div>
    <div class="recommends-body">
      <div class="recommends-body-userinfo">
        <img :src="userRecomments.user.avatar" alt="">
        <span>{{userRecomments.user.uname}}</span>
      </div>
      <div class="recommends-body-userrate">{{userRecomments.content}}</div>
      <div class="extra-info">
        <span>{{userRecomments.created | showDate}}</span>
        <span>{{userRecomments.style}}</span>
      </div>
      <div class="rate-img" v-if="userRecomments.images">
        <img :src="img" alt="" v-for="img in userRecomments.images">
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from 'common/utils'
export default {
  props: {
    userRecomments: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showDate (value) {
      const date = new Date(value * 1000);
      return formatDate(date, 'yyyy-MM-dd hh:mm:ss')
    }
  },
  create () {
    console.log('评论组件');

  }
}
</script>

<style scoped>
#rate-info {
  padding: 0 5px 10px 11px;
  font-size: 15px;
}
.user-rate {
  padding: 20px 0;
  border-bottom: 1px solid #e9e9e9;
}
.user-rate span {
  float: right;
  margin-right: 10px;
}
.user-rate span i {
  display: inline-block;
  width: 8px;
  height: 8px;
  transform: rotate(135deg);
  border-top: 1px solid black;
  border-left: 1px solid black;
}
.recommends-body {
  padding-top: 10px;
}
.recommends-body-userinfo img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  vertical-align: middle;
}
.recommends-body-userrate {
  color: #a6a6a6;
  padding-top: 10px;
}
.extra-info {
  padding-top: 10px;
  color: #a6a6a6;
}
.rate-img {
  padding: 10px 0 25px 0;

  display: flex;
  width: 100%;
  border-bottom: 4px solid #e9e9e9;
}
.rate-img img {
  justify-content: space-around;
  height: 75px;
  width: 75px;
  margin-right: 5px;
}
</style>