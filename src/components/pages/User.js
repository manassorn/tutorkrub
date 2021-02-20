import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return      <div className="container" style="max-width:720px">

       <div className="border-top border-bottom p-3">
        <div class="text-center d-flex justify-content-center">
         <img src="assets/images/avatars/avatar-1.png" class="rounded-circle shadow" width="130" height="130" alt=""/>
         <div class="m-3 text-left">
          <h5>Manassorn Vanichdilokkul</h5>
          <a href="user-edit.html" class="btn btn-outline-primary">แก้ไขโปรไฟล์</a>

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
       </div>


       <div class="p-3">
        <div class="text-center d-flex justify-content-between align-items-center">
         <h5>คอร์สทั้งหมด</h5>
         <a href="course-add.html" class="btn btn-primary ml-auto radius-10"><i class="bx bx-plus"></i> เพิ่มคอร์ส</a>

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
       
       
       
       <div class="course-card d-none col-lg-4">
        <div class="card">
         <div class="card-body">
          <div class="media align-items-center">
           <div class="media-body ml-3">
            <h5 class="mb-0">title</h5>
            <p class="mb-0 text-secondary">฿price . category</p>
            <a href="course-edit.html#id" class="stretched-link">แก้ไข</a>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>

     </div> 

    }
};

export default User