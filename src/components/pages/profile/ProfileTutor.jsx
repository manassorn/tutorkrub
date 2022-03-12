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
          <ProfileField label="สอน" value="คณิตศาสตร์, อังกฤษ"></ProfileField>
          <ProfileField label="ชั้นเรียน" value="ม.1 - ม.6"></ProfileField>
          <ProfileField label="ราคาต่อชั่วโมง" value="฿100 / ชั่วโมง"></ProfileField>
        </ProfileGroup>
        <ProfileGroup name="การศึกษา">
          <ProfileField label="ปริญญาตรี" value="จุฬาลงกณ์มหาวิทยาลัย GPA 3.10"></ProfileField>
        </ProfileGroup>
        <ProfileGroup name="เกี่ยวกับฉัน">
          <ProfileField label="ปริญญาตรี" value="จุฬาลงกณ์มหาวิทยาลัย GPA 3.10"></ProfileField>
        </ProfileGroup>
      </ProfileLayout>
            
    }
};

export default ProfileTutor