import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import CalendarByWeek3Steps from '../../common/CalendarByWeek3Steps'
import CalendarCarousel2 from '../../common/CalendarCarousel2'
import Utils from '../../../Utils'
import './Course.css'

class CourseCheckout extends React.Component {
  
  
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
      		$('.datepicker').pickadate({

			selectMonths: false,

	        selectYears: false,
	        min: true,
	        max:30
		  })
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
      
      
       <SimpleTitle title='คอร์สเรียน' />
       
       <div className="row mt-3">
       
       <div className="col-12 col-sm-7">
        <h6 className="font-weight-bold">{this.state.course.title}</h6>
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
      
      </div>
    
      
      </div>
      


      <div className="row">
      <div className="col-sm-7 border-top pt-3 mb-3">
      
				<div class="form-group mt-2">

					<label>เลือกวัน</label>

					<input type="text" class="form-control datepicker" />
          <div class="invalid-feedback">
            กรุณาเลือกวัน
          </div>
			</div>
      
      
      <div class="form-group mt-2"> 
       <label>เลือกเวลา</label> 
       <select class="form-control" id="exampleFormControlSelect1">   
          <option>00:00</option> 
          <option>01:00</option> 
          <option>3</option> 
          <option>4</option> 
          <option>5</option> </select>
       <div class="invalid-feedback">
         กรุณาใส่ชื่อคอร์ส
       </div>
      </div> 
      
      
      </div>

      </div>
      
      <div className="row border-top pt-3">
      <div className="col-sm-7">
      <h6 className="font-weight-bold">ช่องทางชำระเงิน</h6>
      <div class="form-check p-3 px-4 border rounded mb-2">

				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>

				<label class="form-check-label" for="exampleRadios1">QR code</label>
			  <img src="https://i.imgur.com/iD8vae4_d.webp?maxwidth=640&shape=thumb&fidelity=medium" width="40" style={{position:'absolute',right:30}}/>
			</div>
			
     <div class="form-check p-3 px-4 border rounded">

				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>

				<label class="form-check-label" for="exampleRadios1">True Money Wallet</label>
			</div>
			</div>
			</div>


      <div className="p-3 fixed-bottom bg-white w-100 border-top">
        <button className="btn btn-primary btn-block" >ชำระเงิน</button>
      </div>


     </div>

    }
}

export default CourseCheckout