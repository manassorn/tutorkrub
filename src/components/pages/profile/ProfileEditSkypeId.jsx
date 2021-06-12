import React from "react";
import Api from '../../../Api'
import FormValidation from '../../common/FormValidation'
import SimpleTitle from '../../common/SimpleTitle'

class ProfileEditSkypeId extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user:{}, 
        }
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
      const that = this
      Api.get('/user/me')
        .then(response => 
        {
          const user = response.data.data
          that.input.value = user.skypeId
        }
        );
      
    }
    
    submit() {
      const skypeId = this.input.value
      Api.post('/user/me', {skypeId})
      .then(() => {})
    }
    
    render() {
      return      <div class="container" style={{maxWidth:'720px'}}>
      
      <div>
        <SimpleTitle title="แก้ไข Skype ID" backBtn></SimpleTitle> 
        <div class = "border-top pt-3" >
              <FormValidation ref={this.form} onSubmit={e => this.submit(e)}>
              <div class="form-group"> 
               <label for="email-input">Skype ID</label>
               <input type="text" ref={ele=> this.input= ele} class="form-control" id="input" placeholder="" required/> 
                <div class="invalid-feedback">
                        โปรดกรอก Skype ID
                </div>
              </div> 
              
              <button type="submit" class="btn btn-primary btn-block mb-2">บันทึก</button> 
             </FormValidation> 
        </div> 
      </div>

      
      
     </div> 

    }
}

export default ProfileEditSkypeId