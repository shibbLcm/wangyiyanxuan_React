<template>
  <div class="good-page-container">
    <div class="img-title-container">
      <img :src="currentGoodObj.bannerUrl">
    </div>
    <div class="good-ul-container">
      <ul class="good-ul">
        <li class="good-ul-item" v-for="(item,index) in currentGoodObj.subCateList" :key="index">
          <img :src="item.bannerUrl" class="icon-img">
          <span class="item-name">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {mapState} from "vuex"

  export default {
    props:{
      currentGoodObj:Object
    },
    data() {
      return {}
    },
    methods: {},
    computed: {
      ...mapState(["categoryArr"])
    },
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .good-page-container
    height 100%
    box-sizing border-box
    padding .4rem .4rem 0
    .img-title-container
      height 20%
      box-sizing border-box
      padding-bottom .4rem
      font-size 0
      img
        width 100%
    .good-ul-container
      height 80%
      .good-ul
        width 100%
        display flex
        flex-wrap wrap
        .good-ul-item
          width 33.33333%
          box-sizing border-box
          padding 0 .2rem
          display flex
          flex-direction column
          justify-content space-between
          align-items center
          .icon-img
            width 100%
          .item-name
            font-size .2rem
</style>
