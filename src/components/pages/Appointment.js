import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'
import './Course.css'

class Appointment extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        weekIncrement: 0
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
        return      <div class="container" style={{maxWidth:'720px'}}> 
      <div class="mb-3 mt-3"> 
       <ul class="nav nav-tabs"> 
        <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#Experience"><span class="p-tab-name1">ลงเรียน</span> <span class="badge badge-pill badge-danger">3</span></a> </li> 
        <li class="nav-item"> <a class="nav-link" id="profile-tab" data-toggle="tab" href="#Biography"><span class="p-tab-name1">นัดสอน</span> <span class="badge badge-pill badge-danger">3</span></a> </li> 
       </ul> 
      </div> 
      <div class="row"> 
       <div class="col-md-6"> 
        <div class="card"> 
         <div class="card-body"> 
          <div class="media align-items-center"> 
           <h5 class="text-center">ธันวา<br/>20</h5> 
           <div class="media-body ml-3 pl-3 border-left"> 
            <h5 class="mb-0">รับสอนคณิตศาสตร์</h5> 
            <p class="mb-0 text-secondary">Web Developer</p> 
           </div> 
          </div> 
         </div> 
        </div> 
       </div> 
       <div class="col-md-6"> 
        <div class="card"> 
         <div class="card-body"> 
          <div class="media align-items-center"> 
           <div class="media-body ml-3"> 
            <h5 class="mb-0">Ralph L. Alva</h5> 
            <p class="mb-0 text-secondary">UI Developer</p> 
           </div> 
          </div> 
         </div> 
        </div> 
       </div> 
       <div class="col-md-6"> 
        <div class="card"> 
         <div class="card-body"> 
          <div class="media align-items-center"> 
           <div class="media-body ml-3"> 
            <h5 class="mb-0">John B. Roman</h5> 
            <p class="mb-0 text-secondary">Graphic Designer</p> 
           </div> 
          </div> 
         </div> 
        </div> 
       </div> 
      </div> 
     </div> 

    }
}
export default Appointment