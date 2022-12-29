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
    return <div className="row mx-0 py-5 align-items-center home-hero" style={{background:'#fafafa'}}>
        <div className="offset-md-1 col-md-6 px-5 text-center text-md-left">
        
        <h1>
          <img src="/public/assets/images/logo3.png" alt="" height="64" width="64"/>
          TutorKrub

        </h1>
        <h2>
        แพลตฟอร์มเชื่อมโยงระหว่างติวเตอร์และนักเรียน
        </h2>
        <ul className="ml-0 px-3 text-left px-md-0" style={{listStyle: 'none'}}>
          <li><i className="bx bxs-message-square text-primary mr-2"></i> เรียนตัวต่อตัวกับติวเตอร์คุณภาพระดับ 5 ดาว</li>
          <li><i className="bx bxs-message-square text-primary mr-2"></i> เลือกเรียนตามเวลาที่สะดวก และราคาที่เหมาะสม</li>
          <li><i className="bx bxs-message-square text-primary mr-2"></i> ชำระเงินเป็นครั้ง ครั้งละ 1-2 ชั่วโมง</li>
        </ul>

        <p className="leadx">
          <a className="btn btn-lg btn-primary font-weight-bold px-4 radius-10" href="#" role="button">ทดลองเรียน 1 ชั่วโมง</a>
        </p> 
        


      </div>
      
      <div className="col-md-5 pt-0">
        <img src="/public/assets/images/home/skype-call3.jpg" width="100%"/>
      </div>

     </div>

  }
}

export default HomeHero2
