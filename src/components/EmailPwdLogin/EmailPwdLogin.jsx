import React, {Component} from "react"
import PropTypes from "prop-types"
import mainLogo from "../pages/Personal/personal/mainLogo.png"

export default class EmailPwdLogin extends Component {
  static propTypes={
    switchMethod:PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="emailpwdlogin-container">
        <div className="img-container">
          <img src={mainLogo}/>
        </div>
        <form className="main-form">
          <div className="input-container">
            <input type="text" placeholder="邮箱账号"/>
          </div>
          <div className="input-container">
            <input type="text" placeholder="密码"/>
          </div>
          <div className="under-input-div">
            <span className="forget">注册账号</span>
            <span className="change-method">忘记密码</span>
          </div>
          <button type="submit" className="login-button phone-login-button">
            <span className="phone-button-text">登录</span>
          </button>
        </form>
        <div type="default" className="login-button email-login-button">
          <span className="phone-button-text" onClick={this.props.switchMethod}>其他登录方式</span>
        </div>
      </div>
    )
  }
}