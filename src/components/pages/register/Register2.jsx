import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import Separator from '../../common/Separator'
import FormValidation from '../../common/FormValidation'
import SimpleTitle from '../../common/SimpleTitle'

class Register2 extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
      }
      this.form = React.createRef()
      this.validate = this.validate.bind(this)
      this.register = this.register.bind(this)
    }
    
    componentDidMount() {
      /*Api.get('/crud/course')
        .then(response => 
        {
          console.log('courses',response.data.data)
        
        this.setState({ courses: response.data.data })
        }
        );
      */
      //window.FB.XFBML.parse()    
      
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
        return <div className="container pt-3 border-top" >
          <div className="card radius-30 bg-light-primary">
            <div className="card-body">
              <div className="row">
                <div className="col-md-5 offset-md-1">
                  <h1>ลงทะเบียนฟรี </h1>


                  <button className="btn btn-primary btn-block d-flex" onClick={e => this.loginFb}>
    <span>
    <i className="bx bxl-facebook"></i>
    </span>
                    <span className="w-100"> ลงทะเบียนด้วย Facebook</span>
                  </button>


                  <div className="my-3">
                    <Separator text="หรือ"/>
                  </div>


                  <FormValidation ref={this.form} validate={this.validate} onSubmit={e => this.register(e)}>
                    <div className="form-group mt-2">
                      <label>อีเมล</label>
                      <input ref={ele => this.email = ele} id="email" type="email" className="form-control" placeholder="example@user.com" required />
                      <div className="invalid-feedback">
                        โปรดกรอกอีเมลให้ถูกต้อง
                      </div>
                    </div>
                    <div className="form-group mt-2">
                      <label>ชื่อ</label>
                      <input ref={ele => this.name = ele} id="name" type="text" className="form-control" required />
                      <div className="invalid-feedback">
                        โปรดกรอกชื่อ
                      </div>
                    </div>
                    <div className="form-group mt-2">
                      <label>รหัสผ่าน</label>
                      <input ref={ele => this.pwd = ele} id="pwd" type="password" className="form-control" required />
                      <div className="invalid-feedback">
                        โปรดกรอกรหัสผ่าน
                      </div>
                    </div>
                    <div className="form-group mt-2">
                      <label>ยืนยันรหัสผ่าน</label>
                      <input ref={ele => this.pwd2 = ele} id="pwd2" type="password" className="form-control" aria-describedby="pwdMismatch" onChange={this.validate} required />
                      <div className="invalid-feedback">
                        โปรดยืนยันรหัสผ่านให้ถูกต้อง
                      </div>
                    </div>
                    <button id="submit-email-btn" type="submit" className="btn btn-primary btn-block">ดำเนินการต่อ</button>
                    <a href="/login" className="btn btn-link btn-block">เข้าสู่ระบบ</a>
                  </FormValidation>

                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="bg-dark-blue radius-10 text-center text-white display-4" style={{padding:'80px 0'}}>
                    <img src="/public/assets/images/logo2.png" className="logo-icon2" alt=""/> TutorKrub
                      <br/>
                    <img src="https://i.imgur.com/VVcdKaK.jpg" width="100%" style={{width:'100%'}} className="pt-4"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
      
      <SimpleTitle title='ลงทะเบียน' />
       
      <div className="row">
      <div className="col-md-6 offset-md-3 py-4">

        
    <button className="btn btn-primary btn-block d-flex" onClick={e => this.loginFb}>
    <span>
    <i className="bx bxl-facebook"></i>
    </span>
    <span className="w-100"> ลงทะเบียนด้วย Facebook</span>
    </button>
        
        
        <div className="my-3">
        <Separator text="หรือ"/>
        </div>

        
    <FormValidation ref={this.form} validate={this.validate} onSubmit={e => this.register(e)}>
      <div className="form-group mt-2"> 
       <label>อีเมล</label> 
       <input ref={ele => this.email = ele} id="email" type="email" className="form-control" placeholder="example@user.com" required />
       <div className="invalid-feedback">
         โปรดกรอกอีเมลให้ถูกต้อง
       </div>
      </div> 
      <div className="form-group mt-2"> 
       <label>ชื่อ</label> 
       <input ref={ele => this.name = ele} id="name" type="text" className="form-control" required />
       <div className="invalid-feedback">
         โปรดกรอกชื่อ
       </div>
      </div>
      <div className="form-group mt-2"> 
       <label>รหัสผ่าน</label> 
       <input ref={ele => this.pwd = ele} id="pwd" type="password" className="form-control" required />
       <div className="invalid-feedback">
         โปรดกรอกรหัสผ่าน
       </div>
      </div>
      <div className="form-group mt-2"> 
       <label>ยืนยันรหัสผ่าน</label> 
       <input ref={ele => this.pwd2 = ele} id="pwd2" type="password" className="form-control" aria-describedby="pwdMismatch" onChange={this.validate} required />
       <div className="invalid-feedback">
         โปรดยืนยันรหัสผ่านให้ถูกต้อง
       </div>
      </div>
      <button id="submit-email-btn" type="submit" className="btn btn-primary btn-block">ดำเนินการต่อ</button>
      <a href="/login" className="btn btn-link btn-block">เข้าสู่ระบบ</a> 
    </FormValidation>
       
      </div>
      
      
       </div>
     </div> 

    }
}
export default Register2;