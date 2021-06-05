import React from "react";
import "./Switcher.scss"

class Switcher extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          label: this.props.label,
          checked: this.props.checked
        }
        this.onChange = this.onChange.bind(this)
    }
    
    /*onComponentUpdated(prevProps) {
      if (this.props.checked != prevProps.checked) {
        this.checkBox.current.checked = this.props.checked
      }
    }
    
    onComponentDidMount() {
      if(this.props.checked) {
        this.checkBox.current.checked = true
      }
    }*/

    onChange(e) {
      const checked = !this.state.checked
      this.setState({checked})
      this.props.onChange(checked)
    }

    render() {

        return <div class="checkbox switcher">
      <label for="test">
        <input type="checkbox" id="test" onChange={e => this.onChange()} checked={this.state.checked} />
        <span><small></small></span>
        <small>{this.state.label}</small>
      </label>
    </div>
    }
};

export default Switcher