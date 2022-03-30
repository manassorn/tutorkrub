import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3" style={{background:'#262626',color:'#fdfdfd'}}>
      <div className="row align-items-center">
        
        <div className="text-center col-md-5 offset-md-1 text-md-left">
            <img src="/public/assets/images/logo2.png" alt="" height="48" width="48"/>
        </div>
        <div className="text-center col-md-5 text-md-right">
          
          Copyright © 2021 1HourTutor. All rights reserve.
        </div>
      
      </div>
      </div>

    }
}

export default HomeFooter