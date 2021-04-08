import React from "react";
import Api from '../../Api'
import Utils from '../../Utils'
import SimpleTitle from '../common/SimpleTitle'
import AppointmentChat from './AppointmentChat'
import './Appointment.css'

class Appointment extends React.Component {


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


         </div>
        </div>
        
        
       </div>
       
       <AppointmentChat />
       
       
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

    }
}
export default Appointment