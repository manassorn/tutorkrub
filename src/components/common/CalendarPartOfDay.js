import React from "react";
import addDays from 'date-fns/addDays'
import Api from '../../Api'
import Utils from '../../Utils'
import SimpleTitle from '../common/SimpleTitle'
import './CalendarPartOfDay.css'
import './Patterns.css'

class CalendarPartOfDay extends React.Component {


    constructor(props) {
      super(props);
      this.startOfWeek = this.props.startOfWeek
      const hours = this.initHours(this.props.activeHours)
      
      this.state = {
        selectedPartIndex: 0,
        selectedDayIndex: 0,
        activeHours: hours
      }
      this.daysOfWeekMini = ['จ',
      'อ',
      'พ',
      'พฤ',
      'ศ',
      'ส',
      'อ',
      ]
      this.daysOfWeek = ['จันทร์',
      'อังคาร',
      'พุธ',
      'พฤหัสบดี',
      'ศุกร์',
      'เสาร์',
      'อาทิตย์',
      ]
      this.partsOfDay = ['เช้ามืด',
      'เช้า',
      'บ่าย',
      'ค่ำ']
      this.partsOfDayTime = ['00:00-06:00',
      '06:00-12:00',
      '12:00-18:00',
      '18:00-24:00']
      this.hourCheckboxRefs = [1,2,3,4,5,6].map(i => React.createRef())
      
      this.selectPartOfDay = this.selectPartOfDay.bind(this)
      this.saveHours = this.saveHours.bind(this)
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
    
    initHours(activeHours) {
      if(activeHours) return activeHours
      return [0,1,2,3,4,5,6].map(i => {
        return Array.apply(null, {length:24}).map(j => false)
      })
    }
    
    updateActiveHours(hours) {
      hours = this.initHours(hours)
      this.setState({activeHours: hours})
    }
    
    selectPartOfDay(dayIndex, partIndex) {
      this.hourCheckboxRefs.map((ref, i) => ref.current.checked = this.state.activeHours[dayIndex][partIndex *6+i])
      this.setState({selectedDayIndex: dayIndex,
        selectedPartIndex: partIndex
      })
    }
    
    saveHours() {
      const activeHours = this.state.activeHours
      
      this.hourCheckboxRefs.map((ref, i) => {
        activeHours[this.state.selectedDayIndex][this.state.selectedPartIndex * 6 + i] = ref.current.checked
      })
      this.setState({activeHours})
      //console.log('setstate', activeHours[0][0])
      this.props.onChanged(activeHours)
    }
    

    render() {
      return <div>
       <div class="row flex-nowrap">
        <div class="col-3"> </div>
        {this.daysOfWeekMini.map((dow,i) => (
            <div class="col-1 m-1 p-0 text-center">
            <div className="font-weight-boldx">
              {dow}
            </div>
            {this.startOfWeek && 
              <div className="font-weight-bold">{addDays(this.startOfWeek, i).getDate()}</div>
            }
            {this.startOfWeek && 
              <div>{Utils.formatShortMonth(addDays(this.startOfWeek, i))}</div>
            }

            </div>
        
        ))}

      </div>
      
      {[0,1,2,3].map(p => (
        <div class="row flex-nowrap">
          <div class="col-3">{this.partsOfDay[p]}<br/>{this.partsOfDayTime[p]}</div>
          
          {[0,1,2,3,4,5,6].map(d => (
            <div class="part-of-time col-1 rounded m-1 bg-light p-0" data-toggle="modal" data-target="#exampleModalCenter" onClick={e => this.selectPartOfDay(d,p)}>
            
            {[0,1,2,3,4,5].map(h => (
              <div className={`hr ${this.state.activeHours[d][p*6+h]?'selected':''} diagonal-stripe-5`}> &nbsp;</div>

            ))}

            
            </div>

          
          ))}
              
        </div>
      ))}
      
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalCenterTitle">เลือกเวลาที่สะดวก</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="pt-2 pb-2 mb-2 font-weight-bold">{this.daysOfWeek[this.state.selectedDayIndex]}</div>
          
          {[0,1,2,3,4,5].map(i => (
                    
<label class="checkbox">
  <span class="checkbox__input">
    <input type="checkbox" name={this.hourCheckboxRefs[i]} ref={this.hourCheckboxRefs[i]}/>
    <div class="hour rounded pl-4 pr-4 pt-2 pb-2 mb-2">{this.state.selectedPartIndex * 6 + i}:00</div>
  </span>
</label>

          
          ))}
          
         
          
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-primary btn-block" data-dismiss="modal" onClick={this.saveHours}>บันทึก</button>
        </div>
      </div>
    </div>
  </div>

      
      
      
      
      
      </div>
    }
}

export default CalendarPartOfDay