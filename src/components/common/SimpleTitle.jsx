import React from "react";
import Navbar from "./Navbar"

class SimpleTitle extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return <div className="p-3 text-center border-bottom" style={{position:'relative'}}> 
          {this.props.backBtn && (
            <a href={typeof this.props.backBtn === 'string'?this.props.backBtn:'javascript:history.back()'} style={{position:'absolute',left:'15px',top:'8px'}}>
              <i className="bx bx-chevron-left text-dark" style={{fontSize:'36px'}}></i>
            </a>
          )}



          <h3 className="mb-0">{this.props.title}</h3> 
        </div>
    }
};

export default SimpleTitle