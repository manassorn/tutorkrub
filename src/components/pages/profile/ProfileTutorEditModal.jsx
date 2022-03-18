import React from "react";
import Select from 'react-select'
import {Link} from "react-router-dom";
import Api from '../../../Api'
import ProfileLayout from './ProfileLayout'
import ProfileGroup from './ProfileGroup'
import ProfileField from './ProfileField'
import FormValidation from '../../common/FormValidation'
import Constant from '../../../Constant'
import './ProfileEdit.css'

class ProfileTutor extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
        }
        this.subjectOptions = Constant.subjects.map(a => {return {value:a, label:a}})
        this.levelOptions = Constant.schoolLevels.map(a => {return {value:a, label:a}})
    }

    
    render() {
      
      return <div>
        <div className="modal" tabIndex="-1" role="dialog" id="editTutorPrifileModal">
          <div className="modal-dialog modal-dialog-centeredx" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">แก้ไข</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              {this.props.editField == "teachingSubjects" && <Select options={this.subjectOptions} />}
              {this.props.editField == "teachingLevels" && <Select options={this.levelOptions} />}
              {this.props.editField == "price" && <Price/>}
              {this.props.editField == "education" && <Education/>}
              {this.props.editField == "address" && <Address/>}







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

class Price extends React.Component {
  render() {
    return <FormValidation ref={this.form} onSubmit={e => this.submit(e)}>        <div class="form-group">
        <label for="exampleFormControlSelect1">ระดับการศึกษา</label>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">฿</span>
          </div>
          <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" required/>
          <div class="input-group-append">
            <span class="input-group-text">บาทต่อชั่วโมง</span>
          </div>
          <div class="invalid-feedback">โปรดกรอก</div>

        </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </FormValidation>
  }
}

class Education extends React.Component {
  render() {
    return <FormValidation ref={this.form} onSubmit={e => this.submit(e)}>                
        <div class="form-group">
          <label for="exampleFormControlSelect1">ระดับการศึกษา</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>ม.ปลาย</option>
            <option>ปริญญาตรี</option>
            <option>ปริญญาโท</option>
            <option>ปริญญาเอก</option>
          </select>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">สถานศึกษา</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">คณะ/สาขา</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">GPA</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
      </FormValidation>
  }
}

class Contact extends React.Component {
  render() {
    return <FormValidation ref={this.form} onSubmit={e => this.submit(e)}>                
      <div class="form-group">
        <label for="exampleFormControlSelect1">ระดับการศึกษา</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Line</option>
          <option>IG</option>
          <option>FB</option>
          <option>เบอร์โทร</option>
        </select>
      </div>
      <div class="form-group">
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    </FormValidation>
  }
}

class Address extends React.Component {
  componentDidMount() {
    const that=this
    setTimeout(() => {
      that.input.value = 'xxx'
    },1000)
    $.Thailand({
        $search: $('#search'),
        onDataFill: function(data){
          console.log(data)
          console.log(that)
          that.input.value = 'abv'
        }
    });
    }
  render() {
    return <FormValidation ref={this.form} onSubmit={e => this.submit(e)}>     
      <div class="form-group">
        <label for="exampleFormControlSelect1">ที่อยู่</label>
        <input ref={a => {this.input=a}}type="text" class="form-control" id="search" aria-describedby="emailHelp" placeholder="กรอกที่อยู่"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
    </FormValidation>

  }
}

export default ProfileTutor