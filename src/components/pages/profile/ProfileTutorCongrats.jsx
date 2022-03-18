import React from "react";
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
                  <img src="" className="rounded-circle shadow p-1 m-3" width="130" height="130" alt=""/>
                  <h4>ยินดีต้อนรับ<br/>ติวเตอร์คนใหม่</h4>
                  <p>คุณสอนวิชาอะไร (เลือกได้หลายวิชา)</p>
                </div>
                <div>
                  {Constant.subjects.map(subject => (
                    <CheckBoxBadge label={subject}/>
                  ))}

                </div>
                <div className="modal-footerx text-center mt-4">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">กลับ</button>
                  <button type="button" className="btn btn-primary ml-2">ต่อไป</button>
                </div>







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
      <input className="form-check-input" type="checkbox" id={this.props.lable} value="option3"/>
        <label className="form-check-label" htmlFor="inlineCheckbox3">{this.props.label}</label>
    </div>
  }
}

export default ProfileTutorContrats