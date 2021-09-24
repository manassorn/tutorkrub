import React from "react";
import addDays from 'date-fns/addDays'
import differenceInHours from 'date-fns/differenceInHours'
import isSameDay from 'date-fns/isSameDay'
import Api from '../../Api'
import Utils from '../../Utils'
import SimpleTitle from '../common/SimpleTitle'
import './CalendarPartOfDay.css'
import './Patterns.css'

class CalendarPartOfDay extends React.Component {


    constructor(props) {
      super(props);
      this.isEditMode = props.mode=='edit'
      this.editingLayerIndex = props.editingLayerIndex || 0
      this.startOfWeek = props.startOfWeek
      
      const layer1ActiveHrs = this.hexToBoolArray(props.layer1Hex) || []
      
      const layer2ActiveHrs = this.hexToBoolArray(props.layer2Hex) || []
      const layer3ActiveHrs = this.hexToBoolArray(props.layer3Hex) || []
      const layer4ActiveHrs = this.hexToBoolArray(props.layer1ActiveHrs) || []
      
      const layers = [
        layer1ActiveHrs,
        layer2ActiveHrs,
        layer3ActiveHrs,
        layer4ActiveHrs,
        ]
      
      
      this.state = {
        clickedPartIndex: 0,
        clickedDayIndex: 0,
        scheduleHr: undefined,
        layers,
        modalCheckboxes:[]
      }
      this.modalRandom = Math.floor(Math.random() * 1000000)
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
      this.onModalCheckboxChange = this.onModalCheckboxChange.bind(this)
      this.editingLayer = this.editingLayer.bind(this)
      this.getEditingLayerHex = this.getEditingLayerHex.bind(this)
      this.getHrClassNameForModal = this.getHrClassNameForModal.bind(this)
      this.getPatternClassName = this.getPatternClassName.bind(this)
      this.getEditingPatternClassName = this.getEditingPatternClassName.bind(this)
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
      let isChanged = false
      const layers = this.state.layers
      const a = [1,2,3,4].map((i) => {
        const layerHex = `layer${i}Hex`
        if (this.props[layerHex] && this.props[layerHex] != prevProps[layerHex])
        {
          const boolArray = this.hexToBoolArray(this.props[layerHex])
          
          layers[i-1] = boolArray
          isChanged = true
        }
      })
      if(isChanged)
      this.setState({layers})
    }
    
    hexToBin(hex) {
      return (parseInt(hex, 16).toString(2)).padStart(168, '0')

    }
    
    binToHex(bin) {
      return (parseInt(bin, 2).toString(16)).padStart(21, '0')
    }
    
    hexToBoolArray(hex) {
      if(!hex) return hex
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
    
    editingLayer() {
      return this.state.layers[this.editingLayerIndex]
    }
    
    getEditingLayerHex(i) {
      const bin = this.editingLayer().map(i => i? '1' :'0').join('').padEnd(168, '0')
      return this.binToHex(bin)
    }
    
    selectPartOfDay(dayIndex, partIndex) {
      const modalCheckboxes = this.hourCheckboxRefs.map((ref, i) =>  this.editingLayer()[dayIndex*24+partIndex *6+i])
      this.setState({clickedDayIndex: dayIndex,
        clickedPartIndex: partIndex,
        modalCheckboxes
      })
    }
    
    saveHours() {
      const layers = this.state.layers
      const index = this.editingLayerIndex
      
      this.state.modalCheckboxes.map((bool, i) => {
        layers[index][this.state.clickedDayIndex * 24 + this.state.clickedPartIndex * 6 + i] = bool
      })
      this.setState({layers})
      
      this.props.onSaved(this.getEditingLayerHex())
    }
    
    onModalCheckboxChange(i) {
      const modalCheckboxes = this.state.modalCheckboxes
      modalCheckboxes[i] = !modalCheckboxes[i]
      this.setState({modalCheckboxes})
    }
    
    getHrClassName(d,p,i) {
      const h = d*24+p*6+i
      for(let j = this.state.layers.length - 1; j>=0; j--) {
        if (this.state.layers[j][h]) {
          return this.getPatternClassName(j)
        }
      }
      return ''
    }
    
    getHrClassNameForModal(d, p, i) {
      
      if (this.state.modalCheckboxes[i]) {
        return this.getEditingPatternClassName()
      }
      return ''
    }
    
    getEditingPatternClassName() {
      return this.getPatternClassName(this.editingLayerIndex)
    }
    
    getPatternClassName(i) {
      return ['green-glow', 'stripe-grey', 'stripe-green', 'red-glow'][i]
    }
    
    todayClassName(i) {
      const date = addDays(this.startOfWeek, i).getDate()
      if(isSameDay(date, new Date())) {
        return 'today'
      } else {
        return''
      }
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
              <div className={`h5 ${this.todayClassName(i)}`}>{addDays(this.startOfWeek, i).getDate()}</div>
            }
            {/*this.startOfWeek && 
              <div>{Utils.formatShortMonth(addDays(this.startOfWeek, i))}</div>*/
            }

            </div>
        
        ))}

      </div>
      
      {[0,1,2,3].map(p => (
        <div class="row flex-nowrap">
          <div class="col-3">{this.partsOfDay[p]}<br/>{this.partsOfDayTime[p]}</div>
          
          {[0,1,2,3,4,5,6].map(d => (
            <div class="part-of-time col-1 rounded m-1 bg-light p-0" data-toggle="modal" data-target={`#calendarPartOfDayModal${this.modalRandom}`} onClick={e => this.selectPartOfDay(d,p)}>
            
            {[0,1,2,3,4,5].map(h => (
              <div className={`hr ${this.getHrClassName(d,p,h)}`}> &nbsp;</div>

            ))}

            
            </div>

          
          ))}
              
        </div>
      ))}
      
        <div class="modal fade" id={`calendarPartOfDayModal${this.modalRandom}`} tabindex="-1" role="dialog" aria-labelledby="calendarPartOfDayModalTitle" aria-hidden="true">
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
    <input type="checkbox" onChange={e => this.onModalCheckboxChange(i)} checked={this.state.modalCheckboxes[i]} ref={this.hourCheckboxRefs[i]} />
    <div className={`hour rounded pl-4 pr-4 pt-2 pb-2 mb-2 ${this.getHrClassNameForModal(this.state.clickedDayIndex, this.state.clickedPartIndex,i)}`}>{this.state.clickedPartIndex * 6 + i}:00</div>
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