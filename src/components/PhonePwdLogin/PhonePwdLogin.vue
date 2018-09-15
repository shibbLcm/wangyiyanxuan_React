<template>
  <div class="phonepwdlogin-container">
    <div class="img-container">
      <img src="../../common/images/personal/mainLogo.png">
    </div>
    <form class="main-form">
      <div class="input-container">
        <input type="text" placeholder="请输入手机号">
      </div>
      <div class="input-container">
        <input type="text" placeholder="请输入密码">
      </div>
      <div class="under-input-div">
        <span class="forget">忘记密码？</span>
        <span class="change-method">使用短信验证登录</span>
      </div>
      <button type="submit" class="login-button phone-login-button">
        <span class="phone-button-text">登录</span>
      </button>
    </form>
    <div class="login-button email-login-button">
      <span class="phone-button-text" @click="switchMethod">其他登录方式</span>
    </div>
    <span class="register-count">注册账号></span>
  </div>
</template>
<script>
  export default {
    props:["switchMethod"],
    data() {
      return {

      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .phonepwdlogin-container
    /*background-color: transparent!important;*/
    height 100%
    display flex
    flex-direction column
    align-items center
    .img-container
      text-align center
      margin-top .7rem
      margin-bottom 2rem
      img
        height .8rem
    .main-form
      width 100%
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      .input-container
        width 90%
        height 1.3rem
        box-sizing border-box
        border-bottom .01rem solid #c5cddb
        padding 0 3rem 0 .3rem
        input
          width 100%
          height 60%
          outline none
          &::-webkit-input-placeholder
            font-size .35rem
            color #7f7f7f
      .under-input-div
        width 90%
        margin .5rem 0
        display flex
        justify-content space-between
        span
          font-size .4rem
          &.forget
            color #7f7f7f
          &.change-method
            color: #333
    .phone-login-button
      background-color: #b4282d;
      color white
      margin-bottom .4rem
    .email-login-button
      color #b4282d
      box-sizing border-box
      border .03rem solid #b4282d
      margin-bottom .4rem
    .login-button
      height: 1.3rem
      width 90%
      border-radius .1rem
      display flex
      justify-content center
      align-items center
      .iconfont
        font-size .6rem
        margin-right .2rem
      .phone-button-text
        font-size .35rem
    .register-count
      font-size .35rem
</style>
