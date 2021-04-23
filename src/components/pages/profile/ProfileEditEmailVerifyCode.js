import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'

class ProfileEditEmailVerifyCode extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          step:''
        }
      this.inputs = [1,2,3,4,5,6].map(i => React.createRef())
      
    }

    componentDidMount() {
    }
    
    handleKeyUp (e, field) {
      if (field.current.value.length > 0) {
        field.current.nextSibling.focus();
      }
    };
    
    handleKeyDown(event, field) {
    
      var isBackspaceOrDelete = event.keyCode === 8 || event.keyCode === 46;
      
      if (isBackspaceOrDelete && field.current.value.length == 0) {
        
        field.current.previousSibling.value = '';
        field.current.previousSibling.focus();
      }
      
    };
    
    render() {
      return      <div class="container" style={{maxWidth:'720px'}}>
      <SimpleTitle title="ใส่โค้ดยืนยัน"></SimpleTitle>
            <div class="pt-3">
    <h4 class="mt-3 font-weight-bold">ใส่โค้ดยืนยันอีเมล</h4>
    <p class="text-muted">โค้ดถูกส่งไปยังอีเมล manassorn@gmail.com ส่งซ้ำ(30วิ)</p>
    <div class="alert alert-danger d-none" role="alert">
        ไม่ถูกต้อง 
      </div> 

    <form class="needs-validation" novalidate>

      <div class="form-inline mt-2 mb-3 justify-content-center"> 
        {this.inputs.map(ref => (
          <input type="tel" min="0" maxlength="1" step="1" class="form-control form-control-lg mr-1" style={{width:'50px'}} ref={ref} onKeyUp={e => this.handleKeyUp(e, ref)} onKeyDown={e => this.handleKeyDown(e, ref)} required/> 
        ))}

      </div> 
      <button id="verify-code-btn" type="button" class="btn btn-primary btn-lg btn-block">ยืนยัน</button> 
      <a href="authentication-login.html" class="btn btn-link btn-block">ไม่ได้รับโค้ด?</a> 
    </form>

       
       
      </div> 

     </div> 

    }
}

export default ProfileEditEmailVerifyCode