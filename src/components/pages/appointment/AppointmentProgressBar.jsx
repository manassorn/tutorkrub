import React from "react";
import './AppointmentProgressBar.css'

class AppointmentProgressBar extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      appointments: []
    }
    this.icons = ['bx-bitcoin', 'bx-message', 'bx-chat', 'bx-task']
    this.labels = ['รอชำระเงิน',
    'รอตอบรับ',
    'ตอบรับแล้ว',
    'เรียนแล้ว',
    ]
  }

  componentDidMount() {
    
    
  }


  render() {
    return <div>
    <div id="steps" className="d-flex">
      <div class="step done w-25" data-desc="Listing information">
            <div>1</div>
      </div>
      <div class="step done w-25" data-desc="Photos & Details">
            <div>1</div>

      </div>
      <div class="step active w-25" data-desc="Review & Post">
            <div>1</div>

      </div>
      <div class="step w-25" data-desc="Your order">
            <div>1</div>

      </div>
    </div>
    
    <div className="d-flex">
    <div className="w-25">
    <div>1</div>
    </div>
    <div className="w-25">1</div>
    <div className="w-25">1</div>
    <div className="w-25">1</div>
    
    </div>
    
  </div>

  }
}
export default AppointmentProgressBar