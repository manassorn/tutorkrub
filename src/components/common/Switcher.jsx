import React from "react";
import './Switcher.scss'

class Switcher extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {

        return <div class="checkbox switcher">
      <label for="test">
        <input type="checkbox" id="test" value=""/>
        <span><small></small></span>
        <small>Light switch</small>
      </label>
    </div>
    }
};

export default Switcher