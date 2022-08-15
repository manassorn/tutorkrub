import React, {useEffect, useRef, useState} from "react";
import Api from "../../Api";
import Utils from "../../Utils";
import CalendarWeekTimeCellColor from "./CalendarWeekTimeCellColor";
import DateUtils from "../../DateUtils"


function CalendarWeekBookTime(props) {
  const maxWeekBook = 8
  const matrix = new Array(7).fill(0).map(() => new Array(24).fill(0));
  const [availability, setAvailability] = useState(getActualAvailability(props.availability) || matrix)
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedHour, setSelectedHour] = useState(null)
  const [weekIndex, setWeekIndex] = useState(0)
  const weeklyDates = DateUtils.getWeeklyDates(maxWeekBook)
  const weeklyDatesShortFormat = DateUtils.getWeeklyDatesShortFormat(maxWeekBook)
  const weeklyDateRanges = DateUtils.getWeeklyDateRangesShortFormat(maxWeekBook)
  const prevButton = useRef(null);
  const nextButton = useRef(null);

  useEffect(() => {
  }, [])

  function getActualAvailability(repeatingAvailability) {
    const emptyDay = Utils.range(24).fill(0)
    const day = new Date().getDay() // 0 = Sunday
    const actualAvailability = Utils.range(maxWeekBook).map(w => {
      if(w == 0) {
        const av = [...repeatingAvailability]
        for(let i = 0; i < day; i++) {
          av[i] = emptyDay
        }
        return av
      }
      return [...repeatingAvailability]
    })
    // console.log(actualAvailability)
    return actualAvailability
  }

  function onTimeClick(day, hour) {
    // if(availability[day][hour] == 0) return
    // const av = [...availability]
    // console.log(selectedDay,selectedHour)
    // if(selectedDay && selectedHour) {
    //   av[selectedDay][selectedHour] = 1
    // }
    // setSelectedDay(day)
    // setSelectedHour(hour)
    // if(av[day][hour] == 1) {
    //   av[day][hour] = 2
    // }
    // setAvailability(av)
    if(props.onDateTimeClick) {
      props.onDateTimeClick(new Date(weeklyDates[weekIndex][day].setHours(hour)))
    }
  }

  function onPrevClick() {
    setWeekIndex(Math.max(weekIndex-1,0))
  }

  function onNextClick() {
    setWeekIndex(Math.min(weekIndex+1,7))
  }

  return (
    <div>
      <div className="d-flex mb-2 justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="btn-group">
            <button className="btn btn-outline-primary py-0 px-1" type="button" aria-label="prev" ref={prevButton} onClick={onPrevClick}><i
              className="bx bx-chevron-left"></i></button>
            <button className="btn btn-outline-primary py-0 px-1" type="button" aria-label="next" ref={nextButton} onClick={onNextClick}><i
              className="bx bx-chevron-right"></i></button>
          </div>
          <div className="h5 mb-0 ml-3 font-weight-bold">
            {weeklyDateRanges[weekIndex]}
            <div className="text-grey">
              {Utils.range(maxWeekBook).map(i => (
                <span className={i == weekIndex && 'text-primary'}>&#9644;&nbsp;</span>
              ))}
            </div>
          </div>

        </div>

        <div className="text-secondary mr-2">

          จองล่วงหน้าได้ {maxWeekBook} สัปดาห์</div>
      </div>

      {Utils.range(maxWeekBook).map(i => (
        <div className={i != weekIndex && 'd-none'}>
          <CalendarWeekTimeCellColor weeklyDates={weeklyDates[i]} weeklyDatesFormat={weeklyDatesShortFormat[i]} colorFlagMatrix={availability[i]} colorFlagCssClassMap={(flag) => ['', 'green-glow', 'green-emerald'][flag]} clickable={flag => flag !== 0} onTimeClick={onTimeClick} />
        </div>
      ))}
      {/*<CalendarWeekTimeCellColor weeklyDates={weeklyDates[weekIndex]} weeklyDatesFormat={weeklyDatesShortFormat[weekIndex]} colorFlagMatrix={availability[weekIndex]} colorFlagCssClassMap={(flag) => ['', 'green-glow', 'green-emerald'][flag]} onTimeClick={onTimeClick} />*/}

    </div>
  )
}


export default CalendarWeekBookTime