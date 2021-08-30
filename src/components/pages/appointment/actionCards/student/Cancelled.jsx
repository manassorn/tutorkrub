import React from "react";

class StudentCancelledActionCard extends React.Component {
    
  render() {
    return <div className="alert alert-secondary">
      <h4>นัดหมายถูกยกเลิกโดยติวเตอร์</h4>
      <hr/>
      <p>เหตุผล :
      <ul><li>
      ไม่ว่าง
      </li></ul>
      </p>
    </div>
      
  }
}
export default StudentCancelledActionCard