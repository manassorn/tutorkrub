import React from "react";
import Api from '../../../Api'
import Constant from '../../../Constant'
import SimpleTitle from '../../common/SimpleTitle'

class Card4 extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      tutor: {}
    }
  }

  render() {
    const tutor = this.props.tutor

    return <div className="col-md-6 mb-3">
    <div className="border radius-10 p-3 bg-white">
      <div className="d-flex align-items-centerx">
        <div>
          <img className="mr-3 rounded-circle mb-3" src={tutor.avatarUrl} alt="" width="80"/>
        </div>
        <div className="flex-grow-1">
          <h5 className="font-weight-bold mt-2 mb-1">{tutor.name}</h5>
          
          <p className="text-secondary mb-3">ติวเตอร์</p>

        </div>
        <a href="#" style={{width:'26px'}}><img src="https://i.imgur.com/d6xHzmg.png" width="26" /></a>
      </div>
          <div>
            <i className="lni lni-graduation bx-xs mr-1 text-primary" />
            <span>{tutor.teachingSubjects.join(', ')}</span>
          </div>
          <div>
            <i className="lni lni-flag-alt bx-xs mr-1 text-primary" />
            <span>{tutor.teachingLevels.join(', ') }</span>

          </div>
          <div>
            <i className="lni lni-coin bx-xs mr-1 text-primary" />
            <span>฿{tutor.price} / ชั่วโมง</span>

          </div>

    </div>
    </div>

  }
}
export default Card4