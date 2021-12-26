import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import Utils from '../../../Utils'
import AppointmentCard from './AppointmentCard'

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
        <AppointmentCard appointment={ap} />
      ))}

      
    
      
      
      
     </div>

  }
}
export default AppointmentList