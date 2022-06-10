import React from "react";

class ButtonSpinner extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      spin: false
    }
  }

  componentDidMount() {

  }
  
  click(e) {
    this.setState({spin: true})
    this.props.onClick?.()
  }

  render() {
    return <button className="btn btn-primary btn-block btn-lg" onClick={e => this.click(e)}>
    เรียบร้อย
        {this.state.spin && <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> }

    </button>

  }
}

export default ButtonSpinner