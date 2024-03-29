import React from "react";
import './ProfileEdit.css'

class ProfileField extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return <div className="profile-field d-flex justify-content-between mt-3 position-relative">
      <div>
        <label className="font-14 mb-0 text-muted">{this.props.label}</label>
        <br/>
        <span className="" style={{fontWeight:'500'}}>{this.props.value}</span>
      </div>
      <a href="javascript:void(0)" edit-section="edit-email-section" onClick={this.props.onEditClick} className="edit-link stretched-link"data-toggle="modal" data-target="#editTutorPrifileModal">แก้ไข</a>
    </div>

  }
};

export default ProfileField