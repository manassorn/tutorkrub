import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3 border-top bg-light">
      <div className="row">
        
        <div className="col text-center">
          วันอาวติวเตอร์
          copyright © 2021
        </div>
      
      </div>
      </div>

    }
}

export default HomeFooter