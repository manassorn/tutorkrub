import React from "react";
import Api from '../../Api'
import Separator from '../common/Separator'
import SimpleTitle from '../common/SimpleTitle'

class Register extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
      }
    }
    
    componentDidMount() {
      /*Api.get('/crud/course')
        .then(response => 
        {
          console.log('courses',response.data.data)
        
        this.setState({ courses: response.data.data })
        }
        );
      */
    }


    render() {
        return <div class="container pt-3 border-top" style={{maxWidth:'720px'}}>
      
      
      <SimpleTitle title='ลงทะเบียน' />
       
      <div class="p-3">

        <button className="btn btn-primary btn-block">login with facebook</button>
        <button className="btn btn-primary btn-block">login with Line</button>
        
        <div className="my-3">
        <Separator text="หรือ"/>
        </div>

        เบอร์โทรศัพท์
       
      </div>
       
       
     </div> 

    }
}
export default Register;