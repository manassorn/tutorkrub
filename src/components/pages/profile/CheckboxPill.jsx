import React, {forwardRef, useImperativeHandle} from "react";

const CheckboxPill = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getChecked() {
      return checked
    },
    getValue() {
      return value
    }
  }));
  let checkbox = undefined
  let checked = props.defaultChecked
  let value = props.label

  function onClick(e) {
    checked = checkbox.checked
    value = checkbox.value
    if(props.onClick) props.onClick(e)
  }
  return (
    <div className="form-check form-check-inline border badge badge-pill text py-1 px-2">
      <input ref={ele => checkbox= ele} onClick={e => onClick(e)} className="form-check-input" type="checkbox" id={props.label} value={props.label} defaultChecked={props.defaultChecked}/>
      <label className="form-check-label" htmlFor="inlineCheckbox3">{props.label}</label>
    </div>
  )
})
export default CheckboxPill