<template>
  <div class="personal-container">
    <Icon3HeaderTop/>
    <div class="login-main" v-if="!isPhonePwdLogin && !isEmailPwdLogin">
      <div class="img-container">
        <img src="../../common/images/personal/mainLogo.png">
      </div>
      <div @click="isPhonePwdLogin=!isPhonePwdLogin" class="login-button phone-login-button">
        <i class="iconfont icon-shouji"></i>
        <span class="phone-button-text">手机号码登录</span>
      </div>
      <div @click="isEmailPwdLogin=!isEmailPwdLogin" class="login-button email-login-button">
        <i class="iconfont icon-email"></i>
        <span class="phone-button-text">邮箱账号登录</span>
      </div>
      <span class="register-tip">手机号快捷注册></span>
    </div>
    <PhonePwdLogin :switchMethod="PhonePwdMethod" v-if="isPhonePwdLogin"/>
    <EmailPwdLogin :switchMethod="EmailPwdMethod" v-if="isEmailPwdLogin"/>
    <div class="login-footer" v-if="!isPhonePwdLogin && !isEmailPwdLogin">
      <span class="footer-icon">
        <i class="iconfont icon-weixin"></i>
        <span class="icon-name">微信</span>
      </span>
      <span class="footer-icon">
        <i class="iconfont icon-web-icon-"></i>
        <span class="icon-name">QQ</span>
      </span>
      <span class="footer-icon">
        <i class="iconfont icon-weibo"></i>
        <span class="icon-name">微博</span>
      </span>
    </div>
  </div>
</template>
<script>
  import Icon3HeaderTop from "../../components/Icon3HeaderTop/Icon3HeaderTop.vue"
  import PhonePwdLogin from "../../components/PhonePwdLogin/PhonePwdLogin.vue"
  import EmailPwdLogin from "../../components/EmailPwdLogin/EmailPwdLogin.vue"
  import MtButton from "../../../node_modules/mint-ui/packages/button/src/button.vue";

  export default {
    data() {
      return {
        isPhonePwdLogin:false,
        isEmailPwdLogin:false
      }
    },
    methods: {
      PhonePwdMethod(){
        this.isPhonePwdLogin=false
      },
      EmailPwdMethod(){
        this.isEmailPwdLogin=false
      }
    },
    computed: {},
    components: {
      MtButton,
      Icon3HeaderTop,
      PhonePwdLogin,
      EmailPwdLogin
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .personal-container
    height 100%
    background-color: #F2F5F4;
    box-sizing border-box
    padding-top 1.2rem
    position relative
    .login-main
      background-color: transparent!important;
      display flex
      flex-direction column
      justify-content center
      align-items center
      .img-container
        height 5.5rem
        text-align center
        line-height 5.5rem
        img
          height 1.2rem
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
      .register-tip
        font-size .35rem
        color #333
    .login-footer
      background-color: transparent!important;
      position absolute
      left 0
      bottom 1.3rem
      display flex
      justify-content center
      width 100%
      .footer-icon
        color #7F7F7F
        border-right .02rem solid #979797
        box-sizing border-box
        padding 0 .5rem
        display flex
        justify-content center
        .iconfont
          font-size .5rem
          margin-right .1rem
        .icon-name
          font-size .4rem
        &:last-child
          border none
</style>
