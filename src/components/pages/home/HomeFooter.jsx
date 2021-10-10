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
        <div className="col-sm-6">
          <div className="row">
            <div className="col"><i className="lni lni-facebook-original"/></div>
            <div className="col"><i className="lni lni-youtube"/></div>
            <div className="col"><i className="lni lni-instagram-original"/></div>
            <div className="col"><i className="lni lni-twitter"/></div>
          </div>
        </div>
        <div className="col-sm-6">
          วันอาวติวเตอร์
          copyright © 2021
        </div>
      
      </div>
      </div>

    }
}

export default HomeFooter