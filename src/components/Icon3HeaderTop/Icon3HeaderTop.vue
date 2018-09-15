<template>
  <div class="know-things-head">
    <i class="iconfont icon-shouye" @click="$router.replace('/')"></i>
    <i class="iconfont icon-search"></i>
    <i class="iconfont icon-gouwuche"></i>
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

  .know-things-head
    bottom-border-1px(#e4e4e4)
    width 100%
    position fixed
    top 0
    left 0
    z-index 100
    height 1.2rem
    padding 0 .3rem
    box-sizing border-box
    display flex
    background-image: url(../../common/images/index/logo.png)
    background-repeat: no-repeat;
    background-position: center;
    .iconfont
      line-height 1.2rem
      font-size .8rem
      &.icon-search
        margin-left 6.5rem
      &.icon-gouwuche
        margin-left .4rem

</style>
