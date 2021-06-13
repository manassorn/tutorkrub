import React from "react";
import Api from '../../../Api'
import SimpleEdit from '../../common/SimpleEdit'

class ProfileEditZoomId extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user:{}, 
        }
        this.simpleEdit = React.createRef()
        this.submit = this.submit.bind(this)
    }

    componentDidMount() {
      const that = this
      Api.get('/user/me')
        .then(response => 
        {
          const user = response.data.data
          that.simpleEdit.setValue(user.zoomId)
          console.log('setv',user.zoomId)
        }
        );
      
    }
    
    submit(value) {
      console.log('submitt',value)
      Api.post('/user/me', {zoomId: value})
      .then(() => {
        location.href = '/user/edit'
      })
    }
    
    render() {
      return <SimpleEdit ref={this.simpleEdit} fieldName="Zoom ID" onSubmit={val => this.submit(val)} />

    }
}

export default ProfileEditZoomId