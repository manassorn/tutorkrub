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
        this.onEditClick = this.onEditClick.bind(this)
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
          <ProfileField label="สอนวิชา" value="คณิตศาสตร์, อังกฤษ"  onEditClick={() => this.onEditClick('teachSubjects')}></ProfileField>
          <ProfileField label="ชั้นเรียน" value="ม.1 - ม.6"  onEditClick={() => this.onEditClick('teachLevels')}></ProfileField>
          <ProfileField label="ราคาต่อชั่วโมง" value="฿100 / ชั่วโมง" onEditClick={() => this.onEditClick('price')}></ProfileField>
        </ProfileGroup>
        <ProfileGroup name="การศึกษา">
          <ProfileField label="ปริญญาตรี" value="จุฬาลงกณ์มหาวิทยาลัย GPA 3.10" onEditClick={() => this.onEditClick('education')}></ProfileField>
          <a href="#">+ เพิ่มการศึกษา</a>
        </ProfileGroup>
        <ProfileGroup name="ช่องทางพูดคุยกับนักเรียน">
          <ProfileField label="Line" value="-" onEditClick={() => this.onEditClick('contacts')}></ProfileField>
          <a href="#">+ เพิ่มช่องทางติดต่อ</a>
        </ProfileGroup>
        <ProfileGroup name="สอนออนไซต์">
          <ProfileField label="ที่อยู่" value="-" onEditClick={() => this.onEditClick('address')}></ProfileField>
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