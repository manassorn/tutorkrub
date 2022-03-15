import React from "react";
import Select from 'react-select'
import {Link} from "react-router-dom";
import Api from '../../../Api'
import ProfileLayout from './ProfileLayout'
import ProfileGroup from './ProfileGroup'
import ProfileField from './ProfileField'
import ProfileTutorEditModal from './ProfileTutorEditModal'
import './ProfileEdit.css'

class ProfileTutor extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          editField: 'subjects'
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

    onEditClick(name) {
      console.log('name=',name)
      this.setState({editField: name})
    }

    render() {
      
      return <div>
      <ProfileLayout>
        <ProfileGroup name="ข้อมูลการสอน">
          <ProfileField label="สอนวิชา" value="คณิตศาสตร์, อังกฤษ" name="subjects" onEditClick={this.onEditClick}></ProfileField>
          <ProfileField label="ชั้นเรียน" value="ม.1 - ม.6" name="schoolLevels" onEditClick={this.onEditClick}></ProfileField>
          <ProfileField label="ราคาต่อชั่วโมง" value="฿100 / ชั่วโมง"></ProfileField>
        </ProfileGroup>
        <ProfileGroup name="การศึกษา">
          <ProfileField label="ปริญญาตรี" value="จุฬาลงกณ์มหาวิทยาลัย GPA 3.10"></ProfileField>
          <a href="#">+ เพิ่มการศึกษา</a>
        </ProfileGroup>
        <ProfileGroup name="ช่องทางพูดคุยกับนักเรียน">
          <ProfileField label="Line" value="-"></ProfileField>
          <a href="#">+ เพิ่มช่องทางติดต่อ</a>
        </ProfileGroup>
        <ProfileGroup name="สอนออนไซต์">
          <ProfileField label="ที่อยู่" value="-"></ProfileField>
        </ProfileGroup>
        <ProfileGroup name="รายละเอียดอื่นๆ">
          <ul>
            <li>ฟรีใบงานแบบไฟล์</li>
            <li>ปูพื้นฐาน, เนื้อหาในชั้นเรียน, สอนทำการบ้าน</li>
          </ul>
        </ProfileGroup>
      </ProfileLayout>

      <ProfileTutorEditModal editField={this.state.editField}/>

    </div>
    }
};

export default ProfileTutor