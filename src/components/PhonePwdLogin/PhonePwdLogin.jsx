import React, {Component} from "react"
import PropTypes from "prop-types"
import mainLogo from "../pages/Personal/personal/mainLogo.png"

export default class PhonePwdLogin extends Component {
  static propTypes={
    switchMethod:PropTypes.func.isRequired
  }
  render() {
    return (
      <div className="phonepwdlogin-container">
        <div className="img-container">
          <img src={mainLogo}/>
        </div>
        <form className="main-form">
          <div className="input-container">
            <input type="text" placeholder="请输入手机号"/>
          </div>
          <div className="input-container">
            <input type="text" placeholder="请输入密码"/>
          </div>
          <div className="under-input-div">
            <span className="forget">忘记密码？</span>
            <span className="change-method">使用短信验证登录</span>
          </div>
          <button type="submit" className="login-button phone-login-button">
            <span className="phone-button-text">登录</span>
          </button>
        </form>
        <div className="login-button email-login-button">
          <span className="phone-button-text" onClick={this.props.switchMethod}>其他登录方式</span>
      </div>
    <span className="register-count">注册账号></span>
  </div>
    )
  }
}