import React from "react";
import startOfWeek from "date-fns/startOfWeek";
import addWeeks from "date-fns/addWeeks";
import addDays from "date-fns/addDays";
import Api from '../../Api'
import Utils from '../../Utils'
import CalendarPartOfDay from './CalendarPartOfDay'

class CalendarCarousel extends React.Component {


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

      <div class="mt-3 d-flex" role="group" aria-label="...">
        <div className="w-25">
          <a class="left carousel-control" href="#carouselCalendar" data-slide="prev">
          <i className="bx bx-md bx-caret-left"></i>
          </a>
        </div>
        <div className="border w-100 text-center">
          <h4 className="mb-0">กันยายน</h4>

        </div>
        <div className="w-25">
         <a class="left carousel-control" href="#carouselCalendar" data-slide="next">

          <i className="bx bx-md bx-caret-right"></i>
          </a>

        </div>
      </div>
      
       <div id="carouselCalendar" class="mt-2 carousel slide" data-ride="carousel" data-interval="false">
         <div class="carousel-inner">
         {Utils.range(this.numberOfWeeks).map(i => (
            <div className={`carousel-item ${(i==0)?'active':''}`}>
              <CalendarPartOfDay startOfWeek={addWeeks(startOfWeek(new Date()),i)} isRecurring="false" availability={this.props.availability}/>
            </div>
         ))}
        
         </div>
       </div>
      </div>
    }
}

export default CalendarCarousel