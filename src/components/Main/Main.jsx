import React, {Component} from "react"
import PropTypes from "prop-types"
import {withRouter} from "react-router-dom"
import {Route,Switch,Redirect} from "react-router-dom"

import Index from "../pages/Index/Index"
import KnowThings from "../pages/KnowThings/KnowThings"
import Categorys from "../pages/Categorys/Categorys"
import Cart from "../pages/Cart/Cart"
import Personal from "../pages/Personal/Personal"

import FooterGuide from "../FooterGuide/FooterGuide"

class Main extends Component {
  static propTypes={
    location:PropTypes.object.isRequired
  }
  navList=[
    {
      path:"/index",
      iconClass:"icon-shouye",
      title:"首页",
      showFooter:true
    },
    {
      path:"/knowthings",
      iconClass:"icon-lifangtilitiduomiantifangkuai",
      title:"识物",
      showFooter:true
    },
    {
      path:"/categorys",
      iconClass:"icon-chouti",
      title:"分类",
      showFooter:true
    },
    {
      path:"/cart",
      iconClass:"icon-gouwuche",
      title:"购物车",
      showFooter:true
    },
    {
      path:"/personal",
      iconClass:"icon-gerenzhongxin",
      title:"个人"
    }
  ]
  render() {
    const {location} =this.props
    return (
      <div id="app">
        <Switch>
          <Route path="/index" component={Index}/>
          <Route path="/knowthings" component={KnowThings}/>
          <Route path="/categorys" component={Categorys}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/personal" component={Personal}/>
          <Redirect to="/index"/>
        </Switch>
        {location.pathname!=="/personal"?<FooterGuide navList={this.navList}/>:null}
      </div>
    )
  }
}

export default withRouter(Main)