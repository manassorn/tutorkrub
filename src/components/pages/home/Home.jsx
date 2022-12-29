import React from "react";
import HomeHero from "./HomeHero";
import HomeHero2 from "./HomeHero2";
import HomeHero3 from "./HomeHero3";
import HomeBenefits from "./HomeBenefits";
import HomeContactUs from "./HomeContactUs";
import HomeBecomeTutor from "./HomeBecomeTutor";
import HomeFooter from "./HomeFooter";
import HomeGettingStarted from "./HomeGettingStarted";
import HomeBenefits2 from "./HomeBenefits2";
import HomeEasyAppointment from "./HomeEasyAppointment";
import SeeWhatTutorKrubOffers from "./SeeWhatTutorKrubOffers";
import Faq from "./Faq";


class Home extends React.Component {
  
  
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      
    }

    render() {
      return <div className="">
        <HomeHero3/>
        {/*<HomeBenefits/>*/}
        {/*<HomeGettingStarted/>*/}
        <HomeBenefits2/>
        <SeeWhatTutorKrubOffers/>
        <Faq/>

        <HomeEasyAppointment/>
        
        <HomeBecomeTutor/>
        <HomeFooter/>
     </div> 

    }
}

export default Home