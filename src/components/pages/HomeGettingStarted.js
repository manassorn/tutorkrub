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
      return <div className="mx-auto col-md-5 col-sm-12 pt-5">
          <div className="text-center">
              <span className="h6">4 ขั้นตอน</span>
              <p className="h4">ง่ายๆ ในการ</p>
          </div>
          <ul className="nav nav-border-bottom justify-content-center">
              <li className="nav-item">
                  <a className={`nav-link px-5 ${this.state.tab == 'tutor'? 'active' :''}`} href="#" onClick={e => this.clickTab('tutor')}>สอน</a>
              </li>
              <li className="nav-item">
                  <a className={`nav-link px-5 ${this.state.tab == 'student'? 'active' :''}`} href="#" onClick={e => this.clickTab('student')}>เรียน</a>
              </li>
          </ul>
          <div className="p-3">





          <div class="mt-2 media"> 
           <div class="product-img"> 
            <i className="bx bx-id-card" style={{fontSize:'30px'}}></i>
           </div> 
           <div class="media-body pl-3"> 
            <h6 class="mb-0 font-weight-bold">1. ลงทะเบียน</h6> 
            <p className="mb-1">
            กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน
            </p>
            <a href="/course/add" className="btn btn-outline-primary">
              สมัครสมาชิก
            </a>
           </div> 
          </div>
          
          
          
         <div class="mt-4 media"> 
           <div class="product-img"> 
            <i className="bx bx-calendar" style={{fontSize:'30px'}}></i>
           </div> 
           <div class="media-body pl-3"> 
            <h6 class="mb-0 font-weight-bold">2. สร้างคอร์สเรียน</h6> 
            <p className="mb-1">
 เลือกหมวดหมู่ และกรอกเนื้อหาให้ครบถ้วน เพื่อให้นักเรียนค้นพบได้ง่ายยิ่งขึ้น
            </p>
            <a href="/course/add" className="btn btn-outline-primary">
              สมัครสมาชิก
            </a>
           </div> 
          </div>
          
          
         <div class="mt-4 media"> 
           <div class="product-img"> 
            <i className="bx bx-video" style={{fontSize:'30px'}}></i>
           </div> 
           <div class="media-body pl-3"> 
            <h6 class="mb-0 font-weight-bold">3. เริ่มสอน</h6> 
            <p className="mb-1">
 ........
            </p>
           </div> 
          </div>
          
          
          
          
         <div class="mt-4 media"> 
           <div class="product-img"> 
            <i className="bx bx-wallet" style={{fontSize:'30px'}}></i>
           </div> 
           <div class="media-body pl-3"> 
            <h6 class="mb-0 font-weight-bold">4. รับเงินทันทีเมื่อสอนจบ</h6> 
            <p className="mb-1">
 ........
            </p>
           </div> 
          </div>


          </div>
      </div>

    }
}

export default HomeGettingStarted