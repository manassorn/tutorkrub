import React from "react";
import Select from 'react-select'
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
      
      return <div>
      <ProfileLayout>
        <ProfileGroup name="ข้อมูลการสอน">
          <ProfileField label="สอนวิชา" value="คณิตศาสตร์, อังกฤษ"></ProfileField>
          <ProfileField label="ชั้นเรียน" value="ม.1 - ม.6"></ProfileField>
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

      <div className="modal" tabIndex="-1" role="dialog" id="editSubjectModal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Select options={[{ value: 'chocolate', label: 'Chocolate' },{ value: 'strawberry', label: 'Strawberry' }]} />
              <p>Modal body text goes here.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    }
};

export default ProfileTutor