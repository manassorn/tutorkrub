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

        <p className="mb-0">
          โปรดคลิกปุ่มด้านล่างเพื่อตอบรับ 
          หากติวเตอร์ไม่ตอบรับภายใน 2 วัน
          นัดหมายจะถูกยกเลิกอัตโนมัติ
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