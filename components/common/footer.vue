<template>
  <div class="footer">
    <div class="wrap-box">
      <div class="foot-top">
        <div class="foot-top-left">
          <p class="title">
            关于我们
            <span class="description">尚牛电竞旗下</span>
          </p>
          <div class="contact">
            <span class="item">
              <img class="icon" src="@/static/img/common/logo-sm.png" alt="">
              <nuxt-link to="" class="text">尚牛电竞微博</nuxt-link>
            </span>
            <span class="item">
              <img class="icon" src="@/static/img/common/logo-sm.png" alt="">
              <nuxt-link to="" class="text">尚牛电竞公众号</nuxt-link>
            </span>
            <span class="item">
              <img class="icon" src="@/static/img/common/logo-sm.png" alt="">
              <nuxt-link to="" class="text">尚牛电竞知乎</nuxt-link>
            </span>
          </div>
          <div class="foot-nav">
            <ul class="col">
              <nuxt-link to="" class="link">英雄联盟</nuxt-link>
              <nuxt-link to="" class="link">英雄联盟资讯</nuxt-link>
              <nuxt-link to="" class="link">英雄联盟赛程</nuxt-link>
              <nuxt-link to="" class="link">英雄联盟数据</nuxt-link>
            </ul>
            <ul class="col">
              <nuxt-link to="" class="link">DOTA2</nuxt-link>
              <nuxt-link to="" class="link">DOTA2资讯</nuxt-link>
              <nuxt-link to="" class="link">DOTA2赛程</nuxt-link>
              <nuxt-link to="" class="link">DOTA2数据</nuxt-link>
            </ul>
            <ul class="col">
              <nuxt-link to="" class="link">CS:GO</nuxt-link>
              <nuxt-link to="" class="link">CS:GO资讯</nuxt-link>
              <nuxt-link to="" class="link">CS:GO赛程</nuxt-link>
              <nuxt-link to="" class="link">CS:GO数据</nuxt-link>
            </ul>
            <ul class="col">
              <nuxt-link to="" class="link">王者荣耀</nuxt-link>
              <nuxt-link to="" class="link">王者荣耀资讯</nuxt-link>
              <nuxt-link to="" class="link">王者荣耀赛程</nuxt-link>
              <nuxt-link to="" class="link">王者荣耀数据</nuxt-link>
            </ul>
            <ul class="col">
              <nuxt-link to="" class="link">守望先锋</nuxt-link>
              <nuxt-link to="" class="link">守望先锋资讯</nuxt-link>
              <nuxt-link to="" class="link">守望先锋赛程</nuxt-link>
              <nuxt-link to="" class="link">守望先锋数据</nuxt-link>
            </ul>
          </div>
          <p class="title">
            友情链接
            <span class="description">友链申请QQ：891804921</span>
          </p>
          <div class="contact">
            <span class="item">
              <nuxt-link to="" class="text">尚牛电竞微博</nuxt-link>
            </span>
            <span class="item">
              <nuxt-link to="" class="text">尚牛电竞公众号</nuxt-link>
            </span>
            <span class="item">
              <nuxt-link to="" class="text">尚牛电竞知乎</nuxt-link>
            </span>
          </div>
        </div>
        <div class="foot-top-right">
          <div class="foot-codes">
            <div class="foot-code">
              <p class="text">88比分网公众号</p>
              <img src="@/static/img/common/code.png" alt="">
            </div>
            <div class="foot-code">
              <p class="text">尚牛电竞APP</p>
              <img src="@/static/img/common/code.png" alt="">
            </div>
          </div>
          <div class="foot-email">
            <p class="key">合作邮箱</p>
            <p class="value">chaofanesport@163.com</p>
          </div>
        </div>
      </div>
    </div>
    <div class="foot-btm">
      4324
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
.footer{
  min-width: 1200px;
  background: #fff;
  .wrap-box{
    position: relative;
    width: 1200px;
    margin: auto;
  }
  .foot-top{
    padding: 30px 0;
  }
  .foot-top-left{
    .title{
      color: #555;
      font-size: 16px;
      padding-bottom:20px;
      .description{
        font-size: 14px;
        padding-left: 11px;
      }
    }
    .contact{
      .item{
        padding-right: 19px;
      }
      .icon{
        width: 21px;
        height: 18px;
      }
      .text{
        font-size: 14px;
        color: #999;
      }
    }
    .foot-nav{
      padding-bottom: 18px;
      margin-top: 30px;
      .col{
        display: inline-block;
        margin-right: 70px;
      }
      .link{
        display: block;
        color: #999;
        font-size: 14px;
        margin-bottom: 12px;
        &:first-child{
          color: #555;
          font-size: 16px;
          cursor: auto;
        }
      }
    }
  }
  .foot-top-right{
    position: absolute;
    right: 0;
    top: 31px;
    border-left: solid 1px rgba(245,245,245,1);
    padding-left: 31px;
    .foot-code{
      display: inline-block;
      margin-right: 70px;
      .text{
        font-size: 16px;
        color: #555;
        padding-top: 8px;
      }
      img{
        width: 101px;
        height: 101px;
        display: block;
        margin: 25px auto 35px;
      }
    }
    .foot-email{
      width: 392px;
      height: 80px;
      background:rgba(245,245,245,1);
      padding: 0 20px;
      line-height: 1;
      .key{
        font-size: 16px;
        color:rgba(85,85,85,1);
        padding: 21px 0 11px;
      }
      .value{
        font-size: 14px;
        color:rgba(153,153,153,1)
      }
    }
  }
  .foot-btm{
    border-top: 1px solid rgba(245,245,245,1);
    min-width: 1200px;
    margin: auto;
  }
}

</style>
