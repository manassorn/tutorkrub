import React from "react";

class Appointment extends React.Component {
    
  render() {
    return <div className="alert alert-warning">
      <h4>รอชำระเงิน</h4>
      <hr/>
      <p>นัดหมายจะถูกส่งไปหาติวเตอร์หลังจากชำระเงิน</p>
      <a href="#" className="btn btn-warning">ชำระเงิน</a>
    </div>
      
  }
}