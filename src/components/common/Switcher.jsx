import React from "react";
import "./Switcher.scss"

class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          label: this.props.label,
          checked: this.props.checked
        }
    }
    
    /*onComponentUpdated(prevProps) {
      if (this.props.checked != pre)
    }*/

    onClick(e) {
      this.setState({checked:!e.target.checked})
    }

    render() {

        return <div class="checkbox switcher">
      <label for="test">
        <input type="checkbox" id="test" onClick={e => this.onClick(e)} onChange={e => this.props.onChange(e.target.checked)} checked={this.state.checked} />
        <span><small></small></span>
        <small>{this.state.label}</small>
      </label>
    </div>
    }
};

export default Switcher