<template>
  <div class="categorys-container">
    <div class="categorys-head">
      <div class="input-div">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品, 共13237款好物</span>
      </div>
    </div>
    <div class="categorys-content">
      <div class="categorys-ul-container">
        <ul class="categorys-ul">
          <li class="categorys-ul-item" v-for="(item,index) in categoryArr"
              :key="index" :class="{on:selectedIndex===index}" @click="selectedIndex=index">{{item.name}}</li>
        </ul>
      </div>
      <div class="goods-ul-container">
        <CategoryGoodPage :currentGoodObj="currentGoodObj"/>
      </div>
    </div>
  </div>
</template>
<script>
  import BScroll from "better-scroll"
  import {mapState} from "vuex"
  import CategoryGoodPage from "../../components/CategoryGoodPage/CategoryGoodPage.vue"

  export default {
    mounted(){
      this.$store.dispatch("getCategoryArr")
      new BScroll(".categorys-ul-container",{
        scrollX:false,
        scrollY:true
      })
    },
    data() {
      return {
        selectedIndex:0
      }
    },
    methods: {},
    watch:{

    },
    computed: {
      ...mapState(["categoryArr"]),
      currentGoodObj(){
        return this.categoryArr.find((item,index)=>index===this.selectedIndex)
      }
    },
    components: {
      CategoryGoodPage
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .categorys-container
    height 100%
    box-sizing border-box
    padding-top 1.3rem
    padding-bottom 1.26rem
  .categorys-head
    bottom-border-1px(#e4e4e4)
    position fixed
    top 0
    left 0
    box-sizing border-box
    height 1.3rem
    width 100%
    padding 0 .5rem
    display flex
    flex-direction column
    justify-content center
    .input-div
      padding .2rem 0
      display flex
      border-radius .2rem
      background-color: #eee;
      justify-content center
      .iconfont
        font-size .4rem
      .placeholder
        font-size .4rem
  .categorys-content
    height 100%
    display flex
    .categorys-ul-container
      height 100%
      width 20%
      position relative
      overflow hidden
      &::after
        position absolute
        top 0
        right 0
        content ""
        width 1px
        height 100%
        background-color: #e4e4e4;

      .categorys-ul
        width 100%
        .categorys-ul-item
          width 100%
          height 1rem
          text-align center
          line-height 1rem
          font-size .4rem
          margin-top .5rem
          box-sizing border-box
          border-left .1rem solid transparent
          &.on
            color #ab2b2b
            border-left .1rem solid #ab2b2b
    .goods-ul-container
      height 100%
      width 80%
</style>
