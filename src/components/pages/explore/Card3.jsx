import React from "react";
import Api from '../../../Api'
import Constant from '../../../Constant'
import SimpleTitle from '../../common/SimpleTitle'

class Card3 extends React.Component {


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
      <div className="d-flex align-items-centerx">
        <div>
          <img className="mr-3 rounded-circle" src={course.tutor.avatarUrl} alt="" width="80"/>
        </div>
        <div className="flex-grow-1">
          <h5 className="font-weight-bold mt-2 mb-1">{course.tutor.name}</h5>
          
          <p className="text-secondary mb-3">ติวเตอร์</p>
          <div>
            <i className="lni lni-graduation bx-xs mr-1 text-primary" />
            <span>{course.subject}</span>
          </div>
          <div>
            <i className="lni lni-flag-alt bx-xs mr-1 text-primary" />
            <span>{course.schoolLevel || 'ม.1'}</span>

          </div>
          <div>
            <i className="lni lni-coin bx-xs mr-1 text-primary" />
            <span>฿{course.price} / ชั่วโมง</span>

          </div>
        </div>
        <a href="#" style={{width:'16px'}}><img src="https://i.imgur.com/d6xHzmg.png" width="16" /></a>
      </div>
      

    </div>
    </div>

  }
}
export default Card3