import React, {useState} from "react";
import addDays from 'date-fns/addDays'
import differenceInHours from 'date-fns/differenceInHours'
import isSameDay from 'date-fns/isSameDay'
import Api from '../../Api'
import Utils from '../../Utils'
import SimpleTitle from '../common/SimpleTitle'
import './CalendarWeekPreview.css'
import './Patterns.css'

function CalendarWeekPreview2(props) {

  const matrix = new Array(7).fill(0).map(() => new Array(24).fill(0));
  const [availability, setAvailability] = useState(props.availability || matrix)
  const startOfWeek = props.startOfWeek
  const daysOfWeekMini = ['จ',
    'อ',
    'พ',
    'พฤ',
    'ศ',
    'ส',
    'อ',
  ]
  const daysOfWeek = ['จันทร์',
    'อังคาร',
    'พุธ',
    'พฤหัสบดี',
    'ศุกร์',
    'เสาร์',
    'อาทิตย์',
  ]
  const partsOfDay = ['เช้ามืด',
    'เช้า',
    'บ่าย',
    'ค่ำ']
  const partsOfDayTime = ['00:00-06:00',
    '06:00-12:00',
    '12:00-18:00',
    '18:00-24:00']

  function getHrClassName(d,p,i) {
    const h = d*24+p*6+i
    for(let j = this.state.layers.length - 1; j>=0; j--) {
      if (this.state.layers[j][h]) {
        return this.getPatternClassName(j)
      }
    }
    return ''
  }

    
  function todayClassName(i) {
    const date = addDays(startOfWeek, i)
    if(isSameDay(date, new Date())) {
      return 'today'
    } else {
      return ''
    }
  }

  return (
    <div>
     <div className="row flex-nowrap">
      <div className="col-3"> </div>
      {daysOfWeekMini.map((dow,i) => (
          <div className="col-1 m-1 p-0 text-center" key={dow}>
          <div className="font-weight-boldx">
            {dow}
          </div>
          {startOfWeek &&
            <div className={`cal-date h6 ${todayClassName(i)}`}>{addDays(startOfWeek, i).getDate()}</div>
          }
          {/*startOfWeek &&
            <div>{Utils.formatShortMonth(addDays(startOfWeek, i))}</div>*/
          }

          </div>

      ))}

    </div>
    {[0,1,2,3].map(p => (
      <div className="row flex-nowrap" key={p}>
        <div className="col-3">{partsOfDay[p]}<br/>{partsOfDayTime[p]}</div>

        {[0,1,2,3,4,5,6].map(day => (
          <div key={day} className="part-of-time col-1 rounded m-1 bg-light p-0">

          {[0,1,2,3,4,5].map(h => (
            <div className={`hr ${availability[day][p*6+h]?'green-glow':''}`} key={h}> &nbsp;</div>

          ))}


          </div>


        ))}

      </div>
    ))}
    </div>
  )
}

export default CalendarWeekPreview2