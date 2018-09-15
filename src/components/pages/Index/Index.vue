<template>
  <!--<div class="index-bscroll">-->
    <div class="index-container">
      <div class="index_head">
        <a href="javascript:;" class="logo_container"></a>
        <div class="input_div">
          <i class="iconfont icon-search"></i>
          <span class="placeholder">搜索商品, 共13111款好物</span>
        </div>
      </div>
      <div class="scroll_wrapper">
        <ul class="scroll_ul">
          <li v-for="(item, index) in scrollArr" :key="index">{{scrollArr[index]}}</li>
        </ul>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item ,index) in swiperArr" :key="index">
            <!--里面装img-->
            {{swiperArr[index]}}
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <div class="advantage">
        <div class="advantage-item" v-for="(item,index) in advantageArr" :key="index">
          <i class="iconfont icon-quangou"></i>
          <span class="advantage-text">{{advantageArr[index]}}</span>
        </div>
      </div>
      <div class="direct-supply">
        <div class="ds-head">
          品牌制造商直供
          <i class="iconfont icon-57"></i>
        </div>
        <div class="manufacturer-list">
          <div class="manufacturer-item" :style="{backgroundImage:'url('+item.bgImg+')'}"
               v-for="(item,index) in manufacturerArr" :key="index">
            <p class="manufacturer-name">{{item.name}}</p>
            <p class="price">{{item.price}}元起</p>
            <p class="up-new" v-if="item.icon">
              <img src="../../common/images/index/shangxin.png" alt="up-new">
            </p>
          </div>
        </div>
      </div>
      <div class="first-out-container">
        <div class="first-out-head">
          <span class="title">新品首发</span>
          <span class="button-span">
          查看全部
          <i class="iconfont icon-you"></i>
        </span>
        </div>
        <div class="first-out-scroller">
          <ul class="first-out-container">
            <li class="first-out-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/shouji.png">
                </div>
                <span class="name ellipsis">网易有道翻译王 2.0pro</span>
                <span class="discription ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
                <span class="price">¥1688</span>
              </div>
            </li>
            <li class="first-out-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/shouji.png">
                </div>
                <span class="name ellipsis">网易有道翻译王 2.0pro</span>
                <span class="discription ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
                <span class="price">¥1688</span>
              </div>
            </li>
            <li class="first-out-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/shouji.png">
                </div>
                <span class="name ellipsis">网易有道翻译王 2.0pro</span>
                <span class="discription ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
                <span class="price">¥1688</span>
              </div>
            </li>
            <li class="first-out-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/shouji.png">
                </div>
                <span class="name ellipsis">网易有道翻译王 2.0pro</span>
                <span class="discription ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
                <span class="price">¥1688</span>
              </div>
            </li>
            <li class="first-out-last-item">
              <div>
                <div class="query-all">查看全部</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="popular-container">
        <div class="popular-head">
          <span class="title">人气推荐 · 好物精选</span>
          <span class="button-span">
          查看全部
          <i class="iconfont icon-you"></i>
        </span>
        </div>
        <div class="popular-scroller">
          <ul class="popular-container">
            <li class="popular-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/fenxiang.png">
                </div>
                <span class="name ellipsis">20寸全铝镁合金登机箱</span>
                <span class="discription ellipsis">41升超薄坚固 100%铝镁合金</span>
                <span class="price">¥699</span>
              </div>
            </li>
            <li class="popular-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/fenxiang.png">
                </div>
                <span class="name ellipsis">20寸全铝镁合金登机箱</span>
                <span class="discription ellipsis">41升超薄坚固 100%铝镁合金</span>
                <span class="price">¥699</span>
              </div>
            </li>
            <li class="popular-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/fenxiang.png">
                </div>
                <span class="name ellipsis">20寸全铝镁合金登机箱</span>
                <span class="discription ellipsis">41升超薄坚固 100%铝镁合金</span>
                <span class="price">¥699</span>
              </div>
            </li>
            <li class="popular-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/fenxiang.png">
                </div>
                <span class="name ellipsis">20寸全铝镁合金登机箱</span>
                <span class="discription ellipsis">41升超薄坚固 100%铝镁合金</span>
                <span class="price">¥699</span>
              </div>
            </li>
            <li class="popular-last-item">
              <div>
                <div class="query-all">查看全部</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="limit-buy">
        <div class="timer-container">
          <span class="title">严选限时购</span>
          <span class="timer-recip">
          <span class="number">01</span>
          <span class="colon">：</span>
          <span class="number">59</span>
          <span class="colon">：</span>
          <span class="number">52</span>
        </span>
          <span class="next-time">
          <span>下一场</span>
          <span>18：00</span>
          <span>开始</span>
        </span>
        </div>
        <div class="limit-good">
          <div class="circle">
            <span class="new">¥67</span>
            <span class="old">¥89</span>
          </div>
        </div>
      </div>
      <div class="fulishe-container">
        <img src="../../common/images/index/fulishe.jpg">
      </div>
      <div class="special-container">
        <div class="special-head">
          专题精选
          <i class="iconfont icon-57"></i>
        </div>
        <div class="special-scroller">
          <ul class="special-container">
            <li class="special-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/fengli.jpg">
                </div>
                <div>
                  <span class="name">吃得到果肉的, 才是真凤梨酥</span>
                  <span class="discription">38元起</span>
                </div>
                <span class="price">47%凤梨果肉</span>
              </div>
            </li>
            <li class="special-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/fengli.jpg">
                </div>
                <div>
                  <span class="name">吃得到果肉的, 才是真凤梨酥</span>
                  <span class="discription">38元起</span>
                </div>
                <span class="price">47%凤梨果肉</span>
              </div>
            </li>
            <li class="special-item">
              <div>
                <div class="item-img">
                  <img src="../../common/images/index/fengli.jpg">
                </div>
                <div>
                  <span class="name">吃得到果肉的, 才是真凤梨酥</span>
                  <span class="discription">38元起</span>
                </div>
                <span class="price">47%凤梨果肉</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="living-at-home">
        <div class="title">居家好物</div>
        <ul class="list">
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item last-item">
            <div class="last">
              <span class="more">更多居家好物</span>
              <i class="iconfont icon-youjiantou"></i>
            </div>
          </li>
        </ul>
      </div>
      <div class="living-at-home">
        <div class="title">居家好物</div>
        <ul class="list">
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item">
            <img class="item-img" src="../../common/images/index/beizi.png">
            <div class="discription">优质食材，薯类膨化多肉配方</div>
            <span class="name">全期猫粮 1.8KG</span>
            <div class="price">¥88</div>
          </li>
          <li class="item last-item">
            <div class="last">
              <span class="more">更多居家好物</span>
              <i class="iconfont icon-youjiantou"></i>
            </div>
          </li>
        </ul>
      </div>
    </div>
  <!--</div>-->
