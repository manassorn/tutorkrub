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
      
      
       <SimpleTitle title='คอร์สเรียน' />
       
       <div className="row mt-3">
       
       <div className="col-12">
        <h3 className="font-weight-bold">{this.state.course.title}</h3>
        <span class="mt-2 text-muted">สอนแล้ว 0 ครั้ง &nbsp;
        &bull;&nbsp;<span className="text-warning">&#9733;</span> 0</span> 
      <div className="row align-items-center mt-2 mb-3">
      <div className="col-8">
        <img src={this.state.course.tutor?this.state.course.tutor.avatarUrl:''} width="32" height="32" class="rounded-circle shadow" alt=""/>
        &nbsp;&nbsp;
        {this.state.course.tutor && this.state.course.tutor.name}
      </div> 
      <div className="col-4 text-right">
        <h4 className="mb-0">฿{this.state.course.price}</h4>
      </div>
      </div> 
      
      
      <div className="border-top py-3 border-bottom ">
        <h4>รายละเอียด</h4>
        <p className="mt-2 text-muted">
        {this.state.course.description && this.state.course.description.split('\n').map(line => (
          <>{line}<br/></>
        ))}
        <br/>
        ...<a href="#">อ่านเพิ่มเติม</a>
        </p>
      </div>
    
      </div>
      
      
      
      </div>
      


      <div className="row pt-3" style={{paddingBottom: '70px'}}>
        <div className="col-12">
          <h4 className="mb-1">ตารางเวลา</h4>

        </div>
      <div className="offset-sm-2 col-sm-8">
        
        <CalendarCarousel startOfWeek={new Date()}/>
        
        
      </div>
      
      <div className="offset-sm-2 col-sm-8 mt-4">
        <a href={`/book/${this.state.course._id}`} className="btn btn-primary btn-block" >นัดหมาย</a>

      </div>
      

      </div>


      <div className="p-3 fixed-bottom bg-white w-100 border-top d-block d-sm-none">
        <a href={`/book/${this.state.course._id}`} className="btn btn-primary btn-block" >นัดหมาย</a>
      </div>


     </div>

    }
}

export default Course