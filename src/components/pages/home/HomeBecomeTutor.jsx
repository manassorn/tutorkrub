import React from "react";

class HomeBecomeTutor extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="bg-rosex" id="home-contactus" style={{background:'#ff4d4f'}}>
          <div className="offset-md-2 col-md-8">
          <div className="row text-center">
              <div className="p-5 col-md-8x">
                  <h2 className="text-white">สนใจเป็นติวเตอร์  สมัครได้เลย</h2>
                  <a href="/register" className="btn btn-outline-white text-primary">สมัครเป็นติวเตอร์</a>
              </div>
            </div>
          </div>

      </div>

    }
}

export default HomeBecomeTutor