import React from "react";
import {Link} from "react-router-dom";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import './ProfileEdit.css'

class ProfileGroup extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
  }

  render() {

    return <div className="border-bottom pt-3 pb-3 border-top">
      <h6>ข้อมูลส่วนบุคคล</h6>
      {this.props.children}
    </div>

  }
};

export default ProfileGroup