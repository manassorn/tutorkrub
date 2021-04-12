import React from "react";
import HomeGettingStarted from "./HomeGettingStarted";
import './HomeHero.css'

class HomeHero extends React.Component {


  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    
  }

  render() {
    return <div className="hero-bg-young-boy row">
        <div className="col-md-5 offset-md-2 col-sm-12" style={{paddingTop:'150px', paddingBottom:'150px'}}>

        <h2>สอน หรือ เรียน แค่ 1 ชั่วโมง</h2>
        <div>ไม่มีข้อผูกมัด เรียนจบเป็นครั้งๆ</div>

        <div className="mt-3">
          <a href="#" className="btn btn-outline-primary rounded-pill">สมัครสอน</a>
          <a href="#" className="btn btn-outline-primary rounded-pill ml-3">สมัครเรียน</a>
        </div>
      </div>
     </div>

  }
}

export default HomeHero