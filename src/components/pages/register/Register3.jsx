import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import Separator from '../../common/Separator'
import FormValidation from '../../common/FormValidation'
import SimpleTitle from '../../common/SimpleTitle'

class Register3 extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
      }
      this.form = React.createRef()
      this.validate = this.validate.bind(this)
      this.register = this.register.bind(this)
    }
    
    componentDidMount() {

    }
    
    validate() {
      if(this.pwd.value !== this.pwd2.value) {
        this.form.current.fail(this.pwd2, "notmatch")
        return false
      } else {
        this.form.current.ok(this.pwd2)
        return true
      }
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
    
    register(event) {
      const email = this.email.value
      const name = this.name.value
      const password =this.pwd.value
      const loginAccount = {email, password}
      const user = {name}
      
      Api.post('/register', {loginAccount, user}).then(() => {
        location.href = '/course/explore'
      })
      
      event.preventDefault()
    }


    render() {
        return <div className="bg-forgot wrapper" style={{backgroundImage:'url(https://i.imgur.com/HlB22GZ.png)'}}>
        <div className="authentication-forgot d-flex align-items-center justify-content-center">
          <div className="card shadow-lg forgot-box">
            <div className="card-body p-md-5">
              <h4 className="font-weight-bold">ลงทะเบียนฟรี</h4>
              <p className="text-muted">Enter your registered email ID to reset the password</p>
              <div className="alert alert-danger d-none" role="alert">
                อีเมลหรือรหัสผ่าน
                <b>ไม่ถูกต้อง</b>
              </div>

              <form className="needs-validation" noValidate>

                <div className="form-group mt-5">
                  <label>อีเมล</label>
                  <input id="email" type="email" className="form-control form-control-lg" placeholder="example@user.com"
                         required/>
                </div>
                <div className="form-group mt-2">
                  <label>รหัสผ่าน</label>
                  <input id="password" type="password" className="form-control form-control-lg" placeholder="" required/>
                  <div className="invalid-feedback">
                    กรุณากรอกรหัสผ่าน
                  </div>
                </div>
                <div className="form-group mt-2">
                  <label>รหัสผ่าน</label>
                  <input id="password" type="password" className="form-control form-control-lg" placeholder="" required/>
                  <div className="invalid-feedback">
                    กรุณากรอกรหัสผ่าน
                  </div>
                </div>
                <button id="submit-login-btn" type="button" className="btn btn-primary btn-lg btn-block">เข้าสู่ระบบ
                </button>
                <a href="authentication-login.html" className="btn btn-link btn-block">ลืมรหัสผ่าน?</a>
              </form>
            </div>
          </div>
        </div>
      </div>

    }
}
export default Register3;