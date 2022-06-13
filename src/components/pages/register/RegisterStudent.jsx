import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import {Link} from "react-router-dom";
import LoginAccountForm from "./LoginAccountForm";
import KrubIdForm from "./KrubIdForm";
import {isDebugMode} from "../../../Debug";

class RegisterStudent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.nextButton = React.createRef()
    this.register = this.register.bind(this)
  }

  loginFb() {
    window.FB.login(function(response) {
      if (response.authResponse) {
        const accessToken = response.authResponse.accessToken
        Api.post('/authen/fb', { accessToken })
          .then(response =>
            {
              const user = response.data.data
              Auth.checkLogin()
              //   Me.subject.next(user)
            }
          );

      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  }

  register() {
    const registerModel = {
      email: this.email,
      pwd: this.pwd,
      krubId: this.krubId
    }
    Api.post('/register', registerModel).then(() => {
      this.nextButton.current.click()
      // location.href = '/explore'
    }).catch((error) => {
      console.error(error)
    })
    event.preventDefault()
  }



  render() {
    return <div className="bg-forgot wrapper" style={{backgroundImage:'url(https://i.imgur.com/HlB22GZ.png)'}}>
      <div className="authentication-forgot d-flex align-items-center justify-content-center">
        <div className="card shadow-lg forgot-box">
          <div className="card-body p-md-5">
            <h4 className="font-weight-bold">ลงทะเบียนสำหรับนักเรียน</h4>
            <p className="text-muted">ยินดีต้อนรับนักเรียนคนใหม่ สมัครเป็นติวเตอร์<Link to="/register/tutor">คลิกที่นี่</Link>
              <a ref={this.nextButton} href="#carouselExampleSlidesOnly" data-slide="next" className={isDebugMode?'':'d-none'}>test next</a>
            </p>


            <div id="carouselExampleSlidesOnly" className="carousel slide" data-interval="false" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">


                  <button id="submit-login-btn" type="button" className="btn btn-white btn-lg btn-block" href="#carouselExampleSlidesOnly" data-slide="next">
                    <i className="bx bx-envelope "></i>  ลงทะเบียนด้วยอีเมล
                  </button>
                  <button id="submit-login-btn" type="button" className="btn btn-white btn-lg btn-block">
                    <img src="/public/assets/images/logos/logo-f.png" width="32" height="32"/> ลงทะเบียนด้วย Facebook
                  </button>
                  <button id="submit-login-btn" type="button" className="btn btn-white btn-lg btn-block">
                    <img src="/public/assets/images/logos/logo-G.png" width="32" height="32"/> ลงทะเบียนด้วย Google
                  </button>
                </div>
                <div className="carousel-item">

                  <LoginAccountForm onComplete={({email, pwd}) => {
                    this.email = email
                    this.pwd = pwd
                    this.nextButton.current.click()
                  }}/>

                </div>
                <div className="carousel-item">
                  <KrubIdForm onComplete={krubId => {
                    this.krubId = krubId
                    this.register()
                  }}/>
                </div>
                <div className="carousel-item">

                  <div className="text-center">
                    <svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg" style={{width: '120px'}}>
                      <g stroke="#007bff" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round"
                         stroke-linejoin="round">
                        <path className="circle"
                              d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"/>
                        <path className="tick" d="M6.5 13.5L10 17 l8.808621-8.308621"/>
                      </g>
                    </svg>
                  </div>

                  <a href="/explore" className="btn btn-link btn-lg btn-block" >ฉันเป็นติวเตอร์</a>
                  <a href="/explore" className="btn btn-link btn-lg btn-block" >ฉันเป็นนักเรียน</a>

                </div>
              </div>
            </div>




          </div>

        </div>
      </div>
    </div>

  }
}
export default RegisterStudent;