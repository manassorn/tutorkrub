import React from "react";

class FormValidation extends React.Component {


  constructor(props) {
    super(props);
    
    this.form = React.createRef()
    
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {

  }
  
  fail(ele, feedbackId) {
    //ele.classList.add('is-invalid')
    ele.setCustomValidity(feedbackId)
    /*while(ele = ele.nextElementSibling) {
      const id = ele.getAttribute('feedback-id')
      if(id === feedbackId) {
        ele.classList.remove('d-none')
      } else {
        ele.classList.add('d-none')
      }
    }*/
  }
  
  ok(ele) {
    //ele.classList.add('is-invalid')
    ele.setCustomValidity('')
    /*const first = ele.nextElementSibling
    while(ele = ele.nextElementSibling) {
      ele.classList.add('d-none')
    }
    first.classList.remove('d-none')
    */
  }
  
  onSubmit(event) {
        console.log('submittt1')

    const form = this.form.current
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      event.preventDefault()
      return false
    }
    if (!this.props.validate?.()) {
      form.classList.add('was-validated');
      event.preventDefault()
      return false
    }
    return this.props.onSubmit?.(event)
  }

  render() {
    return <form ref={this.form} onSubmit={e => this.onSubmit(e)} className="needs-validation" noValidate>
        {this.props.children}
      </form>

  }
}

export default FormValidation