import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import Utils from '../../../Utils'
import Auth from '../../../Auth'
import '../course/Course.css'
import BookNewLessonButton from './actionButtons/BookNewLessonButton'

class AppointmentCard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
    this.appointment = this.props.appointment
    this.actionButtons = this.actionButtons.bind(this)
  }

  componentDidMount() {
    Auth.observeLogin((login) => {
        if(!login.user) return
        this.setState({user:login.user})
      })
  }

  statusToDescription(status) {
    if(status == 'created') {
      return {text: 'รอตอบรับ', className: 'bg-light-primary text-primary'}
      return 'รอตอบรับ'
    } else if(status == 'accepted') {
      return {text: 'ยืนยันแล้ว', className: 'badge-primary'}
    } else if (status == 'completed') {
      return {text: 'สำเร็จ', className: 'badge-success'}
    } else if (status == 'askedcancel') {
      return {text: 'ขอยกเลิก', className: 'badge-danger'}
    } else if (status == 'cancelled') {
      return {text: 'ยกเลิกแล้ว', className: 'badge-danger'}
    } else if (status == 'expired') {
      return {text: 'หมดอายุ', className: 'badge-warning'}
    } else if (status == 'hasaproblem') {
      return {text: 'มีปัญหา', className: 'bg-dark text-white'}
    } else if (status == 'disputed') {
      return {text: 'มีข้อขัดแย้ง', className: 'bg-dark text-white'}
    } else {
      return { text: 'มีข้อขัดแย้ง', className: 'bg-dark text-white' }
    }
  }
  
  actionButtons(ap) {
    const isTutor = ap.course.tutor.id == this.state.user.id
    if(isTutor) {
      if (ap.status == 'created') {
        return <>
      <a href={`/appointment/${ap.id}`} className="btn btn-primary btn-block">ยืนยัน</a> 
      <a href = { `/appointment/${ap.id}` } className = "btn btn-danger btn-block"> ปฏิเสธ  </a>
    </> 
      }
    } else {
      if (ap.status == 'accepted' && ap.startTime.getTime() < new Date().getTime()) {
        return <a href={`/appointment/${ap.id}`} className="btn btn-success btn-block">ยืนยัน</a> 
      }
    }
    return null
    
    

  }

  render() {
    if(!this.state.user) return null
    const ap = this.appointment
    const actionButtons = this.actionButtons(ap)
    return <div className="card radius-10 border">
      <div className="card-body">
        <div className="media align-items-center">
          <div className="text-center">
            <h5 className="card-title">{Utils.formatFullMonth(ap.startTime)}<br/>{ap.startTime.getDate()}</h5>
            <h6 className="card-subtitle">
              {ap.startTime.getHours()}:00
            </h6>
            <div>
            <span className={`badge ${this.statusToDescription(ap.status).className}`}>{this.statusToDescription(ap.status).text}
            </span>
             &nbsp;<i className="bx bx-info-circle text-secondary" style={{verticalAlign:'middle'}}></i>


            </div>
          </div>
          <div className="media-body ml-3 pl-3 border-left">


            <div className="row">
              <div className="col-md-8">
                <h5 className="card-title">{ap.course.title}</h5>
                <p className="card-text"><span className="text-muted">โดย {ap.tutor.name}</span></p>
                <a className="d-none" href={`/appointment/${ap.id}`}
                   className="card-link stretched-link">ดูรายละเอียด</a>
                <hr className=" d-block d-md-none"/>

              </div>
              <div className="col-md-4">
                <p className="card-text d-none">
            <span>
            <i className="bx bx-bitcoin"></i>
            </span> รอชำระเงิน
                </p>
                
                {actionButtons}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  }
}
export default AppointmentCard