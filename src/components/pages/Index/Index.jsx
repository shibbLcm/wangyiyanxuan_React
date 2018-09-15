import React, {Component} from "react"
import BScroll from "better-scroll"
import juice from "../../../assets/images/index/juice.png"
import baixie from "../../../assets/images/index/baixie.png"
import xingli from "../../../assets/images/index/xingli.png"
import gaogen from "../../../assets/images/index/gaogen.png"
import shangxin from "./index/shangxin.png"
import beizi from "./index/beizi.png"
import shouji from "./index/shouji.png"
import fenxiang from "./index/fenxiang.png"
import fengli from "./index/fengli.jpg"
import fulishe from "./index/fulishe.jpg"

export default class Index extends Component {
  scrollArr=["推荐", "居家", "鞋包配饰", "服装", "电器", "洗护", "饮食"]
  swiperArr=["1", "2", "3"]
  advantageArr= ["网易自营品牌", "30天无忧退货", "48小时快速退款"]
  manufacturerArr= [
    {name: "海外制造商", price: "9.9", icon: true, bgImg: juice},
    {name: "CK制造商", price: "25", icon: true, bgImg: baixie},
    {name: "新秀丽制造商", price: "159", icon: false, bgImg: xingli},
    {name: "Nine West制造商", price: "209", icon: true, bgImg: gaogen}
    ]

  componentDidMount(){
    const scroll_wrapper= new BScroll(".scroll_wrapper", {
      scrollX: true,
      scrollY: false,
      eventPassthrough: "vertical"
    })
    const first_out=new BScroll(".first-out-scroller", {
      scrollX: true,
      scrollY: false,
      eventPassthrough: "vertical"
    })
    const popular=new BScroll(".popular-scroller", {
      scrollX: true,
      scrollY: false,
      eventPassthrough: "vertical"
    })
    const special=new BScroll(".special-scroller", {
      scrollX: true,
      scrollY: false,
      eventPassthrough: "vertical"
    })
    /*const swiper=new Swiper(".swiper-container", {
      autoplay: true,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
    })*/
  }

