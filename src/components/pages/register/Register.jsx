import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import Separator from '../../common/Separator'
import FormValidation from '../../common/FormValidation'
import {Form, InvalidFeedback, Input} from '../../common/FormValidation2'
import SimpleTitle from '../../common/SimpleTitle'

class Register extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    }
    this.form = React.createRef()
    this.email2 = React.createRef()
    this.pwd = React.createRef()
    this.pwd2 = React.createRef()
    this.registerButton = React.createRef()
    this.validate = this.validate.bind(this)
    this.register = this.register.bind(this)
  }

  componentDidMount() {

  }

  validate() {
    console.log('xx', this.pwd.current.value, this.pwd2.current.value)
    // return false
    if(this.pwd.current.value !== this.pwd2.current.value) {
      try{
        this.pwd2.current.fail("โปรดยืนยันรหัสผ่านให้ถูกต้อง")
      } catch (e) {
        console.error(e)
        return false
      }
      return false
    }
    return true
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
    console.log('aa')
    const email = this.email2.current.value
    const password =this.pwd.current.value
    const loginAccount = {email, password}

    Api.post('/register', {loginAccount}).then(() => {
      location.href = '/course/explore'
    }).catch((error) => {
      console.log(error.response.data.error.message)
      this.email2.current.fail(error.response.data.error.message)
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

                  <Form ref={this.form} validate={this.validate} onSubmit={e => this.register(e)}>
                    {/*<form className="needs-validation" noValidate>*/}

                    <div className="form-group">
                      <label>อีเมล</label>
                      <Input ref={this.email2} id="email" type="email" className="form-control form-control-lg" placeholder="example@gmail.com"
                             required invalidmessage="โปรดกรอกอีเมลให้ถูกต้อง"/>
                      {/*<InvalidFeedback ref={this.emailFeedback} input={this.email2} invalidinvalidMessage="โปรดกรอกอีเมลให้ถูกต้อง" />*/}

                    </div>
                    <div className="form-group mt-2">
                      <label>รหัสผ่าน</label>

                      <Input ref={this.pwd} id="pwd" type="password" className="form-control form-control-lg" placeholder="" required invalidmessage="กรุณากรอกรหัสผ่าน"/>

                      {/*<div className="invalid-feedback">*/}
                      {/*  กรุณากรอกรหัสผ่าน*/}
                      {/*</div>*/}
                    </div>
                    <div className="form-group mt-2">
                      <label>ยืนยันรหัสผ่าน</label>
                      <Input ref={this.pwd2} id="pwd2" type="password" className="form-control form-control-lg" placeholder="" required invalidmessage="กรุณากรอกยืนยันรหัสผ่าน"/>
                      {/*<div className="invalid-feedback">*/}
                      {/*  โปรดยืนยันรหัสผ่านให้ถูกต้อง*/}
                      {/*</div>*/}
                    </div>
                    <button ref={this.registerButton} id="submit-login-btn" type="submit" className="btn btn-primary btn-lg btn-block">ลงทะเบียน
                    </button>
                    <a href="#carouselExampleSlidesOnly" data-slide="next" className="btn btn-link btn-lg btn-block" >test next</a>
                    {/*</form>*/}
                  </Form>
                </div>
                <div className="carousel-item">

                  <FormValidation  validate={this.validate} onSubmit={e => this.register(e)}>
                    {/*<form className="needs-validation" noValidate>*/}

                    <div className="form-group">
                      <label>กำหนด @KrubID ให้สามารถจำได้ง่าย และสื่อถึงตัวคุณ เพื่อให้สามารถค้นหาเจอได้ง่าย</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" className="form-control form-control-lg" placeholder="เช่น ครูนุ้ย" aria-label="KrubID"
                               aria-describedby="basic-addon1" />
                      </div>
                      <div className="invalid-feedback">
                        โปรดกรอกข้อมูล
                      </div>
                    </div>
                    <button id="submit-login-btn" type="submit" className="btn btn-primary btn-lg btn-block">ตั้งชื่อ
                    </button>
                    {/*</form>*/}
                  </FormValidation>
                </div>
              </div>
            </div>




          </div>

        </div>
      </div>
    </div>

  }
}
export default Register;