import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Api from "../../Api";
import CalendarCarousel from "./CalendarCarousel";
import CalendarByWeek3Steps from "./CalendarByWeek3Steps";
import './CalendarWeekDesktop.scss'


function CalendarWeekDesktop(props) {
  // let { tutorId } = useParams();
  const mode = props.mode || 'book'
  const matrix = new Array(7).fill(0).map(() => new Array(24).fill(0));
  const [availability, setAvailability] = useState(props.availability || matrix)

  useEffect(() => {
  }, [])

  function onTimeClick(day, hour) {
    const av = [...availability]
    av[day][hour] = 1-av[day][hour]
    setAvailability(av)
  }
  
  function onSaveButtonClick() {
    Api.put('/tutors', {availability}).then(response => {
      console.log('success')
    }).catch(error => {
      console.error(error)
    })
  }

  return (
    <div>
      {mode == 'edit' && (
        <div className="d-flex mb-2 justify-content-between align-items-center">
          <span className="text-muted">คลิกที่ตารางด้านล่างเพื่อแก้ไขเวลา</span>
          <button className="btn btn-primary" onClick={onSaveButtonClick}>บันทึกการเปลี่ยนแปลง</button>
        </div>
      )}
      {mode == 'book' && (
        <div className="d-flex mb-2 justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="btn-group">
              <button className="btn btn-outline-primary py-0 px-1" type="button" aria-label="prev"><i
                className="bx bx-chevron-left"></i></button>
              <button className="btn btn-outline-primary py-0 px-1" type="button" aria-label="next"><i
                className="bx bx-chevron-right"></i></button>
            </div>
            <div className="h5 mb-0 ml-3 font-weight-bold">23 ก.ค. - 31 ก.ค.</div>
          </div>
        </div>
      )}
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
            {[...Array(7).keys()].map(day => (
              <td onClick={e => onTimeClick(day, hour)} className={availability[day][hour]?'active':''}>&nbsp;</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}


export default CalendarWeekDesktop