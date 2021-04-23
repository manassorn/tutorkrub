import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import SimpleTitle from '../../common/SimpleTitle'


class Profile extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user: {}, 
          courses: []
        }
    }

    componentDidMount() {
      var id = Auth.getUserId()
      Api.get('/crud/user/' + id)
        .then(response => 
        {
        this.setState({ user: response.data.data })
        }
        );
      Api.get('/crud/course')
        .then(response => 
        {
          console.log('courses',response.data.data)
        
        this.setState({ courses: response.data.data })
        }
        );
      
    }

    render() {

        return      <div className="container" style={{'max-width':'720px'}}>

      <SimpleTitle title="โปรไฟล์"/>


       <div className="border-top border-bottom py-4">
        <div class="text-center d-flex justify-content-center">
         <img src={this.state.user.avatarUrl} class="rounded-circle shadow" width="130" height="130" alt=""/>
         <div class="m-3 text-left">
          <h5>{this.state.user.name}</h5>

          <div class="d-flex mt-2">
           <div class="pr-3 pt-1 pb-1 border-right">
            <h6 class="mb-0 text-muted">สอนแล้ว<br/>0</h6>
           </div>
           <div class="pl-3 pr-3 pt-1 pb-1 border-right">
            <h6 class="mb-0 text-muted">สอนแล้ว<br/>0</h6>
           </div>
           <div class="pl-3 pr-3 pt-1 pb-1">
            <h6 class="mb-0 text-muted">สอนแล้ว<br/>0</h6>
           </div>
          </div>


         </div>
        </div>
        
        <div className="row mt-3">
          <div className="offset-md-2 col-md-4 col-6">
            <a href="/user/edit" className="btn btn-block btn-outline-primary">แก้ไขโปรไฟล์</a>

          </div>
          <div className="col-md-4 col-6">
            <a href="/user/edit/availableHours" className=" btn btn-block btn-outline-primary">เวลาที่สะดวกสอน</a>

          </div>


        </div>
       </div>


       <div class="py-4">
        <div class="text-center d-flex justify-content-between align-items-center">
         <h5>คอร์สทั้งหมด</h5>
         <a href="/course/add" class="btn btn-primary ml-auto radius-10"><i class="bx bx-plus"></i> เพิ่มคอร์ส</a>

        </div>
       </div>


      <div class="row">
        
        
       <div  class="col-lg-4">
        <div class="card">
         <div class="card-body">
          <div class="media align-items-center">
           <div class="media-body ml-3">
            <h5 class="mb-0">รับสอนคณิตศาสตร์</h5>
            <p class="mb-0 text-secondary">฿200/ชั่วโมง . คณิตศาสตร์</p>
            <a href="course-edit.html" class="stretched-link">แก้ไข</a>

           </div>
          </div>
         </div>
        </div>
       </div>
       
       {this.state.courses.map(course => (
      <div class="course-card col-lg-4">
        <div class="card">
         <div class="card-body">
          <div class="media align-items-center">
           <div class="media-body ml-3">
            <h5 class="mb-0">{course.title}</h5>
            <p class="mb-0 text-secondary">฿{course.price} . {course.category}</p>
            <a href={`/course/edit#${course.id}`} class="stretched-link">แก้ไข</a>
           </div>
          </div>
         </div>
        </div>
       </div>
       ))}
       
       
      </div>

     </div> 

    }
};

export default Profile