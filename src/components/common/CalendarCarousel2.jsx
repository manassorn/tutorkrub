import React from "react";
import startOfWeek from "date-fns/startOfWeek";
import addWeeks from "date-fns/addWeeks";
import addDays from "date-fns/addDays";
import Api from '../../Api'
import Utils from '../../Utils'
import CalendarAWeekPreview from './CalendarAWeekPreview'

class CalendarCarousel2 extends React.Component {


    constructor(props) {
      super(props);
      this.numberOfWeeks = 8
      this.weekRanges = Utils.range(this.numberOfWeeks).map(i => {
        const startDate = addWeeks(startOfWeek(new Date()), i)
        const endDate = addDays(startDate, 6)
        return [startDate, endDate]
      })
      
      this.prevWeekRangeBtn = React.createRef()
      this.nextWeekRangeBtn = React.createRef()
    }

    componentDidMount() {
    }
    
    

    render() {
      return <div>

      <div className="mt-3 d-flex" role="group" aria-label="...">
        <div className="w-25 text-center">
          <a className="left carousel-control" href="#carouselCalendar" data-slide="prev" style={{color:'black'}}>
          <i className="bx bx-sm bx-caret-left" style={{lineHeight:1}}></i>
          </a>
        </div>
        <div className="w-100 text-center">
          <h5 className="mb-0">กันยายน</h5>

        </div>
        <div className="w-25 text-center">
         <a className="left carousel-control" href="#carouselCalendar" data-slide="next" style={{color:'black'}}>

          <i className="bx bx-sm bx-caret-right" style={{lineHeight:1}}></i>
          </a>

        </div>
      </div>
      
       <div id="carouselCalendar" className="mt-2 carousel slide" data-ride="carousel" data-interval="false">
         <div className="carousel-inner">
         {Utils.range(this.numberOfWeeks).map(i => (
            <div className={`carousel-item ${(i==0)?'active':''}`} key={i}>
              <CalendarAWeekPreview startOfWeek={addWeeks(startOfWeek(new Date()),i)} isRecurring="false" availability={this.props.availability}/>
            </div>
         ))}
        
         </div>
       </div>
      </div>
    }
}

export default CalendarCarousel2