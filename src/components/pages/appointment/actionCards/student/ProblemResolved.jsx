import React from "react";

class StudentProblemResolvedActionCard extends React.Component {
    
  render() {
    return <div className="alert alert-info">
      <h4>ปัญหาถูกแก้ไขแล้ว</h4>
      <hr/>
      <p>โดยการ
      <ul>
      <li>
      แบ่งเงินคนละครึ่ง
      </li>
      <li>
      นัดหมายเวลาเรียนใหม่
      </li>
      </ul>
      </p>
    </div>
      
  }
}
export default StudentProblemResolvedActionCard