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
          <div className="text-center mb-3">
              <span className="h6">3 ขั้นตอนง่าย ๆ</span>
              <p className="h4">ง่ายๆ ในการ</p>
          </div>
          
          
      <div className="row mx-0">
          <div className="col-md-3 mb-4">
            <div class="title-icon"> 
            <i className="bx bx-id-card"></i>
           </div> 
           <div>
              
              <h4 class="font font-weight-bold">1.ลงทะเบียน</h4> 
              <p className="">
                กรอกชื่อ นามสกุล อีเมลหรือเบอร์โทรศัพท์ให้ครบถ้วน
              </p>
              <a href="/register" className="btn btn-block btn-outline-primary py-2">
              สมัครสมาชิก
              </a>
           </div>
          </div>
          
          
          <div className="col-md-3 mb-4">
            <div class="title-icon"> 
            <i className="bx bx-calendar"></i>
           </div> 
           <div>
              
              <h4 class="font font-weight-bold">2.เลือกเวลาเรียนและชำระเงิน</h4> 
              <p className="">
                เลือกเวลาเรียนได้เอง เลือกเวลาเรียนที่สะดวก ไม่ว่าเสาร์อาทิตย์ หรือวันธรรมดา ไม่ว่าเช้าตรู่หรือเที่ยงคืน
              </p>
              <a href="/explore" className="btn btn-block btn-outline-primary py-2">
              ค้นหาวิชาเรียน
              </a>
           </div>
          </div>
          
          <div className="col-md-3">
            <div class="title-icon"> 
            <i className="bx bx-video"></i>
           </div> 
           <div>
              
              <h4 class="font font-weight-bold">3.เริ่มเรียน</h4> 
              <p className="">
                เตรียมตัวก่อนเวลานัดหมาย 10 นาที ตรวจสอบอินเตอร์และอุปกรณ์ว่าพร้อมใช้งาน
              </p>
           </div>
          </div>
          
          
          <div className="col-md-3">
            <div class="title-icon"> 
            <i className="bx bx-wallet"></i>
           </div> 
           <div>
              
              <h4 class="font font-weight-bold">4.เรียนจบ</h4> 
              <p className="">
                
 เมื่อคุณเรียนจบ เงินจะถูกโอนเข้า "กระเป๋าตังค์" ของติวเตอร์
              </p>
           </div>
          </div>
          
          </div>
          
      </div>

    }
}

export default HomeGettingStarted