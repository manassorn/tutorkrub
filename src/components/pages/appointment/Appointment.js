import React from "react";
import Api from '../../../Api'
import Utils from '../../../Utils'
import SimpleTitle from '../../common/SimpleTitle'
import AppointmentChat from './AppointmentChat'
import AppointmentProgressBar from './AppointmentProgressBar'
import ActionCardNew from './actionCards/New'
import './Appointment.css'

class Appointment extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        weekIncrement: 0
      }
      this.appointmentId = location.href.split('/').pop()
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
        return <div class="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
      
       <SimpleTitle title='รายละเอียดนัดหมาย' />
       
       
       
              <div class="p-3">
        <div>
         <div class="">
          <div class="media align-items-top"> 
           <div class=""> 
            <img src="/assets/images/avatars/avatar-1.png" width="40" height="40" class="rounded-circle" alt="" /> 
           </div> 
           <div class="media-body pl-2"> 
            <h4 class="mb-1 font-weight-bold">รับสอนคณิตศาสตร์ </h4> 
             
           </div> 
          </div> 
         
          
          <div class="mt-2 media align-items-center"> 
           <div class="product-img"> 
            <i className="bx bx-calendar" style={{fontSize:'30px'}}></i>

           </div> 
           <div class="media-body pl-3"> 
            <h6 class="mb-0 font-weight-bold">{Utils.formatDate(new Date())}</h6> 
           </div> 
          </div>
          <div class="mt-2 media align-items-center"> 
           <div class="product-img"> 
           <i className="bx bx-alarm" style={{fontSize:'30px'}}></i>
           </div> 
           <div class="media-body pl-3"> 
            <h6 class="mb-0 font-weight-bold">{Utils.formatHourPeriod(1,1)}</h6> 
           </div> 
          </div>
          
          
        <div className="mt-2">
          <div className="appointment-badge bg-light-info text-info">
          รอติวเตอร์ตอบรับ
          </div>
        </div>
        
        
        <ActionCardNew/>
        
        <div className="alert alert-info">
          <h4>รอติวเตอร์ตอบรับ</h4>
          <hr/>
          <p>นัดหมายได้ถูกส่งไปยังติวเตอร์ ติวเตอร์จะตอบรับก่อนเวลานัดหมาย 1 วัน</p>
        </div>
        
        <div className="alert alert-success">
          <h4>ติวเตอร์ตอบรับแล้ว</h4>
          <hr/>
          <p>กรุณาออนไลน์ก่อนเวลานัดหมาย 15 นาที</p>
        </div>
        
        
        <div className="alert alert-info">
          <h4>ถึงเวลานัดหมาย</h4>
          <hr/>
          <p>หากติวเตอร์ยังไม่มา
          กรุณากดปุ่มด้านล่างเพื่อติดต่อเจ้าหน้าที่</p>
          <a href="#" className="btn btn-danger">ติวเตอร์ยังไม่มา</a>

          
        </div>
        
        
        <div className="alert alert-secondary">
        
          <h4>เลยเวลานัดหมาย</h4>
          <hr/>
          <p>กรุณาออนไลน์ก่อนเวลานัดหมาย 15 นาที</p>
          <a href="#" className="btn btn-primary">ยืนยันว่าเรียนจบแล้ว</a>
        </div>
        
        
        <div className="alert alert-warning">
          <h4>นัดหมายใหม่</h4>
          <hr/>
          <p>หากไม่ตอบรับ 1 วันก่อนเวลานัดหมาย นัดหมายจะถูกยกเลิกอัตโนมัติ<br/>
          </p>
          <a href="#" className="btn btn-primary">ตอบรับ</a>
          <a href="#" className="btn btn-danger">ปฏิเสธ</a>
          <a href="#" className="btn btn-outline-primary btn-white">ขอเปลี่ยนเวลา</a>

          
        </div>


        <div className="alert alert-success">
          <h4>นัดหมายยืนยัน</h4>
          <hr/>
          <p>กรุณาออนไลน์ก่อนเวลานัดหมาย 10 นาที</p>
        </div>
        
        
        
        <div className="alert alert-info">
          <h4>ถึงเวลานัดหมาย</h4>
          <hr/>
          <p>หากนักเรียนยังไม่มากรุณากดปุ่มด้านล่างเพื่อติดต่อเจ้าหน้าที่ </p>
          <a href="#" className="btn btn-danger">นักเรียนยังไม่มา</a>

        </div>
        
        
       <div className="alert alert-secondary">
          <h4>เลยเวลานัดหมาย</h4>
          <hr/>
          <p>เราจะโอนเงินให้ทันที หลังจากนักเรียนกดยืนยัน 
          หากนักเรียนลืมกดยืนยัน เราจะโอนเงินให้ภายใน 24 ชั่วโมง
          
          </p>
        </div>
 

         </div>
        </div>
        
        
       </div>
       
       <div className="row">
       <div className="col-sm-6">
       <AppointmentChat appointmentId={this.appointmentId}/>
       </div>
       
       <div className="col-sm-6">
       <div className="pl-3 pt-3 border-top">
       <h3>
       ประวัติ
       </h3>
        <ol className="timeline">
        <li>ติวเตอร์เปลี่ยนเวลานัดหมาย
          <small>{Utils.formatTimestamp(new Date())}</small>
        </li>
        <li>ติวเตอร์ตอบตกลง
          <small>{Utils.formatTimestamp(new Date())}</small>
        </li>
        <li>นัดหมายถูกสร้าง
          <small>{Utils.formatTimestamp(new Date())}</small>
        </li>
        
        </ol>
       </div>
       </div>
       
       </div>
       
       
     </div> 

    }
}
export default Appointment