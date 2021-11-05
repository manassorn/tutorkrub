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
        <div className="offset-md-1 col-md-5">
        <div class="jumbotron jumbotron-fluid" style={{background:'#fafafa'}}> 
        <div class="containerx"> 
        <h1 class="display-4x">
        ศูนย์รวมติวเตอร์ ทุกวิชา
        </h1> 
        <p class="lead">
        ทดลองเรียน 1 ชั่วโมงก่อนได้
        </p> 
        <p class="leadx">
          <a class="btn btn-primary btn-lg" href="#" role="button">ทดลองเรียน 1 ชั่วโมง</a> 
          <a class="btn btn-link btn-lg" href="#" role="button">อยากเป็นติวเตอร์</a> 
        </p> 

        </div> 
        </div>

      </div>
      
      <div className="col-md-6" style={{paddingTop:'0px'}}>
        <img src="/assets/images/home/skype-call.jpg" width="100%"/>
      </div>
     </div>

  }
}

export default HomeHero2
