<template>
  <div class="cart-container">
    <div class="cart-head">
      购物车
      <span class="get-coupon">
        领券
      </span>
    </div>
    <div class="delivery-right">
      <span class="right-item">30天无忧退货</span>
      <span class="right-item">48小时快速退款</span>
      <span class="right-item">满88元免邮费</span>
    </div>
    <div class="cart-content">
      <img src="../../common/images/cart/cartMain.png">
      <span class="little-tip">去添加点什么吧</span>
      <mt-button class="login-button" type="danger">登录</mt-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .cart-container
    height 100%
    box-sizing border-box
    padding-top 1rem
    padding-bottom 1.26rem
  .cart-head
    bottom-border-1px(#e4e4e4)
    width 100%
    height 1rem
    font-size .5rem
    text-align center
    line-height 1rem
    position fixed
    top 0
    left 0
    .get-coupon
      position absolute
      right 0
      top 0
      margin-right .8rem
      font-size .35rem
      color #B4282D
  .delivery-right
    background-color: #e9e9e9!important;
    height 5%
    box-sizing border-box
    padding .2rem 0
    display flex
    justify-content space-around
    .right-item
      font-size .3rem
      color: #666
  .cart-content
    background-color: #e9e9e9!important;
    height 95%
    display flex
    flex-direction column
    justify-content center
    align-items center
    .little-tip
      font-size .36rem
      color #999
      margin-bottom  .5rem
    .login-button
      width 60%
      font-size .38rem
      height 1rem
      background-color: #b4282d
</style>
