<template>
  <div class="footer_guide">
    <div v-for="(item, index) in items" :key="index" class="guide_item" :class="{on:$route.path===item.to}">
      <router-link :to="item.to" class="icon-container">
        <i class="iconfont" :class="item.iconClass"></i>
        <span>{{item.title}}</span>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items:[
          {title:"首页",to:"/index",iconClass:"icon-shouye"},
          {title:"识物",to:"/knowthings",iconClass:"icon-lifangtilitiduomiantifangkuai"},
          {title:"分类",to:"/categorys",iconClass:"icon-chouti"},
          {title:"购物车",to:"/cart",iconClass:"icon-gouwuche"},
          {title:"个人",to:"/personal",iconClass:"icon-gerenzhongxin"},
        ]
      }
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 1.3rem
    display flex
    .guide_item
      flex 1
      .icon-container
        display flex
        text-align center
        flex-direction column
        align-items center
        color #999999
        span
          font-size .33rem
          margin-top .1rem
          margin-bottom .1rem
        .iconfont
          font-size .6rem
      &.on
        .icon-container
          color #b4282d
</style>
