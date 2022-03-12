import React from "react";
import {Link} from "react-router-dom";
import Api from '../../../Api'
import ProfileLayout from './ProfileLayout'
import './ProfileEdit.css'

class ProfileTutor extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user: {}
        }
    }

    componentDidMount() {
      Api.get('/users/me')
        .then(response => 
        {
        this.setState({ user: response.data.data })
        }
        );
    }

    render() {
      
      return <ProfileLayout></ProfileLayout>
            
    }
};

export default ProfileTutor