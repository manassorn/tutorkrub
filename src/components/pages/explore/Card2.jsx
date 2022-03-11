import React from "react";
import Api from '../../../Api'
import Constant from '../../../Constant'
import SimpleTitle from '../../common/SimpleTitle'

class Card2 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      course: {}
    }
  }

  render() {
    const course = this.props.course

    return <div className="col-md-6">
    <div className="border radius-10 p-3 bg-white">
      <div className="d-flex align-items-center">
        <img className="mr-3 rounded rounded-lg" src={course.tutor.avatarUrl} alt="" width="80"/>
        <div className="">
          <h5 className="font-weight-bold">{course.tutor.name}</h5>
          <p className="text-secondary">ติวเตอร์</p>
        </div>
        <a href="#" style={{width:'16px'}}><img src="https://i.imgur.com/d6xHzmg.png" width="16" /></a>
      </div>
      <div className="field mt-2">
        <label>วิชา</label>
        <span>{course.subject}</span>
      </div>
      <div className="d-flex mt-2">
        <div className="w-50 field">
          <label className="">ชั้นเรียน</label>
          <span>{course.schoolLevel}</span>
        </div>
        <div className="w-50 field">
          <label className="">ราคา</label>
          <span>{course.price}</span>
        </div>
      </div>

    </div>
    </div>

  }
}
export default Card2