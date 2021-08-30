import React from "react";

class StudentNewActionCard extends React.Component {
    
  render() {
    return <div className="alert alert-info">
      <h4>รายงานบทเรียนมีปัญหา</h4>
      <hr/>
      <p>ประสงค์จะ
      <ul><li>
      นัดหมายเวลาเรียนใหม่
      </li></ul>
      </p>
      <a href="#" className="btn btn-danger">ยกเลิกนัดหมาย</a>
    </div>
      
  }
}
export default StudentNewActionCard