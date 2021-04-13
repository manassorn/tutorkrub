import React from "react";

class HomeFooter extends React.Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
    }
    
    render() {
      return <div className="p-3">
          <div className="text-center">
              <span className="h6">ติดต่อเรา</span>
              <p className="h4">มีคำถามหรือข้อสงสัย</p>
          </div>


        <div class="list-inline contacts-social mt-2 text-center"> <a href="javaScript:;" class="list-inline-item text-facebook"><i class='bx bxl-facebook'></i></a>
            <a href="javaScript:;" class="list-inline-item text-twitter"><i class='bx bxl-twitter'></i></a>
            <a href="javaScript:;" class="list-inline-item"><i class='bx bxl-instagram'></i></a>
            <a href="javaScript:;" class="list-inline-item text-skype"><i class='bx bxl-youtube'></i></a>
        </div>



        <div className="row">
            <div className="col-md-4 offset-md-2">
                <div className="col-5 col-md-12 mx-auto">
                    <img src="/assets/images/home/contact-us.jpg" width="100%"/>
                </div>
            </div>
            <div className="col-md-4">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">อีเมล</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1"
                               placeholder="name@email.com"/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">ข้อความ</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>

                    <button className="btn btn-primary round-pill">
                        ส่งข้อความ
                    </button>
                </form>
                <div className="mt-3">
                    <a href="#">
                        <img src="/assets/images/icons/icon-circle-fb.png" width="36"/>
                    </a>&nbsp;&nbsp;
                    <a href="#">
                        <img src="/assets/images/icons/icon-circle-yt.png" width="36"/>
                    </a>&nbsp;&nbsp;
                    <a href="#">
                        <img src="/assets/images/icons/icon-circle-tt.png" width="36"/>
                    </a>&nbsp;&nbsp;
                    <a href="#">
                        <img src="/assets/images/icons/icon-circle-ig.png" width="36"/>
                    </a>
                </div>
            </div>
        </div>
      </div>

    }
}

export default HomeFooter