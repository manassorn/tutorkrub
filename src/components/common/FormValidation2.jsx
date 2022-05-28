import React from "react";

class Form extends React.Component {


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
    let sibling = ele.nextElementSibling
    while(sibling) {
      console.log(sibling)
      // const id = ele.getAttribute('feedback-id')
      // if(id === feedbackId) {
      //   ele.classList.remove('d-none')
      // } else {
      //   ele.classList.add('d-none')
      // }
      sibling = sibling.nextElementSibling
    }
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

  checkValidity() {
    return this.form.current.checkValidity()
  }
  
  onSubmit(event) {

    const form = this.form.current
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      event.preventDefault()
      return false
    }

    if (this.props.validate && !this.props.validate()) {
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

class InvalidFeedback extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      message: ""
    }

    this.ok = this.ok.bind(this)
    this.fail = this.fail.bind(this)
  }

  componentDidMount() {
    console.log('did mount')

    this.props.input.current.addEventListener("input", (e) => {
      this.props.input.current.classList.remove('is-invalid')
    });
    this.props.input.current.addEventListener('invalid', (e) => {
      this.setState({message: this.props.invalidMessage})
    })
  }

  fail(message) {
    this.setState({message})
    this.props.input.current.classList.add('is-invalid')
  }

  ok() {
    this.props.input.current.classList.remove('is-invalid')
  }

  render() {
    return <div className="invalid-feedback" >
      {this.state.message}
    </div>
  }
}


class Input extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      invalidMessage: this.props.invalidmessage,
      customMessage: ''
    }
    this.value = undefined
    this.inputElement = React.createRef()
    this.ok = this.ok.bind(this)
    this.fail = this.fail.bind(this)
  }

  componentDidMount() {
    this.inputElement.current.addEventListener('change', (e) => {
      this.value = e.target.value
      //todo - this part is a bit tricky
      this.inputElement.current.classList.remove('is-invalid')
      this.inputElement.current.setCustomValidity('')
      this.setState({customMessage: ''})
    })

    // this.props.input.current.addEventListener("input", (e) => {
    //   this.props.input.current.classList.remove('is-invalid')
    // });
    // this.props.input.current.addEventListener('invalid', (e) => {
    //   this.setState({message: this.props.invalidMessage})
    // })
  }

  fail(customMessage) {
    this.setState({customMessage})
    //todo - this part is a bit tricky
    this.inputElement.current.classList.add('is-invalid')
    this.inputElement.current.setCustomValidity(customMessage)
  }

  ok() {
    // this.inputElement.current.classList.remove('is-invalid')
  }

  render() {
    return <>
      <input ref={this.inputElement} {...this.props}/>
      <div className="invalid-feedback" >
        {this.state.customMessage?this.state.customMessage:this.state.invalidMessage}
      </div>
    </>
  }
}

export {Form, InvalidFeedback, Input}