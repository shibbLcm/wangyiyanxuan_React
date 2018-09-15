import React, {Component} from "react"
import {Button} from "antd-mobile"
import cartMain from "./cart/cartMain.png"

export default class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <div className="cart-head">
          购物车
          <span className="get-coupon">
        领券
      </span>
        </div>
        <div className="delivery-right">
          <span className="right-item">30天无忧退货</span>
          <span className="right-item">48小时快速退款</span>
          <span className="right-item">满88元免邮费</span>
        </div>
        <div className="cart-content">
          <img src={cartMain}/>
            <span className="little-tip">去添加点什么吧</span>
            <Button className="login-button" type="warning">登录</Button>
        </div>
      </div>
    )
  }
}