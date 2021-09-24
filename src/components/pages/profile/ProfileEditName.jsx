import React from "react";
import Api from '../../../Api'
import FormValidation from '../../common/FormValidation'
import SimpleTitle from '../../common/SimpleTitle'

class ProfileEditName extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user:{}, 
        }
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
      const that = this
      Api.get('/users/me')
        .then(response => 
        {
          const user = response.data.data
          that.input.value = user.name
        }
        );
      
    }
    
    submit() {
      const name = this.input.value
      Api.post('/users/me', {name})
      .then(() => {
        location.href = '/user/edit'
      })
    }
    
    render() {
      return      <div class="container" style={{maxWidth:'720px'}}>
      
      <div>
        <SimpleTitle title="แก้ไขชื่อ" backBtn></SimpleTitle> 
        <div class = "border-top pt-3" >
              <FormValidation ref={this.form} onSubmit={e => this.submit(e)}>
              <div class="form-group"> 
               <label for="name-input">ชื่อ</label>
               <input type="text" ref={ele=> this.input= ele} class="form-control" id="input" placeholder="" required/> 
                <div class="invalid-feedback">
                        โปรดกรอกชื่อ
                </div>
              </div> 
              
              <button type="submit" class="btn btn-primary btn-block mb-2">บันทึก</button> 
             </FormValidation> 
        </div> 
      </div>

      
      
     </div> 

    }
}

export default ProfileEditName