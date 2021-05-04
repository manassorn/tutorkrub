import React from "react";

class FormValidation extends React.Component {


  constructor(props) {
    super(props);
    
    this.form = React.createRef()
    
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {

  }
  
  onSubmit() {
    const form = this.form.current
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      return false
    }
    this.props.onSubmit?.()
  }

  render() {
    return <form ref={this.form} onSubmit={this.onSubmit} className="needs-validation" novalidate>
        {this.props.children}
      </form>

  }
}

export default FormValidation