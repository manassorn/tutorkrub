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
    console.log('fail')
    console.log(ele)
    console.log(ele.nextElementSibling)
    while(ele = ele.nextElementSibling) {
      const id = ele.getAttribute('feedback-id')
      console.log(id)
      if(id === feedbackId) {
        console.log('ffff', ele.classList)
        ele.classList.add('is-invalid')
        ele.classList.remove('d-none')
      } else {
        ele.classList.add('d-none')
      }
    }
  }
  
  onSubmit(event) {
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
    this.props.onSubmit?.()
  }

  render() {
    return <form ref={this.form} onSubmit={e => this.onSubmit(e)} className="needs-validation" noValidate>
        {this.props.children}
      </form>

  }
}

export default FormValidation