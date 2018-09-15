import React, {Component} from "react"
import {connect} from "react-redux"
import LazyLoad from "react-lazyload"
import Icon3HeaderTop from "../../Icon3HeaderTop/Icon3HeaderTop"
import {
  asyncReceiveFindMoreArr
} from "../../../redux/actions"
import dinglei from "./knowthings/dinglei.png"
import jiuyue from "./knowthings/jiuyue.jpg"
import touxiang from "./knowthings/touxiang.jpg"
import dacan from "./knowthings/dacan.jpg"
import drinktea from "./knowthings/drinktea.jpg"

class KnowThings extends Component {
  componentDidMount(){
    this.props.asyncReceiveFindMoreArr()
  }

  render() {
    const {findMoreArr}=this.props
    return (
      <div className="know-things-container">
        <Icon3HeaderTop/>
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">1</div>
            <div className="swiper-slide">2</div>
            <div className="swiper-slide">3</div>
            <div className="swiper-slide">4</div>
          </div>
        </div>
        <div className="recommend-scroll-container">
          <ul className="recommend-list">
            <li className="list-item">
              <div className="img-container">
                <img src={dinglei}/>
              </div>
              <div className="corner">342篇文章</div>
              <p className="discription">严选推荐</p>
            </li>
            <li className="list-item">
              <div className="img-container">
                <img src={dinglei}/>
              </div>
              <div className="corner">342篇文章</div>
              <p className="discription">严选推荐</p>
            </li>
            <li className="list-item">
              <div className="img-container">
                <img src={dinglei}/>
              </div>
              <div className="corner">342篇文章</div>
              <p className="discription">严选推荐</p>
            </li>
            <li className="list-item">
              <div className="img-container">
                <img src={dinglei}/>
              </div>
              <div className="corner">342篇文章</div>
              <p className="discription">严选推荐</p>
            </li>
            <li className="list-item">
              <div className="img-container">
                <img src={dinglei}/>
              </div>
              <div className="corner">342篇文章</div>
              <p className="discription">严选推荐</p>
            </li>
            <li className="list-item">
              <div className="img-container">
                <img src={dinglei}/>
              </div>
              <div className="corner">342篇文章</div>
              <p className="discription">严选推荐</p>
            </li>
          </ul>
        </div>
        <div className="recommend-for-you">
          <p className="title">为你推荐</p>
          <div className="sep-costume">
            <div className="costume-img-container">
              <img src={jiuyue}/>
            </div>
            <div className="corner">严选推荐</div>
            <div className="discription">
              <div className="little-title">
                <span className="main-little-title">9月服饰鞋包上新</span>
                <span className="price">59元起</span>
              </div>
              <div className="slogan">秋天从现在开始，更有超值换季折扣等你哦</div>
            </div>
          </div>
          <div className="food-recommend">
            <div className="disciption">
              <div className="person">
                <img src={touxiang} className="header"/>
                  <span className="name">饮食组：万万</span>
              </div>
              <div className="little-title">10分钟做出异域大餐</div>
              <div className="content ellipsis">
                所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。
              </div>
            </div>
            <div className="img-container">
              <div className="food-img-wrapper">
                <img src={dacan}/>
              </div>
              <div className="corner">挑款师推荐</div>
            </div>
          </div>
          <div className="food-recommend">
            <div className="disciption">
              <div className="person">
                <img src={touxiang} className="header"/>
                  <span className="name">饮食组：万万</span>
              </div>
              <div className="little-title">10分钟做出异域大餐</div>
              <div className="content ellipsis">
                所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。
              </div>
            </div>
            <div className="img-container">
              <div className="food-img-wrapper">
                <img src={dacan}/>
              </div>
              <div className="corner">挑款师推荐</div>
            </div>
          </div>
          <div className="sep-costume">
            <div className="costume-img-container">
              <img src={jiuyue}/>
            </div>
            <div className="corner">严选推荐</div>
            <div className="discription">
              <div className="little-title">
                <span className="main-little-title">9月服饰鞋包上新</span>
                <span className="price">59元起</span>
              </div>
              <div className="slogan">秋天从现在开始，更有超值换季折扣等你哦</div>
            </div>
          </div>
          <div className="food-recommend">
            <div className="disciption">
              <div className="person">
                <img src={touxiang} className="header"/>
                  <span className="name">饮食组：万万</span>
              </div>
              <div className="little-title">10分钟做出异域大餐</div>
              <div className="content ellipsis">
                所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。
              </div>
            </div>
            <div className="img-container">
              <div className="food-img-wrapper">
                <img src={dacan}/>
              </div>
              <div className="corner">挑款师推荐</div>
            </div>
          </div>
          <div className="food-recommend">
            <div className="disciption">
              <div className="person">
                <img src={touxiang} className="header"/>
                  <span className="name">饮食组：万万</span>
              </div>
              <div className="little-title">10分钟做出异域大餐</div>
              <div className="content ellipsis">
                所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。
              </div>
            </div>
            <div className="img-container">
              <div className="food-img-wrapper">
                <img src={dacan}/>
              </div>
              <div className="corner">挑款师推荐</div>
            </div>
          </div>
        </div>
        <div className="quarter-past-ten">
          <div className="title">十点一刻</div>
          <div className="today-topic-container">
            <ul className="today-topic-wrapper">
              <li className="topic-item">
                <p className="title-p">今日话题</p>
                <p className="ques-p">你有哪些租房经历</p>
                <p className="topic-content">聊聊你用过的租房神器</p>
                <div className="topic-persons-number-div">
                  <img src={touxiang} className="header"/>
                    <img src={touxiang} className="header"/>
                      <img src={touxiang} className="header"/>
                        <img src={touxiang} className="header"/>
                          <span className="topic-persons">992人参与话题</span>
                </div>
              </li>
              <li className="topic-item">
                查看全部话题
                <i className="iconfont icon-57"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="zhenpin-container">
          <p className="title">严选甄品</p>
          <div className="sep-costume">
            <div className="costume-img-container">
              <img src={jiuyue}/>
            </div>
            <div className="corner">严选推荐</div>
            <div className="discription">
              <div className="little-title">
                <span className="main-little-title">9月服饰鞋包上新</span>
                <span className="price"></span>
              </div>
              <div className="slogan">秋天从现在开始，更有超值换季折扣等你哦</div>
            </div>
          </div>
          <div className="food-recommend">
            <div className="disciption pub-praise-disc">
              <div className="little-zhenpin-title">10分钟做出异域大餐</div>
              <div className="content ellipsis">
                所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。
              </div>
            </div>
            <div className="img-container pub-praise-img-container">
              <div className="food-img-wrapper">
                <img src={dacan}/>
              </div>
              <div className="corner">挑款师推荐</div>
            </div>
          </div>
          <div className="food-recommend">
            <div className="disciption">
              <div className="little-zhenpin-title">10分钟做出异域大餐</div>
              <div className="content ellipsis">
                所谓美食无国界，虽说中华美食博大精深，但偶尔在家做些异国料理，也是别有一番风味。在海外待过不少时日，遍尝各国美食的我，想给大家推荐几款方便的快手菜，让你10分钟就能品尝到异域大餐。
              </div>
            </div>
            <div className="img-container">
              <div className="food-img-wrapper">
                <img src={dacan}/>
              </div>
              <div className="corner">挑款师推荐</div>
            </div>
          </div>
        </div>
        <div className="look-container">
          <p className="title">严选甄品</p>
          <div className="sep-costume">
            <div className="costume-img-container">
              <img src={drinktea}/>
            </div>
            <div className="discription">
              <div className="little-title">
                <div className="person">
                  <img src={touxiang} className="header"/>
                    <span className="name">饮食组：万万</span>
                </div>
                <span className="price"></span>
              </div>
              <div className="slogan">加了冰块一个小金橘，还是觉得比较甜。照评论员说的，下次用苏打水稀释。因为只优惠了10块钱，我有囤了一瓶～</div>
            </div>
          </div>
        </div>
        <div className="more-wonderful">
          <p className="title">更多精彩</p>
          {findMoreArr.map((item,index)=>(
            <div className="sep-costume" key={index}>
              <div className={"costume-img-container"+(item.picList?" three":"")}>
                {!item.picList
                  ?<LazyLoad><img src={item.scenePicUrl}/></LazyLoad>
                  :<div className="three-img-big-container">
                    <div className="three-img-container">
                      <LazyLoad><img src={item.picList[0]}/></LazyLoad>
                    </div>
                    <div className="three-img-container">
                      <LazyLoad><img src={item.picList[1]}/></LazyLoad>
                      <LazyLoad><img src={item.picList[2]}/></LazyLoad>
                    </div>
                  </div>
                }
              </div>
              <div className="discription">
                <span className="little-discip">{item.title}</span>
              </div>
            </div>
          ))}
  </div>
  </div>
    )
  }
}

export default connect(
  state=>({findMoreArr:state.findMoreArr}),
  {asyncReceiveFindMoreArr}
)(KnowThings)