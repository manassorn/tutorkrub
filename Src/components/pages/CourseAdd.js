import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'
import CalendarPartOfDay from '../common/CalendarPartOfDay'

class CourseAdd extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        weekIncrement: 0
      }
    }

    componentDidMount() {
      /*Api.get('/crud/course')
        .then(response => 
        {
          console.log('courses',response.data.data)
        
        this.setState({ courses: response.data.data })
        }
        );
      */
    }
    
    onCalendarChanged(hours) {
      console.log('a-',hours[0][0])
    }

    render() {
        return <div class="container" style={{maxWidth:'720px'}}>
      <SimpleTitle title="สร้างคอร์ส" /> 
             
      <form class="needs-validation" novalidate>

      <div class="form-group mt-2"> 
       <label>ชื่อคอร์ส</label> 
       <input id="title" type="text" class="form-control" placeholder="พิมพ์ชื่อคอร์ส" required/> 
       <div class="invalid-feedback">
         กรุณาใส่ชื่อคอร์ส
       </div>
      </div> 
      <div class="form-group mt-2"> 
       <label>รายละเอียด</label> 
       <textarea class="form-control" id="description" rows="3" placeholder="เล่าเนื้อหาให้ฟังหน่อยค่ะ" required></textarea>
        <div class="invalid-feedback">
         กรุณาใส่รายละเอียด
        </div>
      </div>
      <div class="row">
          <div class="form-group col-md-6">
              <label>ราคา</label>
              <div class="input-group mb-3">
                  <input id="price" type="number" class="form-control" placeholder="พิมพ์ราคา" aria-label="Recipient's username" aria-describedby="basic-addon2" required/>
                  <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">บาทต่อชั่วโมง</span>
                  </div>
                  

              </div>
              <div class="invalid-feedback">
                กรุณาใส่ราคา
              </div>

          </div>

          <div class="form-group col-md-6">
              <label>หมวดหมู่</label>
              <select id="category" class="form-control">
                  <option>เลือกหมวดหมู่...</option>
                  <option>...</option>
              </select>

          </div>
      </div>
      
      <div class="pt-4 border-top mb-3">
          <h5>วัน-เวลา ที่สะดวก</h5>
        </div>
        
      <CalendarPartOfDay onChanged={this.onCalendarChanged}/>
      
      
      <button id="create-course-btn" type="button" class="btn btn-primary btn-lg btn-block mt-4">สร้างคอร์ส</button> 
      </form>


     </div> 

    }
}
export default CourseAdd