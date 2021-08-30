import React from "react";

class StudentNewActionCard extends React.Component {
    
  render() {
    return <div className="alert alert-info">
      <h4>ติวเตอร์ร้องเรียนว่าบทเรียนมีปัญหา</h4>
      <hr/>
      <p>ติวเตอร์ประสงค์จะ
      <ul><li>
      รับเงินทั้งหมด
      </li></ul>
      </p>
      <a href="#" className="btn btn-primary">ตอบรับ</a>
    </div>
      
  }
}
export default StudentNewActionCard