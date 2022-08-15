import React, {useEffect, useState} from "react";
import DateUtils from "../../DateUtils";
import './CalendarWeekTimeCellColor.scss'


function CalendarWeekTimeCellColor(props) {
  // const matrix = new Array(7).fill(0).map(() => new Array(24).fill(0));
  // const [colorFlagMatrix, setColorFlags] = useState(props.colorFlagMatrix || matrix)
  const daysInWeek = DateUtils.getDaysInWeek()

  useEffect(() => {
  }, [])

  function cellClassNames(day, hour) {
    const color = props.colorFlagCssClassMap(props.colorFlagMatrix[day][hour])
    const clickable = clickAble(day, hour)?'clickable':''
    return color + ' ' + clickable
  }

  function clickAble(day, hour) {
    return props.clickable === true || props.clickable(props.colorFlagMatrix[day][hour])
  }

  function onTimeClick(day, hour) {
    if (clickAble(day, hour)) {
      props.onTimeClick(day, hour)
    }
  }

  return (
    <div>

      <table className="table table-bordered table-sm schedule">
        <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          {daysInWeek.map((dow,i) => (
            <th scope="col" style={{width: '12.5%'}} className="text-center">
            {dow} {props.weeklyDatesFormat &&
            (
                <>
                  <br/>
                  <span className={DateUtils.isToday(props.weeklyDates[i]) && 'bg-primary text-white p-1 radius-10'}>
                    {props.weeklyDatesFormat[i]}
                  </span>
                </>
            )}
            </th>
          ))}
        </tr>
        </thead>
        <tbody>
        {[...Array(24).keys()].map(hour => (
          <tr>
            <th scope="row" className="text-center">{('0' + hour).substr(-2)}:00</th>
            {[...Array(7).keys()].map(day => (
              <td onClick={e => onTimeClick(day, hour)} className={cellClassNames(day, hour)}>&nbsp;</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}

export default CalendarWeekTimeCellColor