import React from "react";
import Api from '../../../Api'
import Utils from '../../../Utils'
import SimpleTitle from '../../common/SimpleTitle'
import AppointmentChat from './AppointmentChat'
import AppointmentProgressBar from './AppointmentProgressBar'
import StudentNewActionCard from './actionCards/StudentNew'
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
      
      
      <div className="row">
      <div className="offset-md-1 col-md-10 border-bottom pb-4">
      <div className="row">
        <div className="col-12 bg-light p-3 mb-3">
        <i class='bx bx-dots-horizontal-rounded float-right font-24'></i>
          <div className="text-center">
            <h5 className="card-title">มกราคม<br/>12</h5>
            <h6 className="card-subtitle">
              10:00
            </h6>
            <p className="mb-2">
            <span className="badge text-primary bg-light-primary">รอตอบรับ</span>
            </p>
            <div>
            </div>
          </div>
        </div>
 
        

        

        

        
        
        <div className="col-12">
          <h5 className="card-titlex">Course Title</h5>

        </div>
        
        <div className="col-4">
          <h6 className="text-muted mb-1">วิชา</h6>
          <p>คณิตศาสตร์</p>
        </div>
        <div className="col-4">
          <h6 className="text-muted mb-1">เวลา</h6>
          <p>1 ชั่วโมง</p>
        </div>
        <div className="col-4">
          <h6 className="text-muted mb-1">ราคา</h6>
          <p>฿100.00</p>
        </div>
        
        <div className="col-12 border-top pt-3">
          <img src="" width="32" height="32" class="rounded-circle shadow" alt=""/>
        &nbsp;&nbsp;
        <a href="x">Manassorn Vanichdilokkul</a>
        </div>
        
        <div className="col-6 mt-3">        <button className="btn btn-primary btn-block radius-10">ตกลง</button></div>
        <div className="col-6 mt-3">        <button className="btn btn-danger btn-block radius-10">ปฏิเสธ</button></div>
        
      <div className="col-12 mt-3">

        <div className="alertx alert-secondaryx text-center">
        <span style={{color:'#F2B504', verticalAlign:'text-bottom'}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        </span>
        <span>
          โปรดตอบรับภายใน 12 ม.ค. 13:00
        </span>
        </div>
        </div>
        
      </div>
      </div>  
      </div>
       
  
       
       
       
       <div className="row">
       <div className="col-md-10 offset-md-1">
       <AppointmentChat appointmentId={this.appointmentId}/>
       </div>
       
       <div className="col-md-10 offset-md-1 border-top">
       <div className="py-4">
       <h5>
       ประวัติ
       </h5>
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