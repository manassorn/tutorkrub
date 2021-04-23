import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
      <div className="px-3 row mx-0" style={{background:'#0099ff',color:'white'}}>
      <div className="col-6 col-md-2 offset-md-3 text-center">
        <img src="assets/images/avatars/avatar-2.png" width="80" height="80" class="rounded-circle p-1 border" alt="" />
        <h4>
          นักเรียน
        </h4>
        <div className="text-left">
          <i className="bx bx-check-circle"></i>&nbsp;
          เรียนออนไลน์
          <br/>
          <i className="bx bx-check-circle"></i>&nbsp;
          เลือกเวลาเรียนเอง
          <br/>
          <i className="bx bx-check-circle"></i>&nbsp;
         ไม่ผูกมัด จบเป็นครั้งๆ
          <br/>
          <i className="bx bx-check-circle"></i>&nbsp;
          ปลอดภัย ไม่โกง
        </div>
        <br/>

        <button className="btn btn-outline-light">
        สมัครเรียน
        </button>
      </div>
      <div className="col-6 col-md-2 offset-md-2 text-center">
        <img src="assets/images/avatars/avatar-1.png" width="80" height="80" class="rounded-circle p-1 border" alt="" />
        <h4>
          ติวเตอร์
        </h4>
        <div className="text-left">
          <i className="bx bx-check-circle"></i>&nbsp;
          สอนออนไลน์
          <br/>
          <i className="bx bx-check-circle"></i>&nbsp;
          ได้รับเงินเมื่อสอนจบ
          <br/>
          <i className="bx bx-check-circle"></i>&nbsp;
         ไม่ผูกมัด จบเป็นครั้งๆ
          <br/>
          <i className="bx bx-check-circle"></i>&nbsp;
          ปลอดภัย ไม่โกง
        </div>
        <br/>
        
        <button className="btn btn-outline-light">
        สมัครสอน
        </button>
      </div>
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,229.3C384,235,480,277,576,250.7C672,224,768,128,864,117.3C960,107,1056,181,1152,202.7C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      </div>

    }
}

export default HomeFooter