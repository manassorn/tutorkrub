import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import SimpleTitle from '../../common/SimpleTitle'
import Switcher from '../../common/Switcher'

import CalendarPartOfDay from '../../common/CalendarPartOfDay'

class ProfileEditAvailableHours extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        availableHours: undefined
      }
      this.onCalendarChanged = this.onCalendarChanged.bind(this)
      this.saveAvailableHours = this.saveAvailableHours.bind(this)
      
    }

    componentDidMount() {
      var id = Auth.getUserId()
      Api.get('/user/me')
        .then(response => {
        const hours = response.data.data.availableHours
        this.availableHours = hours
        //this.refs.calendar.updateActiveHours(hours)
        });
    }
    
    onCalendarChanged(hours) {
      this.availableHours = hours
    }
    
    saveAvailableHours() {
      const id = Auth.getUserId()
      
      Api.post('/user/' + id + '/availableHours', {availableHours: this.availableHours}).then(() => {
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
      
      
      <CalendarPartOfDay selectedHours={this.state.availableHours} onChanged={this.onCalendarChanged} ref="calendar"/>
      
      <button className="mt-3 mb-5 btn btn-primary btn-block" onClick={this.saveAvailableHours}>บันทึก</button>
      </div>
    }
}
export default ProfileEditAvailableHours