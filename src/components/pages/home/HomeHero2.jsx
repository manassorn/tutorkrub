import React from "react";
import HomeGettingStarted from "./HomeGettingStarted";
import './HomeHero.css'

class HomeHero2 extends React.Component {


  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    
  }

  render() {
    return <div className="xhero-bg-young-boy row mx-0">
        <div className="col-md-5 offset-md-2 hero-message">

        <h2>สอน / เรียน แค่ 1 ชั่วโมง</h2>
        <div className="pl-2">

            <img src="https://cdn0.agoda.net/images/emailmarketing/ycs_elements/agx-50-circle-check.png" width="16"/>&nbsp;ไม่มีข้อผูกมัด
            <a href="ycsapp://agoda/dashboard">ycsapp://agoda/dashboard</a>
            <br/>
            <img src="https://cdn0.agoda.net/images/emailmarketing/ycs_elements/agx-50-circle-check.png" width="16"/>&nbsp;เรียนจบเป็นครั้งๆ

        </div>

        <div className="mt-3">
          <a href="#" className="btn btn-outline-primary rounded-pill">สมัครสอน</a>
          <a href="#" className="btn btn-outline-primary rounded-pill ml-3">สมัครเรียน</a>
        </div>
      </div>
      
      <div className="col-md-5 hero-message">
        <img src="/assets/images/home/skype-call.jpg" width="100%"/>
      </div>
     </div>

  }
}

export default HomeHero2
