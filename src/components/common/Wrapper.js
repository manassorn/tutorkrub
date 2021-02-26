import React from "react";
import Navbar from "./Navbar"

class Wrapper extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return <div className="wrapper">
            <Navbar></Navbar>
            <div className="page-wrapper">
                <div className="page-content-wrapper">
                    {this.props.children}
                </div>
            </div>
        </div>
    }
};

export default Wrapper