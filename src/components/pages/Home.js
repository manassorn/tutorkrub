import React from "react";
import HomeHero from "./HomeHero";
import HomeGettingStarted from "./HomeGettingStarted";

class Home extends React.Component {
  
  
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      
    }

    render() {
      return <div class="">
        <HomeHero/>
        <HomeGettingStarted/>

      
     </div> 

    }
}

export default Home