</template>
<script>
  import BScroll from "better-scroll"
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"

  export default {
    mounted() {
     /* new BScroll(".index-bscroll",{
        scrollX: true,
        scrollY: false
      })*/
      new BScroll(".scroll_wrapper", {
        scrollX: true,
        scrollY: false,
        eventPassthrough: "vertical"
      })
      new BScroll(".first-out-scroller", {
        scrollX: true,
        scrollY: false,
        eventPassthrough: "vertical"
      })
      new BScroll(".popular-scroller", {
        scrollX: true,
        scrollY: false,
        eventPassthrough: "vertical"
      })
      new BScroll(".special-scroller", {
        scrollX: true,
        scrollY: false,
        eventPassthrough: "vertical"
      })
      new Swiper(".swiper-container", {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        }
      })
    },
    data() {
      return {
        scrollArr: ["推荐", "居家", "鞋包配饰", "服装", "电器", "洗护", "饮食"],
        swiperArr: ["1", "2", "3"],
        advantageArr: ["网易自营品牌", "30天无忧退货", "48小时快速退款"],
        manufacturerArr: [
          {name: "海外制造商", price: "9.9", icon: true, bgImg: "static/images/index/juice.png"},
          {name: "CK制造商", price: "25", icon: true, bgImg: "static/images/index/baixie.png"},
          {name: "新秀丽制造商", price: "159", icon: false, bgImg: "static/images/index/xingli.png"},
          {name: "Nine West制造商", price: "209", icon: true, bgImg: "static/images/index/gaogen.png"}
        ]
      }
    },
    /*watch:{
      scrollArr(){
        this.$nextTick(()=>{
          new BScroll(".scroll_wrapper")
        })
      }
    },*/
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .index-container
    margin-top 2rem
    margin-bottom 1.26rem
  .index_head
    position fixed
    top 0
    left 0
    z-index 1000
    width 100%
    box-sizing border-box
    height 1.3rem
    padding .2rem
    display flex
    justify-content space-between
    .logo_container
      display inline-block
      width 25%
      height 1rem
      background-image: url(../../common/images/index/logo.png);
      background-position: center;
      background-repeat: no-repeat;
      background-size 80%
    .input_div
      padding 0 1rem
      border-radius .15rem
      background-color: #ededed;
      display flex
      font-size .4rem
      color: #666
      line-height .8rem
      .iconfont
        font-size .4rem
  .scroll_wrapper
    position fixed
    top 1.2rem
    left 0
    z-index 1000
    height .7rem
    width 100%
    .scroll_ul
      height 100%
      float left
      white-space nowrap
      li
        position relative
        top -.4rem
        left 0
        height 100%
        display inline-block
        line-height .7rem
        font-size .4rem
        text-align center
        padding 0 .2rem
        margin-left .4rem
        &:first-child
          color #b4282d
          border-bottom .1rem solid #b4282d

  .swiper-container
    width 100%
    height 4.5rem
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        text-align center
        line-height 4.5rem

  .advantage
    height .6rem
    margin-bottom .2rem
    display flex
    justify-content space-around
    .advantage-item
      display flex
      align-items center
      .iconfont
        font-size .4rem
        color: #b4282d
        margin-right .1rem
      .advantage-text
        font-size .3rem

  .direct-supply
    /*height 7.5rem*/
    margin-bottom .2rem
    .ds-head
      height 1.3rem
      font-size .5rem
      text-align center
      line-height 1.3rem
      .iconfont
        font-size .5rem
    .manufacturer-list
      /*height 6.2rem*/
      box-sizing border-box
      padding 0 .2rem .2rem 0
      overflow hidden
      .manufacturer-item
        width /*4.7rem*/50%
        height 2.8rem
        font-size .5rem
        float left
        box-sizing border-box
        border-width  .2rem 0 0 .2rem
        border-color white
        border-style solid
        background-color #ededed
        background-size: contain
        background-repeat:no-repeat;
        p
          font-size .4rem
          margin .2rem 0 0 .2rem

  .first-out-container
    height 10.5rem
    border-bottom .3rem solid #e9e9e9
    .first-out-head
      height 3.5rem
      margin-bottom 1rem
      background-color #e3f2fe
      display flex
      flex-direction column
      justify-content center
      align-items center
      .title
        font-size .5rem
        margin-bottom .3rem
      .button-span
        font-size .35rem
        padding .2rem 1.2rem
        background-color #cfdbe7
        .iconfont
          font-size .3rem

    .first-out-scroller
      height 6rem
      .first-out-container
        height 100%
        float left
        white-space nowrap
        .first-out-item
          width 4rem
          height 5.8rem
          margin 0 0 .2rem .2rem
          display inline-block
          > div
            width 100%
            height 5.8rem
            display flex
            flex-direction column
            font-size .38rem
            .item-img
              width 100%
              height 4rem
              text-align center
              background-color #e9e9e9
              img
                height 100%
            .name
              display block
              width 4rem
              color #333
            .discription
              display block
              width 4rem
              color #7f7f7f
            .price
              color #b4282d
        .first-out-last-item
          position relative
          top -1.75rem
          left 0
          width 4rem
          height 5.8rem
          margin 0 0 .2rem .2rem
          display inline-block
          > div
            width 100%
            height 5.8rem
            display flex
            flex-direction column
            .query-all
              width 100%
              height 4rem
              color: #666
              font-size .35rem
              box-sizing border-box
              border .1rem solid #e9e9e9
              background-color #fff
              text-align center
              line-height 4rem

  .popular-container
    height 10.5rem
    border-bottom .3rem solid #e9e9e9
    .popular-head
      height 3.5rem
      margin-bottom 1rem
      background-color #fff4d4
      display flex
      flex-direction column
      justify-content center
      align-items center
      .title
        font-size .5rem
        margin-bottom .3rem
      .button-span
        font-size .35rem
        padding .2rem 1.2rem
        background-color #ece1c5
        .iconfont
          font-size .3rem

    .popular-scroller
      height 6rem
      .popular-container
        height 100%
        float left
        white-space nowrap
        .popular-item
          width 4rem
          height 5.8rem
          margin 0 0 .2rem .2rem
          display inline-block
          > div
            width 100%
            height 5.8rem
            display flex
            flex-direction column
            font-size .38rem
            .item-img
              width 100%
              height 4rem
              text-align center
              background-color #e9e9e9
              img
                height 100%
            .name
              display block
              width 4rem
              color #333
            .discription
              display block
              width 4rem
              color #7f7f7f
            .price
              color #b4282d
        .popular-last-item
          position relative
          top -1.75rem
          left 0
          width 4rem
          height 5.8rem
          margin 0 0 .2rem .2rem
          display inline-block
          > div
            width 100%
            height 5.8rem
            display flex
            flex-direction column
            .query-all
              width 100%
              height 4rem
              color: #666
              font-size .35rem
              box-sizing border-box
              border .1rem solid #e9e9e9
              background-color #fff
              text-align center
              line-height 4rem

  .limit-buy
    height 5rem
    border-bottom .3rem solid #e9e9e9
    display flex
    justify-content space-between
    .timer-container
      width 50%
      height 100%
      display flex
      flex-direction column
      justify-content center
      > span
        padding-left .8rem
        &.title
          font-size .53rem
        &.timer-recip
          margin-bottom .3rem
          .number
            font-size .37rem
            color white
            background-color: #444;
            padding .1rem .2rem
            border-radius .1rem
          .colon
            font-size .4rem
            margin 0 -.4rem
        &.next-time
          font-size .32rem
    .limit-good
      width 50%
      height 100%
      position relative
      background-image: url(../../common/images/index/pen.png)
      background-repeat: no-repeat;
      background-position: center
      .circle
        width 1.8rem
        height 1.8rem
        border-radius 50%
        background-color: rgba(244, 143, 24, .95)
        position absolute
        right .5rem
        bottom .5rem
        display flex
        flex-direction column
        justify-content center
        align-items center
        span
          color white
          margin-top .2rem
          font-size .5rem

  .fulishe-container
    font-size 0
    border-bottom .3rem solid #e9e9e9
    img
      width 100%
  .special-container
    height 7.7rem
    border-bottom .3rem solid #e9e9e9
    .special-head
      height 1.5rem
      font-size .5rem
      text-align center
      line-height 1.5rem
      margin-bottom .3rem
      .iconfont
        font-size .5rem
    .special-scroller
      height 6rem
      .special-container
        height 100%
        float left
        white-space nowrap
        .special-item
          width 7.2rem
          height 5.8rem
          margin 0 0 .2rem .2rem
          display inline-block
          > div
            width 100%
            height 5.8rem
            display flex
            flex-direction column
            font-size .38rem
            .item-img
              width 100%
              height 4rem
              text-align center
              background-color #e9e9e9
              margin-bottom .3rem
              img
                height 100%
            > div
              display flex
              justify-content space-between
              .name
                color #333
              .discription
                color #b4282d
            .price
              margin-top .25rem
              color #7f7f7f

  .living-at-home
    border-bottom .3rem solid #e9e9e9
    .title
      height 1.5rem
      font-size .4rem
      text-align center
      line-height 1.5rem
    .list
      display flex
      flex-wrap wrap
      .item
        width 50%
        box-sizing border-box
        padding 0 .2rem .5rem
        display flex
        flex-direction column
        .item-img
          width 100%
          background-color: #eee;
        .discription
          font-size .3rem
          padding .2rem
          color #9F8A60
          background-color: #F1ECE2
        .name
          font-size .4rem
          margin-top .3rem
        .price
          color: #b4282d
          font-size .45rem
        &.last-item
          display flex
          flex-direction column
          justify-content center
          .last
            height 2.5rem
            display flex
            flex-direction column
            justify-content space-between
            align-items center
            .more
              font-size .5rem
            .iconfont
              font-size .8rem
</style>
