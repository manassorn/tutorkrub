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
    this.icons = ['bx-bitcoin', 'bx-message', 'bx-chat', 'bx-task']
    this.labels = ['รอตอบรับ',
    'ยืนยันแล้ว',
    'สำเร็จ',
    'ยกเลิก',
    ]
  }

  componentDidMount() {
    Api.get('/appointments')
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
        <div className="btn-group d-flex d-sm-none" role="group" aria-label="Basic example">
        {this.icons.map((icon, i) => (
          <button type="button" className="btn btn-white font-13 w-25" style={{position:'relative'}}>
          
            <i className={"bx bx-md my-0 " + icon}></i><br/>
          {this.labels[i]}
          <span className="badge badge-pill badge-danger" style={{position:'absolute',top:'10px',right:'10px'}}>3</span>
          </button>
        
        ))}

        </div>
        <div className="btn-group d-none d-sm-block" role="group" aria-label="Basic example">
        {this.icons.map((icon, i) => (
          
          <button type="button" className="btn btn-white">
          
            <i className={"bx " + icon}></i>&nbsp;
          {this.labels[i]} &nbsp;
          <span className="badge badge-pill badge-danger">3</span>
          </button>
        ))}
          
        </div>
      </div>
      
      {this.state.appointments.map(ap => (
        <div class="card radius-10 border"> 
         <div class="card-body"> 
          <div class="media align-items-center"> 
          <div className="text-center">
           <h5 class="card-title">{Utils.formatFullMonth(ap.startTime)}<br/>{ap.startTime.getDate()}</h5> 
           <h6 className="card-subtitle">
                10:00
            </h6>
            <p>
            <span className="badge bg-light-primary text-primary">รอตอบรับ
            </span>
            <a href={`/appointment/${ap.id}`} class="card-link"><i className="bx bx-info-circle"></i></a>


            </p>
          </div>
           <div class="media-body ml-3 pl-3 border-left"> 
            


            <div className="row">
              <div className="col-md-8">
            <h5 class="card-title">{ap.course.title}</h5> 
            <p class="card-text"><span className="text-muted">โดย {ap.tutor.name}</span></p> 
            <p class="card-text"><span className="badge bg-light-primary text-primary">ใหม่</span>
              <a href={`/appointment/${ap.id}`} class="card-link"><i className="bx bx-info-circle"></i></a>

            </p> 
            <a href={`/appointment/${ap.id}`} class="card-link stretched-link">ดูรายละเอียด</a>
            <hr className="d-block d-md-none"/>

              </div>
              <div className="col-md-4">
            <p class="card-text">
            <span>
            <i className="bx bx-bitcoin"></i>
            </span> รอชำระเงิน
            </p>
            <a href={`/appointment/${ap.id}`} class="btn btn-outline-primary btn-block stretched-link">ชำระเงิน</a>

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