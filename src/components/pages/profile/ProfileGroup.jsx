import React from "react";
import {Link} from "react-router-dom";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import './ProfileEdit.css'

class ProfileGroup extends React.Component {


  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return <div className="pt-3 pb-3 border-top">
      <h5 style={{fontWeight:600}}>{this.props.name}</h5>
      {this.props.children}
    </div>

  }
};

export default ProfileGroup