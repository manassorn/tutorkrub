import React from "react";
import Api from '../../Api'

class UserEdit extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user: {}
        }
    }

    componentDidMount() {
      var id = 'hNqOKzYwhJjZTIDLUkf5'
      Api.get('/crud/user/' + id)
        .then(response => 
        {
        this.setState({ user: response.data.data })
        }
        );
    }

    render() {
      return      <div class="container" style="max-width:720px">
      <div class="border-top pt-3"> 
       <form> 
        <div class="form-group"> 
         <label for="email-input">อีเมล</label>
         <input type="email" class="form-control" id="email-input" placeholder="พิมพ์อีเมล" value={this.state.user.email}/> 
        </div> 
        <button id="submit-email-btn" type="submit" class="btn btn-primary btn-block mb-2"> บันทึก</button> 
       </form> 
       
       

       
       
      </div> 
     </div> 

    }
}
      