import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'

class UserEditEmail extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user:{}, 
          step:''
        }
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
    
    onHashChange(e) {
      this.setState({step:'verify-code'})
    }

    render() {
      return      <div class="container" style={{maxWidth:'720px'}}>
      
      <div>
        <SimpleTitle title="แก้ไขอีเมล" backBtn></SimpleTitle> 
        <div class = "border-top pt-3" >
              <form> 
              <div class="form-group"> 
               <label for="email-input">อีเมล</label>
               <input type="email" class="form-control" id="email-input" placeholder="พิมพ์อีเมล" value={this.state.user.email}/> 
              </div> 
              <button id="submit-email-btn" type="submit" class="btn btn-primary btn-block mb-2"> บันทึก</button> 
             </form> </div> 
      </div>

      
      
     </div> 

    }
}

export default UserEditEmail