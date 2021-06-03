import React from "react";
import addDays from 'date-fns/addDays'
import differenceInHours from 'date-fns/differenceInHours'
import Api from '../../Api'
import Utils from '../../Utils'
import SimpleTitle from '../common/SimpleTitle'
import './CalendarPartOfDay.css'
import './Patterns.css'

class CalendarPartOfDay extends React.Component {


    constructor(props) {
      super(props);
      this.startOfWeek = this.props.startOfWeek
      
      this.isRecurring = this.props.isRecurring || true

      let avaialbleHrs = []
      this.availability = this.props.availability
      if (this.isRecurring) {
        avaialbleHrs = hexToBoolArray(this.availability.recurring)
      } else {
        avaialbleHrs = calibateNonRecurAv(this.availability.nonRecurring)
      }
      
      this.bookedHrs = this.props.bookedHrs || []
      this.bookedByMeHrs = this.props.bookedByMeHrs || []
      this.isRecurring = !!this.startOfWeek
      const hours = this.initHours(this.props.availableHrs)
      
      this.state = {
        clickedPartIndex: 0,
        clickedDayIndex: 0,
        scheduleHr: undefined,
        avaialbleHrs,
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
    
    hexToBin(hex) {
      return (parseInt(hex, 16).toString(2)).padStart(168, '0')

    }
    
    binToHex(bin) {
      return (parseInt(bin, 2).toString(16)).padStart(21, '0')
    }
    
    hexToBoolArray(hex) {
      const bin = this.hexToBin(hex)
      return bin.split('').map(i => i == '1')
    }
    
    calibateNonRecurAv(av) {
      let bin = this.hexToBin(av.hex)
      const diff = differenceInHours(av.startDate, this.startOfWeek)
      if(diff > 0) {
        bin = bin.slice(diff).padEnd(168, '0')
      } else {
        bin = bin.slice(0, diff).padStart(168,'0')
      }
      return bin.split('').map(i => i == '1')
    }
    
    initHours(availableHrs) {
      if(availableHrs) return availableHrs
      return [0,1,2,3,4,5,6].map(i => {
        return Array.apply(null, {length:24}).map(j => false)
      })
    }
    
    updateavailableHrs(hours) {
      hours = this.initHours(hours)
      this.setState({availableHrs: hours})
    }
    
    selectPartOfDay(dayIndex, partIndex) {
      this.hourCheckboxRefs.map((ref, i) => ref.current.checked = this.state.availableHrs[dayIndex][partIndex *6+i])
      this.setState({clickedDayIndex: dayIndex,
        clickedPartIndex: partIndex
      })
    }
    
    saveHours() {
      const availableHrs = this.state.availableHrs
      
      this.hourCheckboxRefs.map((ref, i) => {
        availableHrs[this.state.clickedDayIndex][this.state.clickedPartIndex * 6 + i] = ref.current.checked
      })
      this.setState({availableHrs})
      //console.log('setstate', availableHrs[0][0])
      
      const bin = availableHrs.map(i => i?'1':'0').join('')
      const hex = binToHex(bin)
      /*if(this.isRecurring) {
        this.props.onRecurringChanged(hex)
      } else {
        const startDate = this.startOfWeek
        this.props.onNonRecurringChanged({startDate, hex})
      }*/
    }
    
    getHrClassName(dayIndex, partIndex) {
      
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
            <div class="part-of-time col-1 rounded m-1 bg-light p-0" data-toggle="modal" data-target="#calendarPartOfDayModal" onClick={e => this.selectPartOfDay(d,p)}>
            
            {[0,1,2,3,4,5].map(h => (
              <div className={`hr ${this.state.availableHrs[d][p*6+h]?'selected':''} diagonal-stripe-6`}> &nbsp;</div>

            ))}

            
            </div>

          
          ))}
              
        </div>
      ))}
      
        <div class="modal fade" id="calendarPartOfDayModal" tabindex="-1" role="dialog" aria-labelledby="calendarPartOfDayModalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="calendarPartOfDayModalTitle">เลือกเวลาที่สะดวก</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="pt-2 pb-2 mb-2 font-weight-bold">{this.daysOfWeek[this.state.clickedDayIndex]}</div>
          
          {[0,1,2,3,4,5].map(i => (
                    
<label class="checkbox">
  <span class="checkbox__input">
    <input type="checkbox" name={this.hourCheckboxRefs[i]} ref={this.hourCheckboxRefs[i]}/>
    <div class="hour rounded pl-4 pr-4 pt-2 pb-2 mb-2">{this.state.clickedPartIndex * 6 + i}:00</div>
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