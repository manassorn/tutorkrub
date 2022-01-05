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
      
      
      <div className="row my-4 border-bottom pb-4">
      <div className="offset-md-1 col-md-10">
      <div className="row">
        <div className="col-4 border-right">
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
        <div className="col-8">
          <h5 className="card-title">Course Title</h5>
          <p className="card-text"><span className="text-muted">โดย Manassorn Vanichdilokkul</span></p>

        </div>
        

        
        <div className="col-6 mt-3">        <button className="btn btn-primary btn-block radius-10">ตกลง</button></div>
        <div className="col-6 mt-3">        <button className="btn btn-danger btn-block radius-10">ปฏิเสธ</button></div>
        
      <div className="col-12 mt-3">

        <div className="alertx alert-secondaryx text-center">
        <span className="text-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16"> <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/> </svg>
        </span>
        <span style={{verticalAlign:'bottom'}}>
          โปรดตอบรับภายใน 12 ม.ค. 13:00
        </span>
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
        <span>Manassorn Vanichdilokkul</span>
        

        </div>
        
      </div>
      </div>  
      </div>
       
  
       
       
       
       <div className="row">
       <div className="col-md-10 offset-md-1">
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