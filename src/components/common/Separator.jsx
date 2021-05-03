import React from "react";
import './Separator.css'

class Separator extends React.Component {


  constructor(props) {
    super(props);
    this.text = this.props.text
  }

  componentDidMount() {

  }

  render() {
    return <div class="separator">{this.text}</div>

  }
}

export default Separator