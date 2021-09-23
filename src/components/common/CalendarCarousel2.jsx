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

      <div class="mt-3 btn-group d-flex" role="group" aria-label="...">
        <button type="button" class="btn btn-white w-25">
        <a ref={this.prevWeekRangeBtn} class="left carousel-control d-none" href="#carouselWeekRange" data-slide="prev">
        <i className="bx bx-caret-left"></i>
        </a>
        <a class="left carousel-control" href="#carouselCalendar" data-slide="prev" onClick={e => this.prevWeekRangeBtn.current.click()}>
        <i className="bx bx-md bx-caret-left"></i>
        </a>
        </button>
        <button type="button" class="btn btn-white w-100">
        
        <h4>กันยายน</h4>
        
        </button>
        <button type="button" class="btn btn-white w-25">
          <a ref={this.nextWeekRangeBtn} class="left carousel-control d-none" href="#carouselWeekRange" data-slide="next">

          <i className="bx bx-caret-right"></i>
          </a>
          <a class="left carousel-control" href="#carouselCalendar" data-slide="next" onClick={e => this.nextWeekRangeBtn.current.click()}>

          <i className="bx bx-md bx-caret-right"></i>
          </a>


        </button>
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