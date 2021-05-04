import React from "react";

class FormValidation extends React.Component {


  constructor(props) {
    super(props);
    
    this.form = React.createRef()
    
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {

  }
  
  onSubmit(event) {
    const form = this.form.current
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      event.preventDefault()
      return false
    }
    this.props.onSubmit?.()
  }

  render() {
    return <form ref={this.form} onSubmit={e => this.onSubmit(e)} className="needs-validation" noValidate>
        {this.props.children}
      </form>

  }
}

export default FormValidation