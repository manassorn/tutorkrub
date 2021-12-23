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
          selectedDateHour: undefined, 
          qrUri:''
        }
      this.onCalendarChanged = this.onCalendarChanged.bind(this)
      this.createAppointment = this.createAppointment.bind(this)
      this.pay = this.pay.bind(this)
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
        courseId: this.courseId,
        //startTime: this.state.selectedDateHour,
        startTime: new Date(),
        length: 1
      })
        .then(response => 
        {
          location.href = '/appointment/list'
        }
        )
    }
    
    createOmiseSource(amount, callback) {
      Omise.setPublicKey('pkey_test_5kscphkh3r2cqs8plug'); 
      Omise.createSource(
        'promptpay', { 
          "amount": amount, 
          "currency": "THB" 
          
        }, function(statusCode, response) {
          console.log(response["id"])
          if(callback) callback(response["id"])
        });
    }
    
    pay() {
      this.createAppointment()
      const amount = 2000
      const that = this
      this.createOmiseSource(amount, (sourceId) => {
        Api.post('/omise/charge/promptpay', {sourceId, amount}).then((res) => {
          const qrUri = res.data.data.qrUri
          that.setState({qrUri})
        })
      })
    }
    
    render() {
      return      <div class="container pt-3 border-top mb-4 mb-5" style={{maxWidth:'720px'}}>
      
       <SimpleTitle title='นัดหมาย' />
       
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
      
      </div>
    
      
      </div>
      


      <div className="row border-top py-3">
      <div className="col-sm-6">
      
				<div class="form-group mt-2">

					<label>เลือกวัน</label>

					<input type="text" class="form-control datepicker" />
          <div class="invalid-feedback">
            กรุณาเลือกวัน
          </div>
			  </div>
			 </div>
      
      <div className="col-sm-6">

      
      <div class="form-group mt-2"> 
       <label>เลือกเวลา</label> 
       <select class="form-control" id="exampleFormControlSelect1">   
          <option>00:00</option> 
          <option>01:00</option> 
          <option>3</option> 
          <option>4</option> 
          <option>5</option> </select>
       <div class="invalid-feedback">
         กรุณาเลือกเวลา
       </div>
      </div> 
      
      
      </div>

      </div>
      
      <div className="row border-top pt-3">
      <div className="col-12">
        <h6 className="font-weight-bold">ช่องทางชำระเงิน</h6>

      </div>
      <div className="col-sm-6">
      <div class="form-check p-3 px-4 border rounded mb-2">

				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>

				<label class="form-check-label" for="exampleRadios1">พร้อมเพย์</label>
			  <img src="https://www.omise.co/assets/pricing/promptpay-b5504a07613f158a62f014647ba862aba4f22af1a116f6ca02aafb1770fd7e46.svg" width="80" style={{position:'absolute',right:30}}/>
			</div>
			
		</div>
		<div className="col-sm-6">

     <div class="form-check p-3 px-4 border rounded mb-2">

				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>

				<label class="form-check-label" for="exampleRadios1">ทรูมันนี่วอลเล็ท</label>
				
				<img src="https://www.omise.co/assets/pricing/truemoney-b30675ae6b2cbd2de51b7e89d2bd7df3f6db5091cfd2ab429cd437921bc19c6f.svg" width="80" style={{position:'absolute',right:30}}/>

			</div>
			</div>


		<div className="col-sm-6">

     <div class="form-check p-3 px-4 border rounded">

				<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>

				<label class="form-check-label" for="exampleRadios1">บัตรเครดิต</label>
				
				<span style={{position:'absolute',right:30}}>
					<img src="https://www.omise.co/assets/pricing/visa-0b795a2d39bcf03d7b7624142d6d82919d99f8c942fa5419b31c4333c7645744.svg" width="80"/>
					<img src="https://www.omise.co/assets/pricing/mastercard-de9bbb897f6b3f1cea0f59c9e1c67c80d9b0b74ee829f70b64961072a56331a1.svg" width="80"/>
					<img src="https://www.omise.co/assets/pricing/jcb-5cb2403de82da39c5c11e6adfd36bb1c4039a00405401a64a3bb2ea07ea30355.svg" width="80"/>

				</span>

			</div>
			</div>			
			
			
			<div className="col-12 d-none d-sm-block mt-4">
			  <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModalCenter">ชำระเงิน</button>

			</div>
			
			</div>


      <div className="p-3 fixed-bottom bg-white w-100 border-top d-sm-none">
        <button className="btn btn-primary btn-block" data-toggle="modal" data-target="#exampleModalCenter" onClick={this.pay}>ชำระเงิน</button>
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

      	<h5 className="my-3">แสกนคิวอาร์โค้ดเพื่อจ่ายเงิน</h5>
      	
<img src={this.state.qrUri} width="240" />
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