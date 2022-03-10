import React from "react";
import Api from '../../../Api'
import Constant from '../../../Constant'
import SimpleTitle from '../../common/SimpleTitle'

class Card1 extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
      }
    }

    render() {
      const course = this.props.course
      return <div class="col-6 col-md-3">
            <div class="card" style={{'box-shadow':'none'}}>
                <div className="bg-light" style={{paddingTop:'100%',position:'relative'}}>
                <img class="card-img-top rounded rounded-lg" src={course.tutor.avatarUrl} alt="" style={{position:'absolute',top:0}}/>
                </div>
                <div class="card-body p-0 mt-2">
                    <p class="card-text">
                        <a href={`/course/${course.id}`} className="stretched-link text-dark h6">
                        {course.title}</a><br/>
                                              <span class="badge badge-pill badge-secondary">{course.schoolLevel}</span>
                                 &nbsp;             <span class="badge badge-pill badge-secondary">{course.subject}</span>

                        <div className="mt-2 font-weight-bold h6">฿{course.price}/ชั่วโมง</div>
                    </p>
                </div>
            </div>
        </div>

    }
}
export default Card1