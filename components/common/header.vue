<template>
  <div class="header">
    <div class="wrap-box">
      <nuxt-link class="logo" to="/">
        <img src="@/static/img/common/logo.png" alt="">
      </nuxt-link>
      <div class="nav">
        <nuxt-link active-class="actived" class="link" to="/" exact>首页</nuxt-link>
        <nuxt-link active-class="actived" class="link" to="/a">实时比分</nuxt-link>
        <nuxt-link active-class="actived" class="link" to="/b">赛事赛程</nuxt-link>
        <nuxt-link active-class="actived" class="link" to="/c">全网指数</nuxt-link>
        <nuxt-link active-class="actived" class="link" to="/d">电竞资讯</nuxt-link>
      </div>
      <div class="right-btns">
        <a-button class="login-btn">登录</a-button>
        <a-button class="reg-btn">注册</a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.header{
  min-width: 1200px;
  background: #fff;
  height: 80px;
  box-shadow:0px 2px 4px 0px rgba(0, 0, 0, 0.08);
  .wrap-box{
    position: relative;
    width: 1200px;
    margin: auto;
    height: 80px;
  }
  .logo{
    display: inline-block;
    img{
      width: 135px;
      height: 54px;
      display: inline-block;
      margin-top: 8px;
    }
  }
  .nav{
    display: inline-block;
    font-size: 0;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    .link{
      width: 100px;
      height: 80px;
      line-height: 80px;
      font-size: 16px;
      color: #212121;
      text-align: center;color: #202020;
      transition: all .3s;
      display: inline-block;
      margin: 0 15px;
      &:hover{
        color: #3399EE;
      }
      &.actived{
        background: #3399EE;
        color: #fff;
      }
    }
  }
  .right-btns{
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -15px;
    .login-btn{
      color: #999;
    }
    .reg-btn{
      color: #3399EE;
      border-color: #3399EE;
      margin-left: 10px;
    }
  }
}
</style>
