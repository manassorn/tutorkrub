import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3 border-top bg-light" style={{background:'#262626',color:'#fdfdfd'}}>
      <div className="row">
        
        <div className="text-center col-md-5 offset-md-1 text-md-left">
          วันอาวติวเตอร์
          copyright © 2021
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