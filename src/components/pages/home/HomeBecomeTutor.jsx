import React from "react";

class HomeBecomeTutor extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="" id="home-contactus" style={{background:'#0099ff'}}>
          <div className="offset-md-2 col-md-8">
          <div className="row">
              <div className="py-5 col-md-8">
                  <span className="h4">สนใจเป็นติวเตอร์ </span>
                  <p className="lead">มาร่วมเป็นส่วนหนึ่งกับเรา </p>
                  <a href="/register" className="btn btn-danger">สมัครเป็นติวเตอร์</a>
              </div>
              <div className="col-md-4 text-right">
                  <img src="/assets/images/home/become-tutor-point.png" width="150"/>
              </div>
            </div>
          </div>

      </div>

    }
}

export default HomeBecomeTutor