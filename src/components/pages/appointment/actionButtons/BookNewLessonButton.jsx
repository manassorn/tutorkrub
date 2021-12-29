import React from "react";

class BookNewLessonButton extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
    }
    this.appointment = this.props.appointment
  }

  componentDidMount() {
  }

  render() {
    
    const ap = this.appointment
    
    return  <a href={`/course/${ap.course.id}`} className="btn btn-outline-primary btn-block">นัดหมายอีกครั้ง</a>

  }
}
export default BookNewLessonButton