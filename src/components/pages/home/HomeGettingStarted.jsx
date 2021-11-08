import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
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
      return <div className="pt-5">
          <div className="text-center">
              <span className="h6">4 ขั้นตอนง่าย ๆ</span>
              <p className="h4">วิธีใช้งาน</p>
          </div>
          

          <div className="row mx-0">
        

          <div className="offset-md-2 col-md-5 border-left pt-4">

          <div class="mt-2 media">
           <div class="product-img">
            <i className="bx bx-id-card" style={{fontSize:'30px'}}></i>
           </div>
           <div class="media-body pl-3">
            <h6 class="mb-0 font font-weight-bold">1. ลงทะเบียน</h6>
            <p className="mb-1">
            กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน
            </p>
            <a href="/course/add" className="btn btn-block btn-outline-primary py-2">
              สมัครสมาชิก
            </a>
           </div>
          </div>


         <div class="mt-4 media">
           <div class="product-img">
            <i className="bx bx-calendar" style={{fontSize:'30px'}}></i>
           </div>
           <div class="media-body pl-3">
            <h6 class="mb-0 font-weight-bold">2. เวลาเรียนและชำระเงิน</h6>
            <p className="mb-1">
  เลือกเวลาเรียนที่สะดวก
            </p>
            <a href="/course/add" className="btn btn-block btn-outline-primary py-2">
              ค้นหาวิชาเรียน
            </a>
           </div>
          </div>



         <div class="mt-4 media">
           <div class="product-img">
            <i className="bx bx-video" style={{fontSize:'30px'}}></i>
           </div>
           <div class="media-body pl-3">
            <h6 class="mb-0 font-weight-bold">3. เริ่มเรียน</h6>
            <p className="mb-1">
 เตรียมตัวก่อนเวลานัดหมาย 10 นาที ตรวจสอบอินเตอร์และอุปกรณ์ว่าพร้อมใช้งาน
            </p>
           </div>
          </div>

         <div class="mt-4 media">
           <div class="product-img">
            <i className="bx bx-wallet" style={{fontSize:'30px'}}></i>
           </div>
           <div class="media-body pl-3">
            <h6 class="mb-0 font-weight-bold">4. เงินถูกโอนไปยังติวเตอร์</h6>
            <p className="mb-1">
 เมื่อคุณเรียนจบ เงินจะถูกโอนเข้า "กระเป๋าตังค์" ของติวเตอร์
            </p>
           </div>
          </div>






          </div>






          </div>






      </div>

    }
}

export default HomeGettingStarted;