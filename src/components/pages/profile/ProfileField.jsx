import React from "react";
import {Link} from "react-router-dom";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import './ProfileEdit.css'

class ProfileField extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
  }

  render() {

    return <div className="d-flex justify-content-between mt-3">
      <div>
        <h6 className="mb-0 text-muted">อีเมล</h6>
        <b id="email-display">{this.state.user.email || "gg@gmail.com"}</b>
      </div>
      <a href="javascript:void(0)" edit-section="edit-email-section" className="edit-link">แก้ไข</a>
    </div>

  }
};

export default ProfileField