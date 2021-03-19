import React from "react";
import Utils from '../../Utils'
import './CalendarByWeek3Steps.css'

class CalendarWeek extends React.Component {
  
  
    constructor(props) {
      super(props);
      this.state = {
        selectedDate: undefined,
        selectedPartOfDay: undefined,
        selectedHour: undefined,
        avaHoursBoolArrays: [[true], [true]]
      }
        this.numberOfWeek = this.props.numberOfWeek || 1
        this.daysOfWeek = ['จันทร์',
        'อังคาร',
        'พุธ',
        'พฤหัส',
        'ศุกร์',
        'เสาร์',
        'อาทิตย์']
        this.partOfDayIcons = [
          'night.svg',
          'morning.svg',
          'afternoon.svg',
          'evening.svg'
          ]
        this.partOfDayLabels = [
          'เช้ามืด',
          'เช้า',
          'บ่าย',
          'ดึก'
          ]
        var curr = new Date;
        var monday = this.addDays(curr, - curr.getDay() + 1)
        
        
        this.calendarWeeks = Array.apply(null, {length: this.numberOfWeek}).map((a,w) => [0,1,2,3,4,5,6].map(i => this.addDays(monday, w*7+i)))
        
      this.clickDate = this.clickDate.bind(this)
      this.clickPartOfDay = this.clickPartOfDay.bind(this)
      this.clickHour = this.clickHour.bind(this)
    }
    
    addDays(date, days) {
      return new Date(date.getTime() + days * 86400000)
    }

    componentDidMount() {
      
    }
    
    updateActiveHours() {
      
    }
    
    clickDate(date){
      if(this.hasAvaHrsOnDate(date)) {
        this.setState({selectedDate:date})

      }
    }
    
    clickPartOfDay(pod) {
      this.setState({selectedPartOfDay:pod})
    }
    
    clickHour(hour) {
      this.setState({selectedHour:hour})
    }
    
    hasAvaHrsOnDate(date) {
      const day = (date.getDay() -1)%7
      const array = this.state.avaHoursBoolArrays[day]
      if(!array) return false
      return array.filter(i => i).length
    }
    
    hasAvaHrsOnPartOfDay(pod) {
      if(!this.state.selectedDate) return false
      const day = (date.getDay() -1)%7
      let array = this.state.avaHoursBoolArrays[day]
      if(!array) return false

      const start = pod * 4
      array = array.slice(start, start +4)
      return array.filter(i => i).length

    }

    render() {
      return  <div className="calendar3steps">
      <h3>วัน<span class="text-muted" style={{fontSize:'16px'}}> จองล่วงหน้าได้ 90 วัน</span></h3> 

      <div class="row mb-2 pb-2 align-items-stretch m-0"> 
        
         <div class="col-1 p-0"> 
         <button class="btn btn-outline-primary d-flex align-items-center justify-content-center" style={{width:'100%',height:'100%'}} onClick={this.prevWeek}>
         <i class="lni lni-chevron-left"></i> 
         </button>
          
         </div> 
         
         
         
         
         <div class="col borderx">
           
           
           
   <div id="carouselExampleIndicators" class="carousel slide" data-interval="false" data-ride="carousel">
         <ol class="carousel-indicators">
         {this.calendarWeeks.map((week, i) => (
          <li data-target="#carouselExampleIndicators" data-slide-to="{i}" class={i==0? 'active' :''}></li>

         ))}
         </ol>
         <div class="carousel-inner">
         
         {this.calendarWeeks.map((week, j) => (
            <div className={`carousel-item ${j == 0? 'active' :''}`}>
            <div class="row mx-0">
            {week.map((date, i) => (
             <div class="col-3 p-1"> 
              <div class={`date border rounded text-center py-3 ${this.hasAvaHrsOnDate(date)? '' :'disabled'} ${date == this.state.selectedDate? 'selected' :''}`} onClick={e => this.clickDate(date)}>
                {this.daysOfWeek[i]} 
               <br/> 
               <b>{date.getDate()}</b> 
               <br/>
               {date.toLocaleString('th-th', {month:'short'})}
              </div> 
             </div> 
            ))}
            </div> 
              
            </div>
         
         
         ))}

           
         </div>
         <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="sr-only">Previous</span>
         </a>
         <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="sr-only">Next</span>
         </a>
       </div> 
        
        
  
           
           
         </div> 
         <div class="col-1 p-0"> 
         <button class="btn btn-outline-secondary d-flex align-items-center justify-content-center" style={{width:'100%',height:'100%'}} onClick={this.nextWeek}>
         <i class="lni lni-chevron-right"></i> 
         </button>
          
         </div> 
        </div>
     
        
        <h3>ช่วงเวลา</h3> 
        <div id="part-of-day" class="row border-bottom mb-3 pb-3 ml-0 mr-0"> 
        
      {this.partOfDayLabels.map((label,i) => (
        <div className={`col border rounded text-center p-1 m-1 ${this.state.selectedPartOfDay == i? 'selected' :''}`} onClick={e => this.clickPartOfDay(i)}> 
          <h5><img src={`/assets/images/part-of-day/${this.partOfDayIcons[i]}`} alt="" width="28"/></h5>
            <small>{label}<br/>{Utils.formatHourPeriod(i*6,6)}</small> 
        </div>
      ))}
 
         
        </div> 
        <h3>เวลา</h3> 
        <div id="time" class="row m-0">
        {[0,1,2,3,4].map(h => (
         <div className={`col-3 border rounded-pill text-center p-1 m-1 ${this.state.selectedHour==h? 'selected' :''}`} onClick={e => this.clickHour(h)}>
         {Utils.formatHourPeriod(h,1)}
         </div>
        ))}

 
        </div> 
        
        
        
    </div>
    }
}

export default CalendarWeek