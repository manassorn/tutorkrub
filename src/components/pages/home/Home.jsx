import React from "react";
import HomeHero from "./HomeHero";
import HomeHero2 from "./HomeHero2";
import HomeBenefits from "./HomeBenefits";
import HomeContactUs from "./HomeContactUs";
import HomeBecomeTutor from "./HomeBecomeTutor";
import HomeFooter from "./HomeFooter";
import HomeGettingStarted from "./HomeGettingStarted";
import HomeBenefits2 from "./HomeBenefits2";
import HomeEasyAppointment from "./HomeEasyAppointment";

class Home extends React.Component {
  
  
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      
    }

    render() {
      return <div className="">
        <HomeHero2/>
        {/*<HomeBenefits/>*/}
        {/*<HomeGettingStarted/>*/}
        <HomeBenefits2/>

        <HomeEasyAppointment/>
        
        <HomeBecomeTutor/>
        <HomeFooter/>
     </div> 

    }
}

export default Home