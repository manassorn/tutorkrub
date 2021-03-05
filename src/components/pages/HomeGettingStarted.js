import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'
import './HomeGettingStarted.css'

class HomeGettingStarted extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          weekIncrement: 0
        }
    }

    componentDidMount() {
      /*Api.get('/crud/course')
        .then(response => 
        {
          console.log('courses',response.data.data)
        
        this.setState({ courses: response.data.data })
        }
        );
      */
    }

    render() {
      return <div>
          <div className="text-center">
              <span class="h6">4 ขั้นตอน</span>
              <p className="h4">ง่ายๆ ในการ</p>
          </div>
          <ul className="nav nav-border-bottom justify-content-center">
              <li className="nav-item">
                  <a className="nav-link active pl-5 pr-5" href="#">เป็นติวเตอร์</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link pl-5 pr-5" href="#">เป็นนักเรียน</a>
              </li>
          </ul>
          <div>
              <div className="d-flex">
                  <div className="bg-primary text-light rounded-circle align-items-center text-center" style={{width:'3.5rem',height:'3.5rem'}}>
                      <i className="bx bx-id-card bx-md"></i>
                  </div>
                  <div className="ml-3">
                    <h6 className="font-weight-bold">1. ลงทะเบียน</h6>
                    <p>กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน</p>
                    <button className="btn btn-outline-primary">สมัครสมาชิก</button>
                  </div>
              </div>
              <div className="d-flex">
                  <div className="bg-primary text-light rounded-circle align-items-center text-center" style={{width:'3.5rem',height:'3.5rem'}}>
                      <i className="bx bx-calendar-event bx-md"></i>
                  </div>
                  <div className="ml-3">
                      <h6 className="font-weight-bold">1. ลงทะเบียน</h6>
                      <p>กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน</p>
                      <button className="btn btn-outline-primary">สมัครสมาชิก</button>
                  </div>
              </div>
          </div>
      </div>

    }
}

export default HomeGettingStarted