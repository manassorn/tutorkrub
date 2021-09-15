import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import CalendarByWeek3Steps from '../../common/CalendarByWeek3Steps'
import CalendarCarousel from '../../common/CalendarCarousel'
import Utils from '../../../Utils'
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
      Api.get(`/courses/${id}`)
        .then(response => 
        {
          const course = response.data.data
          console.log(JSON.stringify(course))
          this.setState({course})
          const tutorId = course.tutorId

          return Api.get(`/users/${tutorId}/availability`)
        }
        ).then(response => {
          const recurringHex = response.data.data.recurringHex
          this.setState({recurringHex})
        });
      
    }
    
    onCalendarChanged(selectedDateHour){
      this.setState({selectedDateHour})
    }
    
    createAppointment() {
      console.log(this.courseId)
      Api.post(`/appointments/course/${this.courseId}`, {
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
       
       <div className="row mt-3">
       
       <div className="col-12 col-sm-8">
        <h3>{this.state.course.title}</h3>
        <span class="mt-2 text-muted">สอนแล้ว 0 ครั้ง &nbsp;
        &bull;&nbsp;<span className="text-warning">&#9733;</span> 0</span> 
        <p className="mt-2 text-muted">
        {this.state.course.description && this.state.course.description.split('\n').map(line => (
          <>{line}<br/></>
        ))}
        </p>
      </div>
      
      <div className="col-sm-4 d-none d-sm-block text-center">
        <img src={this.state.course.tutor?this.state.course.tutor.avatarUrl:''} width="80" height="80" class="rounded-circle shadow" alt=""/>
        <br/>
       {this.state.course.tutor && this.state.course.tutor.name}

      </div>
      
      </div>
      
      <div className="row align-items-center mb-4">
      <div className="col-4">
        <h4>฿30</h4>
      </div>
      <div className="col-8 text-right d-block d-sm-none">
       {this.state.course.tutor && this.state.course.tutor.name}&nbsp;&nbsp;
        <img src={this.state.course.tutor?this.state.course.tutor.avatarUrl:''} width="40" height="40" class="rounded-circle shadow" alt=""/>
       
      </div> 

        

        </div>


      <div className="row">
      <div className="col-sm-7 border-top pt-3 mb-3">
      <div className="d-flex">
        <div>
        <span className="bg-secondary radius-10 p-2 d-inline-block"> 
          <img src="/assets/images/icons/appointment-book.png" width="45" alt=""/> 

        </span> 
        </div>
        <div className="ml-3">
        <h4 className="mb-1">เวลานัดหมาย</h4>
        <span className="text-muted">
        จองล่วงหน้าได้ 8 สัปดาห์
        </span>
        </div>
      </div>
      
        <CalendarCarousel/>
      </div>

       
      <div className="col-sm-5">
      <div className="border p-3 radius-10">
      <div className="d-flex">
        <div>
        <span className="bg-secondary radius-10 p-2 d-inline-block"> 
          <img src="/assets/images/icons/appointment-book.png" width="45" alt=""/> 

        </span> 
        </div>
        <div className="ml-3">
        <h4 className="mb-1">เวลานัดหมาย</h4>
        <span className="text-muted">
        จองล่วงหน้าได้ 8 สัปดาห์
        </span>
        </div>
      </div>
      
          <div class="mt-2 media align-items-center"> 
           <div class="product-img"> 
            <i className="bx bx-calendar" style={{fontSize:'30px'}}></i>

           </div> 
           <div class="media-body pl-3"> 
            <h6 class="mb-0 font-weight-bold">{Utils.formatDate(new Date())}</h6> 
           </div> 
          </div> 
          <div class = "mt-2 media align-items-center" >
            <div class="product-img"> 
           <i className="bx bx-alarm" style={{fontSize:'30px'}}></i>
           </div> 
           <div class = "media-body pl-3" >
            <h6 class="mb-0 font-weight-bold">{Utils.formatHourPeriod(1,1)}</h6> </div>  
            </div>
      
      
        <button className="btn btn-secondary btn-block mt-3 mb-2" disabled={this.state.selectedDateHour? '' :'disabled'} onClick={this.createAppointment}>นัดหมาย</button>

      </div>
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


        
      </div>

     </div> 

    }
}

export default Course