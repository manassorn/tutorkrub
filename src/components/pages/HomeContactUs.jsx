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




          <div>
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            
            
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Example textarea</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            
            <button class="btn btn-primary round-pill">
            ส่งข้อความ
            </button>
          </form>
          </div>
      </div>

    }
}

export default HomeFooter