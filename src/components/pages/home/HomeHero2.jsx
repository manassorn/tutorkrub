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
        <div class="container"> 
        <h1 class="display-4">
        ศูนย์รวมติวเตอร์ทุกวิชา
        </h1> 
        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> 
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> 
          <a class="btn btn-link btn-lg" href="#" role="button">Learn more</a> 
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
