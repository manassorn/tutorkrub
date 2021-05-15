import React from "react";
import Api from '../../../Api'
import Constant from '../../../Constant'
import SimpleTitle from '../../common/SimpleTitle'

class CourseList extends React.Component {


    constructor(props) {
      super(props);
      this.state = {
        courses: []
      }
    }

    componentDidMount() {
      Api.get('/course/list')
        .then(response => 
        {
          console.log('courses',response.data.data)
        
        this.setState({ courses: response.data.data })
        }
        );
      
    }

    render() {
      return  <div class="container"> 
      <div class=" border-bottom pb-0 pt-3 "> 
      
      <div className="row">
      <div class="col-6 col-sm-3 btn-group-round mb-3"> 
        <div class="btn-group d-flex"> 
          <button type="button" class="btn btn-white">&nbsp;&nbsp;&nbsp;ชั้นเรียน&nbsp;&nbsp;&nbsp;</button> 
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownSchoolLevel"> 
          
          {Constant.schoolLevels.map(label => (
            <a class="dropdown-item" href="javaScript:;">{label}</a> 

          ))}
          </div>
          <button id="dropdownSchoolLevel" type="button" class="btn btn-white dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="sr-only">Toggle Dropdown</span> 
          </button> 
        </div> 
      </div>
      
       
            <div class="col-6 col-sm-3 btn-group-round mb-3"> 
            
              <div class="btn-group d-flex"> 

                <button type="button" class="btn btn-white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;วิชา&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button> 
                <div class="dropdown-menu dropdown-menu-right">
          {Constant.subjects.map(label => (
            <a class="dropdown-item" href="javaScript:;">{label}</a> 

          ))}
                </div>
                <button type="button" class="btn btn-white dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <span class="sr-only">Toggle Dropdown</span> 
                </button> 
              </div> 
            </div>
      </div>
      
      
     </div> 

      <div class="row"> 
       <div class="col-12"> 
        <h1>คณิตศาสตร์</h1> 
       </div> 
      </div> 
      <div id="course-cards" class="row">
      
      {this.state.courses.map(course => (
<div class="col-6 col-md-3">
            <div class="card radius-10 bg-light" style={{'box-shadow':'none'}}>
                <img class="card-img-top rounded rounded-lg" src={course.tutorAvatarUrl} alt="Card image cap"/>
                <div class="card-body p-0 mt-2">
                    <p class="card-text">
                        <a href={`/course/${course.id}`} className="stretched-link text-dark h6">
                        {course.title}</a><br/>
                                              <span class="badge badge-pill badge-secondary">{course.schoolLevel}</span>
                                 &nbsp;             <span class="badge badge-pill badge-secondary">{course.subject}</span>

                        <div className="mt-2 font-weight-bold h6">฿{course.price}/ชั่วโมง</div>
                    </p>
                </div>
            </div>
        </div>
        
        
      ))}
        
        
        
       
      </div> 
    

      
      <div class="row"> 
       <div class="col-sm-12 col-md-6 offset-md-3"> 
        <button class="btn btn-block btn-outline-primary">next</button> 
       </div> 
      </div> 
     </div> 

    }
}
export default CourseList