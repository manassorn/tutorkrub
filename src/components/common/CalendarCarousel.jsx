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
      <div className="d-flex">
        <div>
        <span className="bg-secondary radius-10 p-2 d-inline-block"> 
          <img src="/assets/images/icons/appointment-book.png" width="45" alt=""/> 

        </span> 
        </div>
        <div className="ml-3">
        <h4 className="mb-1">ตารางเวลา</h4>
        <span className="text-muted">
        จองล่วงหน้าได้ 8 สัปดาห์
        </span>
        </div>
      </div>
      
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
        
        <div id="carouselWeekRange" class="mt-2 carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators" style={{bottom:'-14px'}}>
          {this.weekRanges.map((r,i) => (

            <li data-target="#carouselWeekRange" data-slide-to={i} class={(i==0)?'active':''}></li>
          ))}

          </ol>
         <div class="carousel-inner font-weight-bold">
          {this.weekRanges.map((r,i) => (
          <div className={`carousel-item ${(i==0)?'active':''}`}>

            {r[0].getDate()} {Utils.formatShortMonth(r[0])}&nbsp;-&nbsp; 
            {r[1].getDate()} {Utils.formatShortMonth(r[1])} 
            <br/>
            <br/>
          </div>
          ))}
        
         </div>
       </div>

        
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
              <CalendarPartOfDay startOfWeek={addWeeks(startOfWeek(new Date()),i)} />
            </div>
         ))}
        
         </div>
       </div>
      </div>
    }
}

export default CalendarCarousel