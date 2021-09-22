<template>
  <div id="toast" v-show="show">{{message}}</div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      show: false
    }
  },
  methods: {
    //用于外部 $toast 来调用
    isShow (msg = '请输入文字参数', duration = 2000) {
      this.message = msg;
      this.show = true;
      setTimeout(() => {
        this.show = false
      }, duration)
    }
  }
}
</script>

<style scoped>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px 10px;
  transform: translate(-50%, -50%);
  color: #ffffff;
  border-radius: 5px;
  z-index: 13;
  font-size: 14px;
}
</style>