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
    return <div class="hero">
        
      <h2>ตลาดติวเตอร์</h2>
      
      <div>
        <a href="#" className="btn btn-outline-light rounded-pill">เป็นติวเตอร์</a>
        <a href="#" className="btn btn-outline-light rounded-pill ml-3">เป็นนักเรียน</a>
      </div>
     </div>

  }
}

export default HomeHero