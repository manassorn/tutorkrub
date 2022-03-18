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

class ProfileTutorContrats extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
        }
        this.subjectOptions = Constant.subjects.map(a => {return {value:a, label:a}})
        this.levelOptions = Constant.schoolLevels.map(a => {return {value:a, label:a}})
    }

    
    render() {
      
      return <div style={{background:'#28223f'}}>
        <div className="modal d-block" tabIndex="-1" role="dialog" id="editTutorPrifileModal">
          <div className="modal-dialog modal-dialog-centeredx" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <div className="pt-5 text-center">
                  <img src="" className="rounded-circle shadow p-1" width="130" height="130" alt=""/>
                  <h2>ยินดีต้อนรับ<br/>ติวเตอร์คนใหม่</h2>
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

export default ProfileTutorContrats