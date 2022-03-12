import React from "react";
import {Link} from "react-router-dom";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import './ProfileEdit.css'

class ProfileLayout extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
  }

  render() {

    return <div className="container" style={{'maxWidth':'720px'}}>
      <div className="row">
        <div className="col border rounded radius-10 m-3">
          <div className="my-3 text-center d-flex flex-column align-items-center">
            <a href="/user/edit/avatar">
              <div className="user-image">
                <img src={this.state.user.avatarUrl} className="rounded-circle shadow" width="130" height="130" alt=""/> <span className="edit-icon btn btn-primary rounded"><i className="bx bx-camera"></i></span>

              </div>
            </a>
            <b>{this.state.user.username}</b>
          </div>
          <div className="offset-md-3 col-md-6 my-3">
            <a href="/user/edit" className="btn btn-block btn-outline-primary radius-10">
              <i className="lni lni-graduation" />&nbsp;&nbsp;สมัครเป็นติวเตอร์
            </a>

          </div>

          {this.props.children}


        </div>
      </div>
    </div>

  }
};

export default ProfileLayout