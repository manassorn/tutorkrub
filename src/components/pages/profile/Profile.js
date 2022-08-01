import React from "react";
import Api from '../../../Api'
import Auth from '../../../Auth'
import SimpleTitle from '../../common/SimpleTitle'
import CalendarWeekPreview from "../../common/CalendarWeekPreview";


class Profile extends React.Component {
  
  
    constructor(props) {
        super(props);
        this.state = {
          user: {}, 
          courses: []
        }
    }

    componentDidMount() {
      const that = this
      Auth.observeLogin((login) => {
        if(!login || !login.user) return
        that.setState({user:login.user})
      })
      Api.get('/courses')
        .then(response => 
        {
        this.setState({ courses: response.data.data })
        }
        );
      
    }

  render() {

    return <div>
      <div className="row bg-light border-bottom">
        <div className="offset-md-2 col-md-8">
          <div className="media align-items-centerx py-4">
            <div style={{width:'130px',height:'130px'}}>
              <img src={this.state.user.avatarUrl || '/public/assets/images/avatars/avatar-default.jpg'} className="rounded-circle shadow" width="130" height="130" alt=""/>
            </div>
            <div className="media-body pl-3">
              <h4 className="mb-0 font-weight-bold">Manassorn</h4>
              <p className="mb-0 text-secondary">@manassorn</p>
            </div>
            <div className={'px-4'}>
              <button className={'btn btn-primary px-5'}>แก้ไขโปรไฟล์</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="media align-items-center radius-10 mt-4 border" style={{backgroundColor:'#8EE9EE'}}>
            <div style={{width:'130px'}}>
              <img src="/public/assets/images/tutor-left.jpg" width="130" className={'radius-10'}/>
            </div>
            <div className="media-body pl-3 pb-3">
              <h4 className="mb-0 font-weight-bold">สนใจเป็นติวเตอร์</h4>
              <p className="mb-0 text-secondary">@manassorn</p>
            </div>
            <div className={'px-4'}>
              <button className={'btn btn-primary px-5'}>สมัครตอนนี้</button>
            </div>
          </div>
        </div>
      </div>


      <div className="row">
        <div className="offset-md-2 col-md-8">
          <div className="media align-items-center radius-10 mt-4 border text-white" style={{backgroundColor:'#006DB6'}}>
            <div style={{width:'130px'}}>
              <img src="/public/assets/images/share-social.png" width="130" className={'radius-10'}/>
            </div>
            <div className="media-body pl-3 pb-3">
              <h4 className="mb-0 font-weight-bold">แชร์โซเชียล</h4>
              <p className="mb-0">โพสลงโซเชียล ด้วยภาพสวยงาม เพิ่มโอกาสให้คนเห็น</p>
            </div>
            <div className={'px-4'}>
              <button className={'btn btn-warning px-5'}>แชร์ไปยัง Facebook ฟรี</button>
            </div>
          </div>
        </div>
      </div>




      <div className={'container'}>

        <div className="row mt-3">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <h5 className="font-weight-bold mb-0">ข้อมูลการสอน</h5>
                  </div>
                  <div className="dropdown ml-auto">
                    <div className="cursor-pointer text-dark font-24 dropdown-toggle dropdown-toggle-nocaret"
                         data-toggle="dropdown"><i className="bx bx-dots-horizontal-rounded"></i>
                    </div>
                    <div className="dropdown-menu dropdown-menu-right"><a className="dropdown-item"
                                                                          href="javaScript:;">Action</a>
                      <a className="dropdown-item" href="javaScript:;">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="javaScript:;">Something else here</a>
                    </div>
                  </div>
                </div>

                <div className="media align-items-center mt-3">
                  <div style={{width:'90px'}}>
                    <p className="text-secondary mb-0">สอนวิชา</p>
                  </div>
                  <div className="media-body">
                    <p className="font-weight-bold mb-0">ภาษาอังกฤษ, ภาษาไทย, คณิตศาสตร์</p>
                  </div>
                  <a href="/checkout" className="btn btn-sm btn-link">แก้ไข</a>
                </div>
                <hr/>

                <div className="media align-items-center mt-3">
                  <div style={{width:'90px'}}>
                    <p className="text-secondary mb-0">สอนชั้นเรียน</p>
                  </div>
                  <div className="media-body">
                    <p className="font-weight-bold mb-0">ม.1 - ม.6</p>
                  </div>
                  <a href="/checkout" className="btn btn-sm btn-link">แก้ไข</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <h5 className="font-weight-bold mb-0">คอร์ส</h5>
                  </div>
                  <button className="btn btn-sm btn-outline-primary radius-10 ml-auto"><i className="bx bx-plus"></i> เพิ่มคอร์ส</button>

                </div>

                <div className="text-center">
                  <img src="/public/assets/images/book-gray.jpg" width="150"/><br/>
                  <span className="text-muted">ไม่พบคอร์ส</span>
                </div>
                <div className="d-none">
                  <div className="media align-items-center mt-3">
                    <div className="media-body">
                      <p className="font-weight-bold mb-0">ภาษาอังกฤษ ม.1 - ม.6</p>
                      <p className="text-secondary mb-0">100฿/ชั่วโมง</p>
                    </div>
                    <a href="/checkout" className="btn btn-sm btn-link">แก้ไข</a>
                  </div>
                  <hr/>

                  <div className="media align-items-center mt-3">
                  <div className="media-body">
                    <p className="font-weight-bold mb-0">ภาษาอังกฤษ ม.1 - ม.6</p>
                    <p className="text-secondary mb-0">100฿/ชั่วโมง</p>
                  </div>
                  <a href="/checkout" className="btn btn-sm btn-link">แก้ไข</a>
                </div>
                </div>
              </div>
            </div>

          </div>
          <div className={'col-md-4'}>
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div>
                    <h5 className="font-weight-bold mb-0">เวลาที่สะดวกสอน</h5>
                  </div>
                  <button className="btn btn-sm btn-outline-primary radius-10 ml-auto">แก้ไข</button>
                </div>

                <div className="text-center mt-4">
                  <img src="/public/assets/images/calendar-gray.jpg" width="150"/><br/>
                  <span className="text-secondary">ไม่พบตารางสอน</span>
                </div>
                <div>
                  <CalendarWeekPreview/>
                </div>

              </div>
            </div>
          </div>
      </div>
      </div>


    </div>

  }
};

export default Profile