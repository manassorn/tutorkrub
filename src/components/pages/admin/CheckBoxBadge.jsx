import React from "react";

class CheckBoxBadge extends React.Component {
  constructor(props){
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick(e) {
    this.checked = this.checkBox.checked
    this.value = this.checkBox.value
    this.props.onClick(e)
  }
  render() {
    return <div className="form-check form-check-inline border badge badge-pill text py-1 px-2">
      <input ref={ele => this.checkBox= ele} onClick={e => this.onClick(e)} className="form-check-input" type="checkbox" id={this.props.label} value={this.props.label}/>
      <label className="form-check-label" htmlFor="inlineCheckbox3">{this.props.label}</label>
    </div>
  }
}

export default CheckBoxBadge