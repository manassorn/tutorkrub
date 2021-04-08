import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'
import CalendarByWeek3Steps from '../common/CalendarByWeek3Steps'
import Utils from '../../Utils'
import './Course.css'

class Course extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          course: {},
          selectedDateHour: undefined
        }
      this.onCalendarChanged = this.onCalendarChanged.bind(this)
      this.createAppointment = this.createAppointment.bind(this)
    }
    
    componentDidMount() {
      var a = location.href.split('/')
      var id = a[a.length-1]
      this.courseId = id
      Api.get(`/course/${id}`)
        .then(response => 
        {
          const course = response.data.data
          this.setState({course})
          const tutorId = course.tutorId

          return Api.get(`/user/${tutorId}/availableHours`)
        }
        ).then(response => {
          const availableHours = response.data.data
          const avaHoursBoolArrays = availableHours.split(' ').map(d => d.split('').map(h => h == 1))
          this.setState({avaHoursBoolArrays})
        });
      
    }
    
    onCalendarChanged(selectedDateHour){
      this.setState({selectedDateHour})
    }
    
    createAppointment() {
      console.log(this.courseId)
      Api.post(`/appointment/course/${this.courseId}`, {
        startTime: this.state.selectedDateHour,
        length: 1
      })
        .then(response => 
        {
          location.href = '/appointment/list'
        }
        )
    }
    
    render() {
      return      <div class="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
      
       <SimpleTitle title='รายละเอียดคอร์ส' />
       
       
       
              <div class="p-3">
        <div class="text-center d-flex justify-content-center">
         <img src={this.state.course.tutorAvatarUrl} class="rounded-circle shadow" width="130" height="130" alt=""/>
         <div class="m-3 text-left">
          <h3>{this.state.course.title}</h3>
        <span class="text-muted">&bull;&nbsp;&nbsp;{this.state.course.tutorName}&nbsp;&nbsp;<br/>&bull;&nbsp;&nbsp;สอนแล้ว 0 ครั้ง &nbsp;<br/>
        &bull;&nbsp; 0 ดาว</span> 




         </div>
        </div>
        
        
        <div class="text-muted mt-2">
          {this.state.course.description}
        </div>

        
       </div>

       
       
       
       
      
      <div class="border rounded"> 
       <div class="p-2"> 
      
       
       <CalendarByWeek3Steps numberOfWeek="6" onChanged={this.onCalendarChanged}/>
      
   
       </div> 
      </div> 
      
      <div>
      {this.state.selectedDateHour && 
        <>
        <div className="font-weight-bold">
          <i className="bx bx-calendar-event"></i>&nbsp;&nbsp;
            {Utils.formatDate(this.state.selectedDateHour)}

        </div>
        <div className="font-weight-bold">
          <i className="bx bx-alarm"></i>&nbsp;&nbsp;
            {Utils.formatHourPeriod(this.state.selectedDateHour.getHours(), 1)}
        </div>
        </>
      }

        
        
        <button className="btn btn-primary btn-block mt-3 mb-5" disabled={this.state.selectedDateHour? '' :'disabled'} onClick={this.createAppointment}>นัดหมาย</button>
      </div>
      
     </div> 

    }
}

export default Course