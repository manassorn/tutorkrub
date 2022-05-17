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
    if(location.href.indexOf('?teststatuses') > 0) {
      const statuses = ['created','accepted','completed','askedcancel','cancelled','expired','hasaproblem','disputed']
      const appointments = statuses.map(status => {
        const ap = {
          course: {title: 'Course Title'},
          tutor: {name: 'Firstname Lastname'},
          startTime: new Date(),
          length: 1,
          status: status
        }
        return ap
      })
      this.setState({ appointments })
    } else {
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
    
  }


  render() {
    return <div className="container" style={{maxWidth:'720px'}}>



      <div className="py-4 d-sm-none">
        <div className="btn-group d-flex" role="group" aria-label="Basic example">
          {this.icons.map((icon, i) => (
            <button type="button" className="btn btn-white font-13 w-25" style={{position:'relative'}} key={icon}>
              <i className={"bx bx-md my-0 " + icon}></i><br/>
              {this.labels[i]}
              <span className="badge badge-pill badge-danger" style={{position:'absolute',top:'10px',right:'10px'}}>3</span>
            </button>

          ))}

        </div>
      </div>

      <div className="py-4 d-none d-sm-block">
        <div className="btn-group d-flex" role="group" aria-label="Basic example">
          {this.icons.map((icon, i) => (

            <button type="button" className="btn btn-white w-100" key={icon}>
              {this.labels[i]} &nbsp;&nbsp;
              <span className="badge badge-pill badge-danger">3</span>
            </button>
          ))}

        </div>
      </div>
      
      {this.state.appointments.map(ap => (
        <AppointmentCard appointment={ap} key={ap}/>
      ))}

      
    
      
      
      
     </div>

  }
}
export default AppointmentList