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
    <div className="border radius-10 p-2">
      <div className="d-flex align-items-center">
        <img className="mr-2 rounded rounded-lg" src={course.tutor.avatarUrl} alt="" width="80"/>
        <div className="">
          <h5 className="font-weight-bold">{course.tutor.name}</h5>
          <p className="text-secondary">ติวเตอร์</p>
        </div>
      </div>
      <div>
        <h7>วิชา
        <span>{course.subject}</span>
        </h7>
      </div>
      <div className="d-flex">
        <h7 className="w-50">ชั้นเรียน
        <span>{course.schoolLevel}</span>
        </h7>
        <h7 className="w-50">ราคา
          <span>{course.price}</span>
        </h7>
      
      </div>

    </div>
    </div>

  }
}
export default Card2