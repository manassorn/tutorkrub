import React, {useEffect, useState} from "react";
import Api from "../../Api";
import CalendarWeekTimeCellColor from "./CalendarWeekTimeCellColor";


function CalendarWeekEditAvailability(props) {
  // let { tutorId } = useParams();
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
      <div className="d-flex mb-2 justify-content-between align-items-center">
        <span className="text-muted">คลิกที่ตารางด้านล่างเพื่อแก้ไขเวลา</span>
        <button className="btn btn-primary" onClick={onSaveButtonClick}>บันทึกการเปลี่ยนแปลง</button>
      </div>
      <CalendarWeekTimeCellColor colorFlagMatrix={availability} colorFlagCssClassMap={(flag) => ['', 'green-glow'][flag]} onTimeClick={onTimeClick} />
    </div>
  )
}


export default CalendarWeekEditAvailability