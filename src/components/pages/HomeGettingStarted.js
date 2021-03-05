import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'
import './HomeGettingStarted.css'

class HomeGettingStarted extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          tab: 'tutor'
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
    
    clickTab(tab) {
      this.setState({tab})
    }

    render() {
      return <div>
          <div className="text-center">
              <span class="h6">4 ขั้นตอน</span>
              <p className="h4">ง่ายๆ ในการ</p>
          </div>
          <ul className="nav nav-border-bottom justify-content-center">
              <li className="nav-item">
                  <a className={`nav-link px-5 ${this.state.tab == 'tutor'? 'active' :''}`} href="#" onClick={e => this.clickTab('tutor')}>เป็นติวเตอร์</a>
              </li>
              <li className="nav-item">
                  <a className={`nav-link px-5 ${this.state.tab == 'student'? 'active' :''}`} href="#" onClick={e => this.clickTab('student')}>เป็นนักเรียน</a>
              </li>
          </ul>
          <div className="p-3">
              <div className="d-flex mb-3">
                  <div className="icon-circle">
                      <i className="bx bx-id-card bx-md"></i>
                  </div>
                  <div className="ml-3">
                    <h6 className="font-weight-bold mb-1">1. ลงทะเบียน</h6>
                    <p className="mb-1">กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน</p>
                    <button className="btn btn-outline-primary">สมัครสมาชิก</button>
                  </div>
              </div>
              <div className="d-flex">
                  <div className="icon-circle">
                      <i className="bx bx-calendar-event bx-md"></i>
                  </div>
                  <div className="ml-3">
                      <h6 className="font-weight-bold mb-1">1. ลงทะเบียน</h6>
                      <p className="mb-1">กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน</p>
                      <button className="btn btn-outline-primary">สมัครสมาชิก</button>
                  </div>
              </div>
          </div>
      </div>

    }
}

export default HomeGettingStarted