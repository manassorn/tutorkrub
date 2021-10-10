import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3 border-top bg-light">
        <div className="d-flex bx-xl">
          <i className="bx bxl-facebook-circle" />
          <i className="bx bxl-youtube-circle" />
          <i className="bx bxl-twitter-circle" />
        
        </div>
         วันอาวติวเตอร์
          copyright © 2021
      </div>

    }
}

export default HomeFooter