import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Api from "../../Api";
import CalendarCarousel2 from "./CalendarCarousel2";
import CalendarByWeek3Steps from "./CalendarByWeek3Steps";
import './CalendarWeekDesktop.scss'


function CalendarWeekDesktop() {
  let { tutorId } = useParams();
  const [tutor, setTutor] = useState(null)

  useEffect(() => {
    Api.get(`/search?tutorid=${tutorId}`).then(response => {
      setTutor(response.data.data[0])
    }).catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <div>
      <div className="d-flex mb-2">
        <div className="btn-group">
          <button className="btn btn-outline-primary py-0 px-1" type="button" aria-label="prev"><i
            className="bx bx-chevron-left"></i></button>
          <button className="btn btn-outline-primary py-0 px-1" type="button" aria-label="next"><i
            className="bx bx-chevron-right"></i></button>
        </div>
        <div className="h5 mb-0 ml-2 font-weight-bold">23 ก.ค. - 31 ก.ค.</div>
      </div>
      <table className="table table-bordered table-sm schedule">
        <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col" style={{width: '12.5%'}} className="text-center">จันทร์</th>
          <th scope="col" style={{width: '12.5%'}} className="text-center">อังคาร</th>
          <th scope="col" style={{width: '12.5%'}} className="text-center">พุธ</th>
          <th scope="col" style={{width: '12.5%'}} className="text-center">พฤหัส</th>
          <th scope="col" style={{width: '12.5%'}} className="text-center">ศุกร์</th>
          <th scope="col" style={{width: '12.5%'}} className="text-center">เสาร์</th>
          <th scope="col" style={{width: '12.5%'}} className="text-center">อาทิตย์</th>
        </tr>
        </thead>
        <tbody>
        {[...Array(24).keys()].map(hour => (
          <tr>
            <th scope="row" className="text-center">{('0' + hour).substr(-2)}:00</th>
            {[1,2,3,4,5,6,7].map(i => (
              <td>&nbsp;</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}


export default CalendarWeekDesktop