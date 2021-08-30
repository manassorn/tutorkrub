import React from "react";

class StudentNewActionCard extends React.Component {
    
  render() {
    return <div className="alert alert-secondary">
      <h4>นัดหมายไม่ถูกตอบรับ</h4>
      <hr/>
      <p>ติวเตอร์ไม่ตอบรับภายใน 24 ชั่วโมง
      <ul><li>
      ...
      </li></ul>
      </p>
      <a href="#" className="btn btn-danger">ยกเลิกนัดหมาย</a>
    </div>
      
  }
}
export default StudentNewActionCard