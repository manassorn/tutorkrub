import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import SimpleTitle from '../../common/SimpleTitle'
import Switcher from '../../common/Switcher'

import CalendarPartOfDay from '../../common/CalendarPartOfDay'
import CalendarCarousel from '../../common/CalendarCarousel'

class ProfileEditAvailableHours extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        availability: undefined
      }
      this.onCalendarChanged = this.onCalendarChanged.bind(this)
      this.saveAvailableHours = this.saveAvailableHours.bind(this)
      
    }

    componentDidMount() {
      Api.get('/user/me')
        .then(response => {
        this.availability = response.data.data.availability
        //this.refs.calendar.updateActiveHours(hours)
        this.setState({availability})
        });
    }
    
    onCalendarChanged(hours) {
      this.availableHours = hours
    }
    
    saveAvailableHours() {
      
      Api.post('/user/me/availability', {availability: this.availability}).then(() => {
        location.href = '/user'
      })
    }
    
    render() {
      return <div className="container" style={{maxWidth:'720px'}}>
      <SimpleTitle title="แก้ไขเวลาที่สะดวกสอน"/>
      
      <div class="btn-group-round my-3"> 
            
        <div class="btn-group d-flex"> 

          <button type="button" class="btn btn-white w-75">เหมือนกันทุกอาทิตย์</button> 
            <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="javaScript:;">ddd</a> 

            </div>
          <button type="button" class="btn btn-white dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="sr-only">Toggle Dropdown</span> 
                </button> 
        </div> 
      </div>
      
      <div>
      <Switcher/>
      </div>
      
      
      <CalendarPartOfDay availability={this.state.availability} isRecurring="true" ref="calendar"/>
      
      
      <CalendarCarousel availability={this.state.availability}/>
      
      <button className="mt-3 mb-5 btn btn-primary btn-block" onClick={this.saveAvailableHours}>บันทึก</button>
      </div>
    }
}
export default ProfileEditAvailableHours