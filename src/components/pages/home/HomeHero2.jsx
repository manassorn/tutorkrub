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
    return <div className="xhero-bg-young-boy row mx-0" style={{background:'#fafafa'}}>
        <div className="offset-md-1 col-md-6">
        <div class="jumbotron jumbotron-fluid pb-0" style={{background:'#fafafa'}}> 
        <div class="container"> 
        <h1 class="display-4">
        ศูนย์รวมติวเตอร์ ทุกวิชา
        </h1> 
        <p class="lead">
        ทดลองเรียน 1 ชั่วโมงก่อนได้
        </p> 
        <p class="leadx">
          <a class="btn btn-primary" href="#" role="button">ทดลองเรียน 1 ชั่วโมง</a> 
          <a class="btn btn-link" href="#" role="button">อยากเป็นติวเตอร์</a> 
        </p> 

        </div> 
        </div>

      </div>
      
      <div className="col-md-5" style={{paddingTop:'0px'}}>
        <img src="/assets/images/home/skype-call.jpg" width="100%"/>
      </div>
     </div>

  }
}

export default HomeHero2
