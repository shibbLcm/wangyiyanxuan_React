import React, {Component} from "react"
import {withRouter,NavLink} from "react-router-dom"
import PropTypes from "prop-types"

class FooterGuide extends Component {
  static propTypes={
    navList:PropTypes.array.isRequired,
    location:PropTypes.object.isRequired
  }
  render() {
    const {navList,location}=this.props
    return (
      <div className="footer_guide">
        {navList.map((item,index)=>(
          <div key={index} className={"guide_item"+(location.pathname===item.path?" on":"")}>
            <NavLink replace to={item.path} className="icon-container">
              <i className={"iconfont "+item.iconClass}/>
              <span>{item.title}</span>
            </NavLink>
          </div>)
        )}
      </div>
    )
  }
}

export default withRouter(FooterGuide)