import React from "react";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import CalendarPartOfDay from '../../common/CalendarPartOfDay'

class CourseAdd extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        hasAvailableHours: false
      }
      this.submitForm = this.submitForm.bind(this)
      this.onCalendarChanged = this.onCalendarChanged.bind(this)
      this.availableHours = undefined
    }

    componentDidMount() {
      Api.get('/user/me')
        .then(response => {
          const hours = response.data.data.availableHours
          this.setState({hasAvailableHours: !this.isEmpty(hours)})
        });
    }
    
    onCalendarChanged(hours) {
      this.refs.availabilityFeedback.style.display = 'none'
      this.availableHours = hours
    }
    
    submitForm() {
      const form = this.refs.form;
      console.log(form)
      if (form.checkValidity() === false) {
        form.classList.add('was-validated');
        return false
      }
      if(!this.state.hasAvailableHours && this.isEmptyAvailability()) {
        this.refs.availabilityFeedback.style.display = 'block'
        return false
      }
      const title = this.refs.title.value
      const description = this.refs.description.value
      const price = this.refs.price.value
      const category = this.refs.category.value
      Api.post('/course',  {
         title,
         description,
         price,
         category
       }).then(() => {
         location.href = '/user'
       })
       if(!this.state.hasAvailableHours){
         Api.post('/crud/user', {
           availableHours: this.availableHours
         })
       }
       
      
    }
    
    isEmpty(hours) {
      if (!hours) {
        return true
      }
      return hours.every(array => {
        return array.every(item => item === false)
      })
    }
    
    isEmptyAvailability() {
      return this.isEmpty(this.availableHours)
    }

    render() {
        return <div class="container" style={{maxWidth:'720px'}}>
      <SimpleTitle title="สร้างคอร์ส" /> 
             
      <form ref="form" class="needs-validation" novalidate>

      <div class="form-group mt-2"> 
       <label>ชื่อคอร์ส</label> 
       <input ref="title" type="text" class="form-control" placeholder="พิมพ์ชื่อคอร์ส" required/> 
       <div class="invalid-feedback">
         กรุณาใส่ชื่อคอร์ส
       </div>
      </div> 
      <div class="form-group mt-2"> 
       <label>รายละเอียด</label> 
       <textarea class="form-control" ref="description" rows="3" placeholder="เล่าเนื้อหาให้ฟังหน่อยค่ะ" required></textarea>
        <div class="invalid-feedback">
         กรุณาใส่รายละเอียด
        </div>
      </div>
      <div class="row">
          <div class="form-group col-md-6">
              <label>ราคา</label>
              <div class="input-group mb-3">
                  <input ref="price" type="number" class="form-control" placeholder="พิมพ์ราคา" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                  <div class="invalid-feedback order-last">
                                                    กรุณาใส่ราคา
                                                  </div>
                  <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">บาทต่อชั่วโมง</span>
                  </div>
                  

              </div>
              

          </div>

          <div class="form-group col-md-6">
              <label>หมวดหมู่</label>
              <select ref="category" class="form-control">
                  <option>เลือกหมวดหมู่...</option>
                  <option>...</option>
              </select>

          </div>
      </div>
      
      <div className={this.state.hasAvailableHours? 'd-none' :''}>
        <div class="pt-4 border-top mb-3">
          <h5>วัน-เวลา ที่สะดวก</h5>
        </div>
        <div ref="availabilityFeedback" className="text-danger" style={{display:'none'}}>
        กรุณาเลือกเวลาที่สะดวก
        </div>
      
        
        <CalendarPartOfDay onChanged={this.onCalendarChanged}/>
      
      </div>
      

      
      <button onClick={this.submitForm} type="button" class="btn btn-primary btn-lg btn-block mt-4 mb-5">สร้างคอร์ส</button> 
      </form>


     </div> 

    }
}
export default CourseAdd