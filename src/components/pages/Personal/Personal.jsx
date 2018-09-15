import React, {Component} from "react"
import Icon3HeaderTop from "../../Icon3HeaderTop/Icon3HeaderTop"
import PhonePwdLogin from "../../PhonePwdLogin/PhonePwdLogin"
import EmailPwdLogin from "../../EmailPwdLogin/EmailPwdLogin"
import mainLogo from "./personal/mainLogo.png"

export default class Personal extends Component {
  constructor(){
    super()
    this.state={
      isPhonePwdLogin:false,
      isEmailPwdLogin:false
    }
  }
  PhonePwdMethod=()=>{
    this.setState({
      isPhonePwdLogin:false
    })
  }
  EmailPwdMethod=()=>{
    this.setState({
      isEmailPwdLogin:false
    })
  }

  render() {
    const {isPhonePwdLogin,isEmailPwdLogin} =this.state

    return (
      <div className="personal-container">
        <Icon3HeaderTop/>
        {!isPhonePwdLogin && !isEmailPwdLogin?(<div className="login-main">
          <div className="img-container">
            <img src={mainLogo}/>
          </div>
          <div onClick={()=>{this.setState({isPhonePwdLogin:!this.state.isPhonePwdLogin})}} className="login-button phone-login-button">
            <i className="iconfont icon-shouji"></i>
            <span className="phone-button-text">手机号码登录</span>
          </div>
            <div onClick={()=>{this.setState({isEmailPwdLogin:!this.state.isEmailPwdLogin})}} className="login-button email-login-button">
              <i className="iconfont icon-email"></i>
              <span className="phone-button-text">邮箱账号登录</span>
            </div>
            <span className="register-tip">手机号快捷注册></span>
          </div>):null}
    {isPhonePwdLogin?<PhonePwdLogin switchMethod={this.PhonePwdMethod}/>:null}
    {isEmailPwdLogin?<EmailPwdLogin switchMethod={this.EmailPwdMethod}/>:null}
    {!isPhonePwdLogin && !isEmailPwdLogin?<div className="login-footer">
      <span className="footer-icon">
        <i className="iconfont icon-weixin"></i>
        <span className="icon-name">微信</span>
      </span>
      <span className="footer-icon">
        <i className="iconfont icon-web-icon-"></i>
        <span className="icon-name">QQ</span>
      </span>
      <span className="footer-icon">
        <i className="iconfont icon-weibo"></i>
        <span className="icon-name">微博</span>
      </span>
    </div>:null}
  </div>
    )
  }
}