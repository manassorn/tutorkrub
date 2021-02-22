import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'

class UserEditAvatar extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user:{}, 
          step:''
        }
      this.uploadInput = React.createRef()
    }

    componentDidMount() {
      window.addEventListener('hashchange', e => this.onHashChange)
      var id = 'hNqOKzYwhJjZTIDLUkf5'
      Api.get('/crud/user/' + id)
        .then(response => 
        {
        this.setState({ user: response.data.data })
        }
        );
    }
    
    clickUploadInput() {
      this.uploadInput.click()
    }
    
    render() {
      return      <div class="container" style={{maxWidth:'720px'}}>
      <div class="border-top pt-3"> 
      
      <div id="upload-boundary" style={{border:'dashed 3px #ccc', maxWidth:'500px'}} class="text-center mb-3 p-5 bg-light">
        <h3>
          <a href="javascript:;" onClick={this.clickUploadInput}>คลิกที่นี่</a><br/>
            <small class="text-muted">เพื่ออัพโหลดรูป</small><br/>
          <i class="bx bx-upload"></i>
        </h3>
        <input type="file" id="upload-input" ref={this.uploadInput} accept="image/*" class="d-none" required/>

      </div>
      

       <div id="upload-edit" class="d-nonex">
        <div id="upload-preview" style={{height:'350px'}}></div>

        <div class="p-3 text-center" style={{lineHeight:'30px'}}>
         <a href="#" onClick={this.clickUploadInput}>หมุนรูป</a><br/>
         <a href="#" onClick={this.clickUploadInput}>เลือกรูปใหม่</a>
        </div>
        <button id="submit-btn" class="btn btn-primary btn-block">บันทึก</button>
       </div>

       
      </div>
     </div> 

      
    }
}

export default UserEditAvatar