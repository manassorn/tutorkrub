import React from "react";
import Api from '../../Api'
import FormValidation from './FormValidation'
import SimpleTitle from './SimpleTitle'

class SimpleEdit extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.fieldName = props.fieldName
        this.onSubmit = props.onSubmit
        this.setValue = this.setValue.bind(this)
        this.submit = this.submit.bind(this)
    }
    
    setValue(val) {
      this.input.value = val
    }

    componentDidMount() {
    }
    
    submit() {
      this.onSubmit(this.input.value)
    }
    
    render() {
      return      <div class="container" style={{maxWidth:'720px'}}>
      
      <div>
        <SimpleTitle title={`แก้ไข ${this.field}`} backBtn></SimpleTitle> 
        <div class = "border-top pt-3" >
              <FormValidation ref={this.form} onSubmit={e => this.submit(e)}>
              <div class="form-group"> 
               <label for="email-input">{this.fieldName}</label>
               <input type="text" ref={ele=> this.input= ele} class="form-control" id="input" placeholder="" required/> 
                <div class="invalid-feedback">
                        โปรดกรอก {this.fieldName}
                </div>
              </div> 
              
              <button type="submit" class="btn btn-primary btn-block mb-2">บันทึก</button> 
             </FormValidation> 
        </div> 
      </div>

      
      
     </div> 

    }
}

export default SimpleEdit