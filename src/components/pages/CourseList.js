import React from "react";
import Api from '../../Api'
import SimpleTitle from '../common/SimpleTitle'

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
      return  <div class="container pt-3"> 
      <div class=" border-bottom pb-0 pt-3 pl-3"> 
      <div class="chip">
        คณิตศาสตร์
      </div> 
      <div class="chip">
        วิทยาศาสตร์
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
            <div class="card" style={{'box-shadow':'none'}}>
                <img class="card-img-top rounded rounded-lg" src={course.tutorAvatarUrl} alt="Card image cap"/>
                <div class="card-body p-0">
                    <p class="card-text">
                        <a href={`/course/${course.id}`} className="stretched-link text-dark">
                        {course.title}</a><br/>
                         <b>
                        <span className="text-primary">฿{course.price}/ชั่วโมง</span></b>
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