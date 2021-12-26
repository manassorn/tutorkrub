import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import Utils from '../../../Utils'
import '../course/Course.css'

class AppointmentCard extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    }
    this.appointment = this.props.appointment
  }

  componentDidMount() {
  }

  interpretStatus(status) {
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
    }
  }

  render() {
    const ap = this.appointment
    return <div className="card radius-10 border">
      <div className="card-body">
        <div className="media align-items-center">
          <div className="text-center">
            <h5 className="card-title">{Utils.formatFullMonth(ap.startTime)}<br/>{ap.startTime.getDate()}</h5>
            <h6 className="card-subtitle">
              {ap.startTime.getHours()}:00
            </h6>
            <p>
            <span className={`badge ${this.interpretStatus(ap.status).className}`}>{this.interpretStatus(ap.status).text}
            </span>
             &nbsp;<i className="bx bx-info-circle text-secondary" style={{verticalAlign:'middle'}}></i>


            </p>
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
                <a href={`/appointment/${ap.id}`} className="btn btn-success btn-block">ยืนยัน</a>
                <a href={`/appointment/${ap.id}`} className="btn btn-danger btn-block">ปฏิเสธ</a>


              </div>
            </div>

          </div>
        </div>
      </div>
    </div>


  }
}
export default AppointmentCard