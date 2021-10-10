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
        <div className="col-sm-6" style={{fontSize:'24px'}}>
          <i className="lni lni-facebook-original mr-3"/>
          <i className="lni lni-youtube mr-3"/>
          <i className="lni lni-instagram-filled mr-3"/>
          <i className="lni lni-twitter-original mr-3"/>


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