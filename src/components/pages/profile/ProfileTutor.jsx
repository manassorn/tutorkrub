import React from "react";
import {Link} from "react-router-dom";
import Api from '../../../Api'
import ProfileLayout from './ProfileLayout'
import ProfileGroup from './ProfileGroup'
import ProfileField from './ProfileField'
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
      
      return <ProfileLayout>
        <ProfileGroup name="ข้อมูลส่วนบุคคล">
          <ProfileField label="อีเมล" value="gg@g.com"></ProfileField>
          <ProfileField label="ชื่อ" value="Manassorn"></ProfileField>
        </ProfileGroup>
      </ProfileLayout>
            
    }
};

export default ProfileTutor