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
import './ProfileTutorCongrats.scss'

class ProfileTutorContrats extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
        }
        this.subjectOptions = Constant.subjects.map(a => {return {value:a, label:a}})
        this.levelOptions = Constant.schoolLevels.map(a => {return {value:a, label:a}})
    }

    
    render() {
      
      return <div>
        <div className="modal d-block" tabIndex="-1" role="dialog" id="editTutorPrifileModal">
          <div className="modal-dialog modal-dialog-centeredx" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="pt-5 text-center">
                  <img src="" className="rounded-circle shadow p-1" width="130" height="130" alt=""/>
                  <h4>ยินดีต้อนรับ<br/>ติวเตอร์คนใหม่</h4>
                </div>
                <div>
                  <CheckBoxBadge/>
                  <CheckBoxBadge/>

                </div>







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

class CheckBoxBadge extends React.Component {
  render() {
    return <div className="form-check form-check-inline border badge badge-pill text py-1 px-2">
      <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"/>
        <label className="form-check-label" htmlFor="inlineCheckbox3">Unity</label>
    </div>
  }
}

export default ProfileTutorContrats