import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3 border-top" style={{background:'#262626',color:'#fdfdfd'}}>
      <div className="row">
        
        <div className="text-center col-md-5 offset-md-1 text-md-left">
            <img src="/assets/images/logo1.png" className="logo-icon" alt="" height="48" width="48"/>
        </div>
        <div className="text-center col-md-5 text-md-right">
          วันอาวติวเตอร์
          Copyright © 2021 1HourTutor. All rights reserve.
        </div>
      
      </div>
      </div>

    }
}

export default HomeFooter