  render() {
    const {scrollArr,swiperArr,advantageArr,manufacturerArr}=this

    return (
      <div className="index-container">
        <div className="index_head">
          <a href="javascript:;" className="logo_container"/>
          <div className="input_div">
            <i className="iconfont icon-search"/>
            <span className="placeholder">搜索商品, 共13111款好物</span>
          </div>
        </div>
        <div className="scroll_wrapper">
          <ul className="scroll_ul">
            {scrollArr.map((item,index)=>(
              <li key={index}>{scrollArr[index]}</li>
            ))}
          </ul>
      </div>
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {swiperArr.map((item,index)=>(
          <div className="swiper-slide" key={index}>
            {swiperArr[index]}
          </div>
        ))}
    </div>
    <div className="swiper-pagination"></div>
  </div>
    <div className="advantage">
      {advantageArr.map((item,index)=>(
        <div className="advantage-item" key={index}>
          <i className="iconfont icon-quangou"></i>
          <span className="advantage-text">{advantageArr[index]}</span>
        </div>
      ))}
  </div>
    <div className="direct-supply">
      <div className="ds-head">
        品牌制造商直供
        <i className="iconfont icon-57"></i>
      </div>
      <div className="manufacturer-list">
        {manufacturerArr.map((item,index)=>(
          <div className="manufacturer-item"
               style={{backgroundImage:'url('+item.bgImg+')'}}
               key={index}>
          <p className="manufacturer-name">{item.name}</p>
          <p className="price">{item.price}元起</p>
          {item.icon?
            <p className="up-new">
              <img src={shangxin} alt="up-new"/>
            </p>:
            null
          }
        </div>))}
      </div>
  </div>
    <div className="first-out-container">
      <div className="first-out-head">
        <span className="title">新品首发</span>
        <span className="button-span">
          查看全部
          <i className="iconfont icon-you"></i>
        </span>
      </div>
      <div className="first-out-scroller">
        <ul className="first-out-container">
          <li className="first-out-item">
            <div>
              <div className="item-img">
                <img src={shouji}/>
              </div>
              <span className="name ellipsis">网易有道翻译王 2.0pro</span>
              <span className="discription ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
              <span className="price">¥1688</span>
            </div>
          </li>
          <li className="first-out-item">
            <div>
              <div className="item-img">
                <img src={shouji}/>
              </div>
              <span className="name ellipsis">网易有道翻译王 2.0pro</span>
              <span className="discription ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
              <span className="price">¥1688</span>
            </div>
          </li>
          <li className="first-out-item">
            <div>
              <div className="item-img">
                <img src={shouji}/>
              </div>
              <span className="name ellipsis">网易有道翻译王 2.0pro</span>
              <span className="discription ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
              <span className="price">¥1688</span>
            </div>
          </li>
          <li className="first-out-item">
            <div>
              <div className="item-img">
                <img src={shouji}/>
              </div>
              <span className="name ellipsis">网易有道翻译王 2.0pro</span>
              <span className="discription ellipsis">随身离线翻译神器 预售送100元礼品卡</span>
              <span className="price">¥1688</span>
            </div>
          </li>
          <li className="first-out-last-item">
            <div>
              <div className="query-all">查看全部</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="popular-container">
      <div className="popular-head">
        <span className="title">人气推荐 · 好物精选</span>
        <span className="button-span">
          查看全部
          <i className="iconfont icon-you"></i>
        </span>
      </div>
      <div className="popular-scroller">
        <ul className="popular-container">
          <li className="popular-item">
            <div>
              <div className="item-img">
                <img src={fenxiang}/>
              </div>
              <span className="name ellipsis">20寸全铝镁合金登机箱</span>
              <span className="discription ellipsis">41升超薄坚固 100%铝镁合金</span>
              <span className="price">¥699</span>
            </div>
          </li>
          <li className="popular-item">
            <div>
              <div className="item-img">
                <img src={fenxiang}/>
              </div>
              <span className="name ellipsis">20寸全铝镁合金登机箱</span>
              <span className="discription ellipsis">41升超薄坚固 100%铝镁合金</span>
              <span className="price">¥699</span>
            </div>
          </li>
          <li className="popular-item">
            <div>
              <div className="item-img">
                <img src={fenxiang}/>
              </div>
              <span className="name ellipsis">20寸全铝镁合金登机箱</span>
              <span className="discription ellipsis">41升超薄坚固 100%铝镁合金</span>
              <span className="price">¥699</span>
            </div>
          </li>
          <li className="popular-item">
            <div>
              <div className="item-img">
                <img src={fenxiang}/>
              </div>
              <span className="name ellipsis">20寸全铝镁合金登机箱</span>
              <span className="discription ellipsis">41升超薄坚固 100%铝镁合金</span>
              <span className="price">¥699</span>
            </div>
          </li>
          <li className="popular-last-item">
            <div>
              <div className="query-all">查看全部</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="limit-buy">
      <div className="timer-container">
        <span className="title">严选限时购</span>
        <span className="timer-recip">
          <span className="number">01</span>
          <span className="colon">：</span>
          <span className="number">59</span>
          <span className="colon">：</span>
          <span className="number">52</span>
        </span>
        <span className="next-time">
          <span>下一场</span>
          <span>18：00</span>
          <span>开始</span>
        </span>
      </div>
      <div className="limit-good">
        <div className="circle">
          <span className="new">¥67</span>
          <span className="old">¥89</span>
        </div>
      </div>
    </div>
    <div className="fulishe-container">
      <img src={fulishe}/>
    </div>
    <div className="special-container">
      <div className="special-head">
        专题精选
        <i className="iconfont icon-57"></i>
      </div>
      <div className="special-scroller">
        <ul className="special-container">
          <li className="special-item">
            <div>
              <div className="item-img">
                <img src={fengli}/>
              </div>
              <div>
                <span className="name">吃得到果肉的, 才是真凤梨酥</span>
                <span className="discription">38元起</span>
              </div>
              <span className="price">47%凤梨果肉</span>
            </div>
          </li>
          <li className="special-item">
            <div>
              <div className="item-img">
                <img src={fengli}/>
              </div>
              <div>
                <span className="name">吃得到果肉的, 才是真凤梨酥</span>
                <span className="discription">38元起</span>
              </div>
              <span className="price">47%凤梨果肉</span>
            </div>
          </li>
          <li className="special-item">
            <div>
              <div className="item-img">
                <img src={fengli}/>
              </div>
              <div>
                <span className="name">吃得到果肉的, 才是真凤梨酥</span>
                <span className="discription">38元起</span>
              </div>
              <span className="price">47%凤梨果肉</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="living-at-home">
      <div className="title">居家好物</div>
      <ul className="list">
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item last-item">
          <div className="last">
            <span className="more">更多居家好物</span>
            <i className="iconfont icon-youjiantou"></i>
          </div>
        </li>
      </ul>
    </div>
    <div className="living-at-home">
      <div className="title">居家好物</div>
      <ul className="list">
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item">
          <img className="item-img" src={beizi}/>
            <div className="discription">优质食材，薯类膨化多肉配方</div>
            <span className="name">全期猫粮 1.8KG</span>
            <div className="price">¥88</div>
        </li>
        <li className="item last-item">
          <div className="last">
            <span className="more">更多居家好物</span>
            <i className="iconfont icon-youjiantou"></i>
          </div>
        </li>
      </ul>
    </div>
  </div>
    )
  }
}