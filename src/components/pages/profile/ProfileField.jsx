import React from "react";
import './ProfileEdit.css'

class ProfileField extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return <div className="profile-field d-flex justify-content-between mt-3">
      <div>
        <h6 className="mb-0 text-muted">{this.props.label}</h6>
        <b id="email-display">{this.props.value}</b>
      </div>
      <a href="javascript:void(0)" edit-section="edit-email-section" className="edit-link">แก้ไข</a>
    </div>

  }
};

export default ProfileField