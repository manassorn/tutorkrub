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
      const that = this
      Auth.observeLogin((login) => {
        if(!login || !login.user) return
        that.setState({user:login.user})
      })
      Api.get('/courses')
        .then(response => 
        {
        this.setState({ courses: response.data.data })
        }
        );
      
    }

    render() {

        return      <div className="container" style={{'maxWidth':'720px'}}>

      <SimpleTitle title="โปรไฟล์"/>


       <div className="border-top border-bottom py-4">
        <div className="text-center d-flex justify-content-center">
         <img src={this.state.user.avatarUrl || '/public/assets/images/avatars/avatar-default.jpg'} className="rounded-circle shadow" width="130" height="130" alt=""/>
         <div className="m-3 text-left">
          <h5>{this.state.user.name}</h5>

          <div className="d-flex mt-2">
           <div className="pr-3 pt-1 pb-1 border-right">
            <h6 className="mb-0 text-muted">สอนแล้ว<br/>0</h6>
           </div>
           <div className="pl-3 pr-3 pt-1 pb-1 border-right">
            <h6 className="mb-0 text-muted">สอนแล้ว<br/>0</h6>
           </div>
           <div className="pl-3 pr-3 pt-1 pb-1">
            <h6 className="mb-0 text-muted">สอนแล้ว<br/>0</h6>
           </div>
          </div>


         </div>
        </div>
        
        <div className="row mt-3">
          <div className="offset-md-2 col-md-4 col-6">
            <a href="/user/edit" className="btn btn-block btn-outline-primary radius-10">แก้ไขโปรไฟล์</a>

          </div>
          <div className="col-md-4 col-6">
            <a href="/user/edit/availability" className=" btn btn-block btn-outline-primary radius-10">เวลาที่สะดวกสอน
              <span className="bx-flashing badge badge-pill badge-danger">1</span>
            </a>

          </div>


        </div>
       </div>


       <div className="py-4">
        <div className="text-center d-flex justify-content-between align-items-center">
         <h5>คอร์สของฉัน</h5>
         <a href="/course/add" className="btn btn-primary ml-auto radius-10"><i className="bx bx-plus"></i> เพิ่มคอร์ส</a>

        </div>
       </div>


      <div className="row">
        
      
       
       {this.state.courses.map(course => (
      <div className="course-card col-lg-4" key={course.id}>
        <div className="card radius-10 border">
         <div style={{borderLeft:"solid 5px green"}} className="radius-10 card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text">฿{course.price} . {course.schoolLevel} . {course.subject}</p>


            <a href={`/course/edit/${course.id}`} className="card-link stretched-link">แก้ไข</a>


         </div>
        </div>
       </div>
       ))}
       
       
      </div>

     </div> 

    }
};

export default Profile