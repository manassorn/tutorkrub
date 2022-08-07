import React from "react"
import Constant from "../../Constant";

function LevelRangeDisplay(props) {
  let start = undefined
  let end = undefined
  function humanDisplay(levels) {
    const levelGroups = []
    Constant.schoolLevels.map((lv) => {
      const found = levels.indexOf(lv) >= 0
      if (found) {
        if (!start) start = lv
        else end = lv
      } else {
        if (start && end) {
          levelGroups.push(start + '-' + end)
          start = end = undefined
        } else if(start) {
          levelGroups.push(start)
          start = undefined
        }
      }
    })
    return levelGroups.join(', ')
  }
  return (
    <span>{humanDisplay(props.levels)}</span>
  )
}
export default LevelRangeDisplay