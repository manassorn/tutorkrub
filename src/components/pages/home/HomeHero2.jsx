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
    return <div className="row py-5 align-items-center" style={{background:'#fafafa'}}>
        <div className="offset-md-1 col-md-6 px-5">
        
        <h1 class="display-4">
        ศูนย์รวมติวเตอร์ ทุกวิชา
        </h1> 
        <p class="lead">
        ทดลองเรียน 1 ชั่วโมงก่อนได้
        </p> 
        <p class="leadx">
          <a class="btn btn-primary font-weight-bold" href="#" role="button">ทดลองเรียน 1 ชั่วโมง</a> 
          <a class="btn btn-link" href="#" role="button">อยากเป็นติวเตอร์</a> 
        </p> 


      </div>
      
      <div className="col-md-4" style={{paddingTop:'0px'}}>
        <img src="/assets/images/home/skype-call2.jpg" width="100%"/>
      </div>
     </div>

  }
}

export default HomeHero2
