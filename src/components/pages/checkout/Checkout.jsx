import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import CalendarByWeek3Steps from '../../common/CalendarByWeek3Steps'
import CalendarCarousel2 from '../../common/CalendarCarousel2'
import Utils from '../../../Utils'

class Checkout extends React.Component {
  
  
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

				<label class="form-check-label" for="exampleRadios1">พร้อมเพย์</label>
			  <img src="https://www.omise.co/assets/pricing/promptpay-b5504a07613f158a62f014647ba862aba4f22af1a116f6ca02aafb1770fd7e46.svg" width="80" style={{position:'absolute',right:30}}/>
			</div>
			
     <div class="form-check p-3 px-4 border rounded">

				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>

				<label class="form-check-label" for="exampleRadios1">ทรูมันนี่วอลเล็ท</label>
				
				<img src="https://www.omise.co/assets/pricing/truemoney-b30675ae6b2cbd2de51b7e89d2bd7df3f6db5091cfd2ab429cd437921bc19c6f.svg" width="80" style={{position:'absolute',right:30}}/>

			</div>
			</div>
			</div>


      <div className="p-3 fixed-bottom bg-white w-100 border-top">
        <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModalCenter">ชำระเงิน</button>
      </div>

      
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true"> 
      <div class="modal-dialog modal-dialog-centered modal-sm" role="document"> 
      <div class="modal-content"> 
      <div class="modal-header border-0" hidden="true"> 
      <h5 class="modal-title" id="exampleModalLongTitle"> </h5> 
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> 
      </div> 
      <div class="modal-body text-center">
      <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">&times;</span> </button> 

      	<img src="https://www.omise.co/assets/pricing/promptpay-b5504a07613f158a62f014647ba862aba4f22af1a116f6ca02aafb1770fd7e46.svg" width="100" />
      	<h5 className="my-3">แสกนคิวอาร์โค้ดเพื่อจ่ายเงิน</h5>
      	
<img src="https://chart.googleapis.com/chart?cht=qr&chl=http%3A%2F%2F1hourtutor.com&chs=180x180&choe=UTF-8&chld=L|2" width="180" />
        <h3>฿450</h3>
        <p className="text-muted mb-0">
        <i className="bx bx-time"></i> 15:00
        </p>
        
      
      </div> 
      <div class="modal-footer" hidden="true"> <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary">Save changes</button> </div> 
      </div> 
      </div> 
      </div>

     </div>

    }
}

export default Checkout