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
        }
    }

    componentDidMount() {
    
    }

    render() {
      
      return <div>
        <div className="modal" tabIndex="-1" role="dialog" id="editTutorPrifileModal">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {this.props.editField == "subjects" && <Select options={[{label:'Math',value:'Math'}, {label:'English',value:'English'}]} />}
                {this.props.editField == "schoolLevels" && <Select options={[{label:'m.1',value:'m.1'}, {label:'m.2',value:'m.2'}]} />}

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