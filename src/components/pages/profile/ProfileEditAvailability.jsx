import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import SimpleTitle from '../../common/SimpleTitle'
import Switcher from '../../common/Switcher'

import CalendarWeekPreview from '../../common/CalendarWeekPreview'
import CalendarCarousel from '../../common/CalendarCarousel'

class ProfileEditAvailableHours extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        availability: undefined,
        isRecurring: true,
        recurringHex: undefined
      }
      this.recurringCalendar = React.createRef()
      
      this.onSwitcherChange = this.onSwitcherChange.bind(this)
      this.saveRecurring = this.saveRecurring.bind(this)
      
    }

    componentDidMount() {
      const that = this
      Api.get('/user/me')
        .then(response => {
        const availability = response.data.data.availability
        const recurringHex = availability.recurringHex
        const isRecurring = availability.isRecurring
        //this.refs.calendar.updateActiveHours(hours)
        that.setState({recurringHex, isRecurring})
        });
    }
    
    onSwitcherChange(event) {
      const on = event.target.checked
      setTimeout(() => {
       this.setState({isRecurring:on})
      },150)      
    }
    
    saveRecurring(recurringHex) {
      const isRecurring = this.state.isRecurring
      Api.post('/user/me/availability', {availability: {recurringHex,isRecurring}}).then(() => {
        //todo
      })
    }
    
    render() {
      return <div className="container" style={{maxWidth:'720px'}}>
      <SimpleTitle title="แก้ไขเวลาที่สะดวกสอน"/>
      
      <div className="row">
      <div className="offset-sm-2 col-sm-8">
      
      
      	<div class="custom-control custom-switch mt-3">

					<input type="checkbox" class="custom-control-input" id="customSwitch1" checked={this.state.isRecurring} onChange={this.onSwitcherChange}/>

					<label class="custom-control-label" for="customSwitch1">
					เวลาเดิมทุกอาทิตย์
					</label>
				</div>
      
      {this.state.isRecurring && <CalendarWeekPreview layer1Hex={this.state.recurringHex} ref={this.recurringCalendar} onSaved={hex => this.saveRecurring(hex)}/>}
      
      {!this.state.isRecurring && <CalendarCarousel availability={this.state.availability}/>}
      
      <button className="mt-3 mb-5 btn btn-primary btn-block" onClick={this.saveAvailableHours}>บันทึก</button>
      </div>
      </div>
    
      </div>
    }
}
export default ProfileEditAvailableHours