import React from "react";
import addDays from 'date-fns/addDays'
import Api from '../../Api'
import Utils from '../../Utils'
import SimpleTitle from '../common/SimpleTitle'
import './CalendarPartOfDay.css'

class HeaderIcon extends React.Component {


    constructor(props) {
      super(props);
      this.text = this.props.text
      this.secondaryText = this.props.secondaryText
    }

    componentDidMount() {
      
    }

    render() {
      return <div className="d-flex">
        <div>
        <span className="bg-secondary radius-10 p-2 d-inline-block"> 
          <img src="/assets/images/icons/appointment-book.png" width="45" alt=""/> 

        </span> 
        </div>
        <div className="ml-3">
        <h4 className="mb-1">{this.text}</h4>
        <span className="text-muted">
        {this.secondaryText}
        </span>
        </div>
      </div>
  
    }
}

export default HeaderIcon