import React from "react";

class HomeBecomeTutor extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3 my-5" id="home-contactus">
          <div className="p-5" style={{background:'#0099ff'}}>
              <span className="h6">สนใจเป็นติวเตอร์ ?</span>
              <p className="h4">มาร่วมเป็นส่วนหนึ่งกับเรา สมัครได้เลย</p>
              <a href="/register" className="btn btn-danger">สมัครเป็นติวเตอร์</a>
              <div>
                  <img src="/assets/images/home/become-tutor-point.png" width="300"/>
              </div>
          </div>

      </div>

    }
}

export default HomeBecomeTutor