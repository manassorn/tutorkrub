import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Api from '../../../Api'
import DateUtils from '../../../DateUtils'
import CalendarWeekBookTime from "../../calendar/CalendarWeekBookTime";

function Book() {
  let { courseId } = useParams();
  const [course, setCourse] = useState(null)
  const [tutor, setTutor] = useState(null)
  const [scheduleDateTime, setScheduleDateTime] = useState(null)
  //
  useEffect(() => {
    Api.get(`/search/courses?id=${courseId}`).then(response => {
      const course = response.data.data[0]
      setCourse(course)

      return Api.get(`/search/tutors?id=${course.tutor}`).then(res => {
        const tutor = res.data.data[0]
        setTutor(tutor)
      })
    }).catch(error => {
      console.error(error)
    })
  }, [])

  function onDateTimeClick(date) {
    console.log('aa')
    setScheduleDateTime(date)
  }

  return (
    <div className="mt-5 bg-light">
      <div className="d-flex justify-content-center p-3 border-bottom bg-white">
        {[1,2,3,4].map(i => (
          <span className="ml-5">
            <span className="badge badge-primary" style={{fontSize:'100%'}}>{i}</span>
            <span className="ml-1 text-muted">เลือกวัน/เวลา</span>
          </span>
        ))}
      </div>
      <div className="container pt-5">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div>
                    <h5 className="font-weight-bold mb-0">นัดหมาย</h5>
                  </div>
                  <div className="dropdown ml-auto">
                    <div className="cursor-pointer text-dark font-24 dropdown-toggle dropdown-toggle-nocaret"
                         data-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded"></i>
                    </div>
                    <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item"
                                                                          href="javaScript:;">Action</a>
                      <a className="dropdown-item" href="javaScript:;">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="javaScript:;">Something else here</a>
                    </div>
                  </div>
                </div>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h6 className="mb-0 font-weight-bold">{course && course.title}</h6>
                    <p className="mb-0 text-secondary">สอนโดย {tutor && tutor.name}</p>
                  </div>
                  <p className="mb-0 text-purple">฿{course && course.price}</p>
                </div>
                <hr/>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h6 className="mb-0 font-weight-bold">{scheduleDateTime?DateUtils.formatDate(scheduleDateTime):'วันและเวลานัดหมาย'}</h6>
                    <p className="mb-0 text-secondary">{scheduleDateTime?DateUtils.formatHourPeriod(scheduleDateTime.getHours(),1):'00:00น.'}</p>
                  </div>
                  {!scheduleDateTime && <p className="mb-0  text-warning">ยังไม่เลือกเวลา <i className="bx sm bx-error"></i> </p>}
                </div>
                <hr/>
                <div className="media align-items-center">
                  <div className="media-body">
                    <h6 className="mb-0 font-weight-bold">ช่องทางชำระเงิน</h6>
                  </div>
                </div>

                <div className="media align-items-center border p-2 radius-10 mt-2">
                  <div className="media-body">
                    <div className="form-check">
                      <input type="radio" name="paymentmethod" className="form-check-input"/>
                      <label className="form-check-label">ทรุมันนี่ วอลเล็ท</label>
                    </div>
                  </div>
                  <img src="https://www.omise.co/assets/pricing/truemoney-b30675ae6b2cbd2de51b7e89d2bd7df3f6db5091cfd2ab429cd437921bc19c6f.svg" width="80" />
                </div>

                <div className="media align-items-center border p-2 radius-10 mt-2">
                  <div className="media-body">
                    <div className="form-check">
                      <input type="radio" name="paymentmethod" className="form-check-input"/>
                      <label className="form-check-label">พร้อมเพย์</label>
                    </div>
                  </div>
                  <img src="https://www.omise.co/assets/pricing/promptpay-b5504a07613f158a62f014647ba862aba4f22af1a116f6ca02aafb1770fd7e46.svg" width="80" />
                </div>

                <div className="media align-items-center border p-2 radius-10 mt-2">
                  <div className="media-body">
                    <div className="form-check">
                      <input type="radio" name="paymentmethod" className="form-check-input"/>
                      <label className="form-check-label">บัตรเครดิต</label>
                    </div>
                  </div>
                  <img src="https://www.omise.co/assets/pricing/promptpay-b5504a07613f158a62f014647ba862aba4f22af1a116f6ca02aafb1770fd7e46.svg" width="80" />
                </div>

                <div className="text-right mt-3">
                  <button type="button" className="btn btn-primary radius-10 ml-lg-3">&nbsp;&nbsp;ชำระเงิน<i className="bx bx-chevron-right"></i></button>
                </div>
              </div>

            </div>

          </div>
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                {tutor && <CalendarWeekBookTime availability={tutor.availability} onDateTimeClick={onDateTimeClick}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Book