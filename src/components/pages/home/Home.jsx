import React from "react";
import HomeHero from "./HomeHero";
import HomeHero2 from "./HomeHero2";
import HomeBenefits from "./HomeBenefits";
import HomeContactUs from "./HomeContactUs";
import HomeBecomeTutor from "./HomeBecomeTutor";
import HomeFooter from "./HomeFooter";
import HomeGettingStarted from "./HomeGettingStarted";
import HomeEasyAppointment from "./HomeEasyAppointment";

class Home extends React.Component {
  
  
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      
    }

    render() {
      return <div class="">
        <HomeHero2/>
        <HomeBenefits/>
        <HomeGettingStarted/>
        <HomeEasyAppointment/>
        
        <HomeBecomeTutor/>
        <HomeFooter/>
     </div> 

    }
}

export default Home