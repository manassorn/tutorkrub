import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import Utils from '../../../Utils'
import '../course/Course.css'

class AppointmentList extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    }
  }

  componentDidMount() {
    Api.get('/appointment/student/status/to_be_paid')
      .then(response => 
      {
        let appointments = response.data.data
        appointments = appointments.map(a => {
          a.startTime = Utils.strToDate(a.startTime)
          return a
        })
      this.setState({ appointments })
      }
      );
    
    
  }


  render() {
    return <div class="container" style={{maxWidth:'720px'}}> 
    
      <SimpleTitle title="รายการนัดหมาย"/>

    
      <div class="mb-3 mt-3"> 
       <ul class="nav nav-tabs"> 
        <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#Experience"><span class="p-tab-name1">นัดเรียน</span> <span class="badge badge-pill badge-danger">3</span></a> </li> 
        <li class="nav-item"> <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Biography"><span class="p-tab-name1">นัดสอน</span> <span class="badge badge-pill badge-danger">3</span></a> </li> 
       </ul> 
      </div> 
      
      <div className="mb-3">
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-primary">รอชำระเงิน</button>
          <button type="button" class="btn btn-outline-secondary">รอตอบกลับ</button>
          <button type="button" class="btn btn-outline-secondary">ตอบกลับแล้ว
            &nbsp;<span class="badge badge-pill badge-danger">3</span>
          </button>
          <button type="button" class="btn btn-outline-secondary">เรียนแล้ว</button>
        </div>
      </div>
      
      {this.state.appointments.map(ap => (
      <div class="row"> 
      
       <div class="col-md-6"> 
        <div class="card"> 
         <div class="card-body"> 
          <div class="media align-items-center"> 
           <h5 class="text-center">{Utils.formatFullMonth(ap.startTime)}<br/>{ap.startTime.getDate()}</h5> 
           <div class="media-body ml-3 pl-3 border-left"> 
            <h5 class="mb-0">{ap.courseName}</h5> 
            <p class="mb-0 text-secondary">โดย {ap.tutorName}</p> 
            <a href={`/appointment/${ap.id}`} class="btn btn-outline-primary stretched-link">ดูรายละเอียด</a>
           </div> 
          </div> 
         </div> 
        </div> 
       </div> 
       
      </div>
      
      ))}

      
      
      
      
      
     </div>

  }
}
export default AppointmentList