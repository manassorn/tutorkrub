import React from "react";
import Api from '../../Api'
import Separator from '../common/Separator'
import SimpleTitle from '../common/SimpleTitle'

class RegisterConfirmEmail extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
      }
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
    }


    render() {
        return <div class="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
      
      <SimpleTitle title='ยืนยันอีเมล' />
       
      
      
    <div id="code-card" class="card-body p-md-5 d-nonex"> 
      <div class="text-center"> 
       <img src="assets/images/icons/forgot.png" width="150" alt=""/> 
      </div> 
      <h4 class="mt-5 font-weight-bold">ใส่โค้ดยืนยันอีเมล</h4> 
      <p class="text-muted">โค้ดถูกส่งไปยังอีเมล manassorn@gmail.com ส่งซ้ำ(30วิ)</p> 
      <div class="alert alert-danger d-none" role="alert">
        ไม่ถูกต้อง 
      </div> 
      
    <form class="needs-validation" novalidate>

      <div class="form-inline mt-2 mb-3 justify-content-center"> 
       <input type="tel" min="0" maxlength="1" step="1" class="form-control form-control-lg mr-1" style={{width:'50px'}} required /> 
       <input type="tel" min="0" maxlength="1" step="1" class="form-control form-control-lg mr-1" style={{width:'50px'}} required /> 
       <input type="tel" min="0" maxlength="1" step="1" class="form-control form-control-lg mr-1" style={{width:'50px'}} required /> 
       <input type="tel" min="0" maxlength="1" step="1" class="form-control form-control-lg mr-1" style={{width:'50px'}} required /> 
       <input type="tel" min="0" maxlength="1" step="1" class="form-control form-control-lg mr-1" style={{width:'50px'}} required /> 
       <input type="tel" min="0" maxlength="1" step="1" class="form-control form-control-lg mr-1" style={{width:'50px'}} required /> 
      </div> 
      <button id="verify-code-btn" type="button" class="btn btn-primary btn-lg btn-block">ยืนยัน</button> 
      <a href="authentication-login.html" class="btn btn-link btn-block">ไม่ได้รับโค้ด?</a> 
    </form>
     </div> 

       
       
     </div> 

    }
}
export default RegisterConfirmEmail;