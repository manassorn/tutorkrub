import React from "react";
import HomeHero from "./HomeHero";
import HomeRegister from "./HomeRegister";
import HomeContactUs from "./HomeContactUs";
import HomeFooter from "./HomeFooter";
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
        <HomeRegister/>
        <HomeContactUs/>
        <HomeFooter/>
     </div> 

    }
}

export default Home