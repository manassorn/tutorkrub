import React, {useRef} from "react";
import startOfWeek from "date-fns/startOfWeek";
import addWeeks from "date-fns/addWeeks";
import addDays from "date-fns/addDays";
import Api from '../../Api'
import Utils from '../../Utils'
import CalendarWeekPreview2 from './CalendarWeekPreview2'

function CalendarCarousel(props) {

  const numberOfWeeks = props.numberOfWeeks || 8
  const dateInWeekRanges = Utils.range(numberOfWeeks).map(i => {
    const startDate = addWeeks(startOfWeek(new Date()), i)
    const endDate = addDays(startDate, 6)
    return [startDate, endDate]
  })
  const dateRangesPrevBtn = useRef(null)
  const dateRangesNextBtn = useRef(null)

  return (
    <div>

      <div className="mt-3 d-flex" role="group" aria-label="...">
        <div className="w-25 text-center">
          <a className="left carousel-control" href="#carouselCalendar" data-slide="prev" style={{color:'black'}} onClick={e => dateRangesPrevBtn.current.click()}>
            <i className="bx bx-sm bx-caret-left" style={{lineHeight:1}}></i>
          </a>
        </div>
        <div className="w-100 text-center">

          <div id="carouselDateRanges" className="mt-2 carousel slide" data-ride="carousel" data-interval="false">

            <a className="left carousel-control d-none" href="#carouselDateRanges" data-slide="prev" ref={dateRangesPrevBtn}>&nbsp;</a>
            <a className="left carousel-control d-none" href="#carouselDateRanges" data-slide="next" ref={dateRangesNextBtn}>&nbsp;</a>

            <div className="carousel-inner">
              {dateInWeekRanges.map((r, i) => (
                <div className={`carousel-item ${(i == 0) ? 'active' : ''} h5`}>

                  {r[0].getDate()} {Utils.formatShortMonth(r[0])}&nbsp;-&nbsp;
                  {r[1].getDate()} {Utils.formatShortMonth(r[1])}
                </div>
              ))}

            </div>
          </div>
          {/*<h5 className="mb-0">กันยายน</h5>*/}


        </div>
        <div className="w-25 text-center">
          <a className="left carousel-control" href="#carouselCalendar" data-slide="next" style={{color:'black'}} onClick={e => dateRangesNextBtn.current.click()}>

            <i className="bx bx-sm bx-caret-right" style={{lineHeight:1}}></i>
          </a>

        </div>
      </div>

      <div id="carouselCalendar" className="mt-2 carousel slide" data-ride="carousel" data-interval="false">
        <div className="carousel-inner">
          {Utils.range(numberOfWeeks).map(i => (
            <div className={`carousel-item ${(i==0)?'active':''}`} key={i}>
              <CalendarWeekPreview2 startOfWeek={addWeeks(startOfWeek(new Date()),i)} isRecurring="false" availability={props.availability}/>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default CalendarCarousel