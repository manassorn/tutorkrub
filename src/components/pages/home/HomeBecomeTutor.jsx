import React from "react";

class HomeBecomeTutor extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3 my-5" id="home-contactus">
          <div className="offset-md-2 col-md-8" style={{background:'#0099ff'}}>
              <span className="h6">สนใจเป็นติวเตอร์ ?</span>
              <p className="h4">มาร่วมเป็นส่วนหนึ่งกับเรา สมัครได้เลย</p>
              <a href="/register" className="btn btn-danger">สมัครเป็นติวเตอร์</a>
              <div style={{position:'absolute',bottom:0,right:'50px'}}>
                  <img src="/assets/images/home/become-tutor-point.png" width="100"/>
              </div>
          </div>

      </div>

    }
}

export default HomeBecomeTutor