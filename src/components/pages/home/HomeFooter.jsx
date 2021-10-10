import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3 border-top bg-light">
      <i className="bx bx-lg bxl-facebook-circle" /><br/>
          บริษัท วันอาวติวเตอร์ จำกัด
          copyright © 2021
      </div>

    }
}

export default HomeFooter