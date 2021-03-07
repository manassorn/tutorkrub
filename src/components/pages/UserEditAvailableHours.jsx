import React from "react";
import Api from '../../Api'
import Auth from '../../Auth'
import SimpleTitle from '../common/SimpleTitle'

import CalendarPartOfDay from '../common/CalendarPartOfDay'

class UserEditAvailableHours extends React.Component {
  
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
        this.refs.calendar.updateActiveHours(hours)
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
      <CalendarPartOfDay selectedHours={this.state.availableHours} onChanged={this.onCalendarChanged} ref="calendar"/>
      
      <button className="mt-3 mb-5 btn btn-primary btn-block" onClick={this.saveAvailableHours}>บันทึก</button>
      </div>
    }
}
export default UserEditAvailableHours