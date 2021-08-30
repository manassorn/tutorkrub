import React from "react";

class StudentNewActionCard extends React.Component {

  render() {
    return <div className="alert alert-info">
      <h4>รอติวเตอร์ตอบรับ</h4>
      <hr/>
      <p>นัดหมายได้ถูกส่งไปยังติวเตอร์ ติวเตอร์จะตอบรับภายใน 24 ชั่วโมง
      <ul><li>
      หากติวเตอร์ไม่ตอบรับ นัดหมายจะถูกยกเลิก และเงินจะถูกคืนใน กระเป๋าตังค์
      </li></ul>
      </p>
      <a href="#" className="btn btn-danger">ยกเลิกนัดหมาย</a>
    </div>

  }
}
export default StudentNewActionCard