import React from "react";
import {Link} from "react-router-dom";
import Api from '../../../Api'
import SimpleTitle from '../../common/SimpleTitle'
import './ProfileEdit.css'

class ProfileEdit extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user: {}
        }
    }

    componentDidMount() {
      Api.get('/users/me')
        .then(response => 
        {
        this.setState({ user: response.data.data })
        }
        );
    }

    render() {
      
      return <div class="container" style={{'maxWidth':'720px'}}>
            
      <SimpleTitle title="แก้ไขโปรไฟล์"/>

      <div class="row"> 
       <div class="col border rounded ml-3 mr-3"> 
        <div class="border-bottom pt-3 pb-3 text-center d-flex flex-column align-items-center"> 
          <a href="/user/edit/avatar">
          <div className="user-image">
            <img src={this.state.user.avatarUrl} class="rounded-circle shadow" width="130" height="130" alt=""/> <span className="edit-icon btn btn-primary rounded"><i className="bx bx-camera"></i></span>

          </div>
          </a>
         <b>{this.state.user.username}</b> 
        </div> 
        <div class="border-bottom pt-3 pb-3"> 
         <h6>ข้อมูลส่วนบุคคล</h6> 
         <div class="d-flex justify-content-between"> 
          <div> 
           <h6 class="mb-0 text-muted">อีเมล</h6> 
           <b id="email-display">{this.state.user.email}</b> 
          </div> 
          <a href="javascript:void(0)" edit-section="edit-email-section" class="edit-link">แก้ไข</a> 
         </div>
        <div class="d-flex justify-content-between"> 
          <div> 
           <h6 class="mb-0 text-muted">ชื่อ</h6> 
           <b id="name-display">{this.state.user.name}</b> 
          </div> 
          <a href="javascript:void(0)" edit-section="edit-name-section" class="edit-link">แก้ไข</a> 
         </div> 

        </div> 
        <div class="border-bottom pt-3 pb-3"> 
         <h6>ความปลอดภัย</h6> 
         <div class="d-flex justify-content-between"> 
          <div> 
           <h6 class="mb-0 text-muted">รหัสผ่าน</h6> 
           <b>********</b>
          </div> 
          <a href="javascript:;" edit-section="edit-password-section" class="edit-link">แก้ไข</a> 
         </div> 
        </div> 

        <div class="pt-3 pb-3"> 
         <h6>ช่องทางการเรียนการสอน</h6> 
         <div class="d-flex justify-content-between"> 
          <div> 
           <h6 class="mb-0 text-muted">Skype ID</h6> 
           <b id="skype-id-display">{this.state.user.skypeId || '-'}</b> 
          </div> 
          <Link to='/user/edit/skypeid'>
            แก้ไข
          </Link>
         </div> 
         <div class="d-flex justify-content-between"> 
          <div> 
           <h6 class="mb-0 text-muted">Zoom ID</h6> 
           <b id="zoom-id-display">{this.state.user.zoomId || '-'}</b> 
          </div> 
          
          <Link to='/user/edit/zoomid'>
            แก้ไข
          </Link>
         </div> 
        </div> 
       </div> 
      </div> 
     </div> 

    }
};

export default ProfileEdit