import React, {Component} from "react"
import {connect} from "react-redux"
import CategoryGoodPage from "../../CategoryGoodPage/CategoryGoodPage"
import {
  asyncReceiveCategoryArr
} from "../../../redux/actions"

class Categorys extends Component {
  constructor(){
    super()
    this.state={
      selectedIndex:0
    }
  }

  componentDidMount(){
    this.props.asyncReceiveCategoryArr()
  }

  render() {
    const {selectedIndex} =this.state
    const {categoryArr}=this.props
    const currentGoodObj=categoryArr.find((item,index)=>index===selectedIndex)
    return (
      <div className="categorys-container">
        <div className="categorys-head">
          <div className="input-div">
            <i className="iconfont icon-search"></i>
            <span className="placeholder">搜索商品, 共13237款好物</span>
          </div>
        </div>
        <div className="categorys-content">
          <div className="categorys-ul-container">
            <ul className="categorys-ul">
              {categoryArr&&categoryArr.length>0?categoryArr.map((item,index)=>(
                <li className={"categorys-ul-item"+(selectedIndex===index?" on":"")}
                    key={index} onClick={()=>{this.setState({selectedIndex:index})}}>{item.name}</li>)):null}
          </ul>
        </div>
        <div className="goods-ul-container">
          <CategoryGoodPage currentGoodObj={currentGoodObj}/>
      </div>
  </div>
  </div>
    )
  }
}

export default connect(
  state=>({categoryArr:state.categoryArr}),
  {asyncReceiveCategoryArr}
)(Categorys)