import React from "react";
import Api from '../../Api'
import Auth from '../../Auth'
import Separator from '../common/Separator'
import FormValidation from '../common/FormValidation'
import SimpleTitle from '../common/SimpleTitle'

class Login extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        hasLoginError: false
      }
      this.form = React.createRef()
      this.login = this.login.bind(this)
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
    
    
    loginFb() {
      window.FB.login(function(response) {
        if (response.authResponse) {
          const accessToken = response.authResponse.accessToken
          Api.post('/authen/fb', { accessToken })
            .then(response =>
              {
                const user = response.data.data
                Auth.checkLogin()
                console.log(user)
              }
            );

        } else {
          console.log('User cancelled login or did not fully authorize.');
        }
      });
    }
    
    login(event) {
      const email = this.email.value
      const password =this.pwd.value
      const that = this;
      Api.post('/authen/login', {email, name, password}).then(() => {
        Auth.checkLogin()
        const search = that.props.location.search; // could be '?foo=bar'
        const params = new URLSearchParams(search);
        const redirect = params.get('redirect');
        if(redirect) {
          location.href= redirect
        } else {
          location.href = '/user'
        }
      }).catch(() => {
        this.setState({hasLoginError: true})
      })
      
      event.preventDefault()
    }


    render() {
        return <div className="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
      
      <SimpleTitle title='เข้าสู่ระบบ' />
       <div className="row">
      <div className="col-md-6 offset-md-3 py-4">

        
    <button className="btn btn-primary btn-block d-flex" onClick={e => this.loginFb}>
    <span>
    <i className="bx bxl-facebook"></i>
    </span>
    <span className="w-100"> เข้าสู่ระบบด้วย Facebook</span>
    </button>
        
        
        <div className="my-3">
        <Separator text="หรือ"/>
        </div>

        
    <FormValidation ref={this.form} validate={this.validate} onSubmit={e => this.register(e)}>
      <div className="form-group mt-2"> 
       <label>อีเมล / เบอร์โทรศัพท์</label> 
       <input ref={ele => this.email = ele} id="email" type="email" className="form-control" placeholder="example@user.com" required />
       <div className="invalid-feedback">
         โปรดกรอกอีเมลให้ถูกต้อง
       </div>
      </div> 

      <div className="form-group mt-2"> 
       <label>รหัสผ่าน</label> 
       <input ref={ele => this.pwd = ele} id="pwd" type="password" className="form-control" required />
       <div className="invalid-feedback">
         โปรดกรอกรหัสผ่าน
       </div>
      </div>
    
      <button id="submit-email-btn" type="submit" className="btn btn-primary btn-block" onClick={e => {this.login(e)}}>เข้าสู่ระบบ</button>
      <a href="/register" className="btn btn-link btn-block">ลงทะเบียน</a> 
    </FormValidation>
       
      </div>
      
      
       </div>
     </div> 

    }
}
export default Login