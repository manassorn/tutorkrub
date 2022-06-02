import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import FormValidation from '../../common/FormValidation'
import {Form, Input} from '../../common/FormValidation2'

class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    this.email = React.createRef()
    this.pwd = React.createRef()
    this.pwd2 = React.createRef()
    this.krubId = React.createRef()
    this.nextButton = React.createRef()
    this.validate = this.validate.bind(this)
    this.register = this.register.bind(this)
  }

  componentDidMount() {

  }

  validate() {
    if(this.pwd.current.value !== this.pwd2.current.value) {
      try{
        this.pwd2.current.fail("โปรดยืนยันรหัสผ่านให้ถูกต้อง")
      } catch (e) {
        console.error(e)
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

  checkEmail(e) {
    Api.post('/register/checkemail', {email:this.email.current.value}).then((res) => {
      if(res.data.data.exists === false) {
        this.nextButton.current.click()
      } else {
        this.email.current.fail("อีเมลนี้ถูกใช้งานแล้ว")
      }

    }).catch((error) => {
      console.error(error)
    })
    e.preventDefault()
  }

  register(event) {
    const email = this.email.current.value
    const password =this.pwd.current.value
    const krubId =this.krubId.current.value
    const loginAccount = {email, password}
    const user = {krubId}

    Api.post('/register', {loginAccount, user}).then(() => {
      location.href = '/explore'
    }).catch((error) => {
      this.krubId.current.fail(error.response.data.error.message)
    })
    event.preventDefault()
  }



  render() {
    return <div className="bg-forgot wrapper" style={{backgroundImage:'url(https://i.imgur.com/HlB22GZ.png)'}}>
      <div className="authentication-forgot d-flex align-items-center justify-content-center">
        <div className="card shadow-lg forgot-box">
          <div className="card-body p-md-5">
            <h4 className="font-weight-bold">ลงทะเบียนฟรี</h4>
            <p className="text-muted">ยินดีต้อนรับติวเตอร์และนักเรียน มาร่วมเป็นส่วนหนึ่งกับเรา!</p>


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

                  <Form validate={this.validate} onSubmit={e => this.checkEmail(e)}>

                    <div className="form-group">
                      <label>อีเมล</label>
                      <Input ref={this.email} id="email" type="email" className="form-control form-control-lg" placeholder="example@gmail.com"
                             required invalidmessage="โปรดกรอกอีเมลให้ถูกต้อง"/>

                    </div>
                    <div className="form-group mt-2">
                      <label>รหัสผ่าน</label>

                      <Input ref={this.pwd} id="pwd" type="password" className="form-control form-control-lg" placeholder="" required invalidmessage="กรุณากรอกรหัสผ่าน"/>

                    </div>
                    <div className="form-group mt-2">
                      <label>ยืนยันรหัสผ่าน</label>
                      <Input ref={this.pwd2} id="pwd2" type="password" className="form-control form-control-lg" placeholder="" required invalidmessage="กรุณากรอกยืนยันรหัสผ่าน"/>
                    </div>
                    <button id="submit-login-btn" type="submit" className="btn btn-primary btn-lg btn-block">ลงทะเบียน
                    </button>
                    <a ref={this.nextButton} href="#carouselExampleSlidesOnly" data-slide="next" className="btn btn-link btn-lg btn-block d-none" >test next</a>
                  </Form>
                </div>
                <div className="carousel-item">

                  <Form onSubmit={e => this.register(e)}>

                    <div className="form-group">
                      <label>กำหนด @KrubID ให้สามารถจำได้ง่าย และสื่อถึงตัวคุณ เพื่อให้สามารถค้นหาเจอได้ง่าย (สามารถเปลี่ยนได้ภายหลัง)</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <Input ref={this.krubId} type="text" className="form-control form-control-lg" placeholder="เช่น พี่มายด์, พี่แองจี้" aria-label="KrubID"
                               aria-describedby="basic-addon1" required pattern="[A-Za-z0-9ก-ฮ]*" invalidmessage="โปรดกรอกตัวอักษร ภาษาไทย หรืออ ังกฤษ หรือ ตัวเลข0-9"/>
                      </div>
                    </div>
                    <button id="submit-login-btn" type="submit" className="btn btn-primary btn-lg btn-block">ตั้งชื่อ
                    </button>
                    {/*</form>*/}
                  </Form>
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