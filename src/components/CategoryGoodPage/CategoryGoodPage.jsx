import React,{Component} from "react"
import PropTypes from "prop-types"

export default class CategoryGoodPage extends Component{
  /*static propTypes={
    currentGoodObj:PropTypes.object.isRequired
  }*/

  render(){
    const {currentGoodObj}=this.props
    return (
      <div className="good-page-container">
        <div className="img-title-container">
          <img src={currentGoodObj?currentGoodObj.bannerUrl:undefined}/>
        </div>
        <div className="good-ul-container">
          <ul className="good-ul">
            {currentGoodObj?currentGoodObj.subCateList.map((item,index)=>(
              <li className="good-ul-item" key={index}>
                <img src={item.bannerUrl} className="icon-img"/>
                <span className="item-name">{item.name}</span>
              </li>
            )):null}
        </ul>
      </div>
  </div>
    )
  }
}