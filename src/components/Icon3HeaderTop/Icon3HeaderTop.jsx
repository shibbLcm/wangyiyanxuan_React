import React, {Component} from "react"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"

class Icon3HeaderTop extends Component {
  static propTypes={
    history:PropTypes.object.isRequired
  }
  render() {
    return (
      <div className="know-things-head">
        <i className="iconfont icon-shouye" onClick={()=>{this.props.history.replace('/')}}></i>
    <i className="iconfont icon-search"></i>
    <i className="iconfont icon-gouwuche"></i>
  </div>
    )
  }
}

export default withRouter(Icon3HeaderTop)