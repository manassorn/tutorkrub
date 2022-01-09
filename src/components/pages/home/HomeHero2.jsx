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
    return <div className="row mx-0 py-5 align-items-center" style={{background:'#fafafa'}}>
        <div className="offset-md-1 col-md-6 px-5 text-center text-md-left">
        
        <h1>
        แพลตฟอร์มเชื่อมโยงระหว่างติวเตอร์และนักเรียน
        </h1> 
        <p class="lead">
        ทดลองเรียน 1 ชั่วโมงก่อนได้
        </p> 
        <p class="leadx">
          <a class="btn btn-primary font-weight-bold px-4" href="#" role="button">ทดลองเรียน 1 ชั่วโมง</a> 
        </p> 


      </div>
      
      <div className="col-md-5" style={{paddingTop:'0px'}}>
        <img src="/assets/images/home/skype-call3.jpg" width="100%"/>
      </div>
     </div>

  }
}

export default HomeHero2
