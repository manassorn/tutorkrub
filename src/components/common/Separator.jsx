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
    return <div class="separator">&nbsp;&nbsp;&nbsp;{this.text}&nbsp;&nbsp;&nbsp;</div>

  }
}

export default Separator