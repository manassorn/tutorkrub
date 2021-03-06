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
              <div className="item">
                  <div className="icon">
                      <i className="bx bx-id-card bx-md"></i>
                  </div>
                  <div className="details">
                    <h6>1.ลงทะเบียน</h6>
                    <p>กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน</p>
                      <a href="/course/add" className="btn btn-outline-primary">
                        สมัครสมาชิก
                      </a>
                  </div>
              </div>
              <div className="item">
                  <div className="icon">
                      <i className="bx bx-calendar bx-md"></i>
                  </div>
                  <div className="details">
                    <h6>2.สร้างคอร์สเรียน</h6>
                    <p>เลือกหมวดหมู่ และกรอกเนื้อหาให้ครบถ้วน เพื่อให้นักเรียนค้นพบได้ง่ายยิ่งขึ้น</p>
                      <a href="/course/add" className="btn btn-outline-primary">
                        สร้างคอร์ส
                      </a>
                  </div>
              </div>
              
              <div className="item">
                  <div className="icon">
                      <i className="bx bx-video bx-md"></i>
                  </div>
                  <div className="details">
                    <h6>3.เริ่มสอน</h6>
                    <p>กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน</p>
                  </div>
              </div>
              <div className="item">
                  <div className="icon">
                      <i className="bx bx-wallet bx-md"></i>
                  </div>
                  <div className="details">
                    <h6>4.รับเงินทันทีเมื่อสอนจบ</h6>
                    <p>กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน</p>
                  </div>
              </div>
          </div>
      </div>

    }
}

export default HomeGettingStarted