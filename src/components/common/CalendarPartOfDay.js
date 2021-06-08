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
      
      const layer1Hrs = this.hexToBoolArray(this.props.layer1Hex)
      
      const layer2Hrs = this.hexToBoolArray(this.props.layer2Hex) || []
      const layer3Hrs = this.hexToBoolArray(this.props.layer3Hex) || []
      const layer4Hrs = this.hexToBoolArray(this.props.layer4Hex) || []
      
      
      this.state = {
        clickedPartIndex: 0,
        clickedDayIndex: 0,
        scheduleHr: undefined,
        layer1Hrs,
        layer2Hrs,
        layer3Hrs,
        layer4Hrs
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
      this.getHrClassName = this.getHrClassName.bind(this)
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
    
    componentDidUpdate(prevProps) {
      //return
      const newState = {}
      [1].map(i => {
        const layerHex = `layer${i}Hex`
        if (this.props[layerHex] && this.props[layerHex] != prevProps[layerHex])
        {
          return
          const boolArray = this.hexToBoolArray(this.props[layerHex])
          newState[`layer${i}Hrs`] = boolArray
        }
      })
      //this.setState(newState)
    }
    
    hexToBin(hex) {
      return (parseInt(hex, 16).toString(2)).padStart(168, '0')

    }
    
    binToHex(bin) {
      return (parseInt(bin, 2).toString(16)).padStart(21, '0')
    }
    
    hexToBoolArray(hex) {
      console.log('hextobool')
      if(!hex) return hex
      const bin = this.hexToBin(hex)
      console.log('bin',bin)
      console.log('bin2',bin.split(''))

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
    
    getHex(i) {
      const bin = this.state[`layer${i}Hrs`].map(i => i? '1' :'0').join('').padEnd(168, '0')
      return this.binToHex(bin)
    }
    
    selectPartOfDay(dayIndex, partIndex) {
      //this.hourCheckboxRefs.map((ref, i) => ref.current.checked = this.state.availableHrs[dayIndex][partIndex *6+i])
      this.setState({clickedDayIndex: dayIndex,
        clickedPartIndex: partIndex
      })
    }
    
    saveHours() {
      const availableHrs = this.state.availableHrs
      
      this.hourCheckboxRefs.map((ref, i) => {
        availableHrs[this.state.clickedDayIndex * 24 + this.state.clickedPartIndex * 6 + i] = ref.current.checked
      })
      this.setState({availableHrs})
      //console.log('setstate', availableHrs[0][0])
      
      //const bin = availableHrs.map(i => i?'1':'0').join('')
      //const hex = binToHex(bin)
      /*if(this.isRecurring) {
        this.props.onRecurringChanged(hex)
      } else {
        const startDate = this.startOfWeek
        this.props.onNonRecurringChanged({startDate, hex})
      }*/
    }
    
    getHrClassName(d,p,h) {
      const hr = d*24+p*6+h
      if (this.state.layer4Hrs && this.state.layer4Hrs[hr]) {
        return 'red-glow'
      }
      if (this.state.layer3Hrs && this.state.layer3Hrs[hr]) {
        return 'stripe-green'
      }
      if (this.state.layer2Hrs && this.state.layer2Hrs[hr]) {
        return 'stripe-grey'
      }
      if (this.state.layer1Hrs && this.state.layer1Hrs[hr]) {
        return 'green-glow'
      }
      return ''
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
              <div className={`hr ${this.getHrClassName(d,p,h)}`}> &nbsp;</div>

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
    <div className={`hour rounded pl-4 pr-4 pt-2 pb-2 mb-2 ${this.getHrClassName(this.state.clickedDayIndex, this.state.clickedPartIndex,i)}`}>{this.state.clickedPartIndex * 6 + i}:00</div>
                    
                    
                    
                    


          
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