import React from "react";
import {Link} from "react-router-dom";
import Api from '../../Api'
import Cookie from '../../Cookie'
import Auth from '../../Auth'
import {toggleDebugMode} from "../../Debug";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          user:{},
          auth: false 

        };
        this.logout = this.logout.bind(this)
        this.activateSecretPanel = this.activateSecretPanel.bind(this)
    }

    componentDidMount() {
      Auth.observeLogin((login)=>{
        if(!login || !login.user) return
        this.setState({user:login.user,auth:true})
      })
    }

    logout(e) {
        const that = this
        e.preventDefault();
        Api.post("/authen/logout").then(function(data) {
            that.setState({auth: false})
        }).catch(function(xhr, error) {
          alert('error')
        })
    }
    
    activateSecretPanel() {
      toggleDebugMode()
      this.secretCount = this.secretCount || 0;
      if(++this.secretCount == 5) {
        $('#exampleModal').modal('show')
        this.secretCount = 0
      }
      if(this.secretCount == 1) {
        const that = this;
        setTimeout(() => {
          that.secretCount = 0
        }, 3000)
      }
      
    }

  render() {
    return <>
      <header className="top-header">
        <nav className="navbar navbar-expand">
          <div className="left-topbar d-flex align-items-center">
            <div className="logo-white">
              <Link to="/">
                <img src="/public/assets/images/logo3.png" className="logo-icon" alt=""/>
              </Link>
            </div>
            <div className="logo-dark">
              <Link to="/">
                <img src="/public/assets/images/logo3.png" className="logo-icon2" alt=""/>
              </Link>
            </div>
          </div>
                
          <div className="flex-grow-1" onClick={e => this.activateSecretPanel(e)}>
            <Link className="pl-4" to="/explore">สำรวจวิชาเรียน <span className="sr-only">(current)</span></Link>
            <a className="pl-4" href="https://m.me/tutorkrub" target="_blank">ติดต่อสอบถาม <span className="sr-only"></span></a>
            {/*<a onClick={toggleDebugMode}>.</a>*/}
          </div>

          <div className="right-topbar ml-auto">
            { !this.state.auth && (
              <>
                <Link className="btn btn-link btn-md" to="/login">เข้าสู่ระบบ</Link>
                <Link className="btn btn-primary btn-md" to="/register/tutor">ลงทะเบียนฟรี</Link>
              </>
            )}


            { this.state.auth &&
              <ul className="navbar-nav">
                <li className="nav-item dropdown dropdown-user-profile">
                  <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-toggle="dropdown">
                    <div className="media user-box align-items-center">
                      <div className="media-body user-info">
                        <p className="user-name mb-0">Jessica Doe</p>
                        <p className="designattion mb-0">Available</p>
                      </div>
                      <div className="position-relative">
                        <div style={{width:'48px', height:'48px'}}>
                          <img src={this.state.user.avatarUrl || '/public/assets/images/avatars/avatar-default.jpg'} className="user-img" width="48" height="48" />
                        </div>
                        <span className="msg-count2" >8</span>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link className="dropdown-item" to="/profile">
                      <i className="bx bx-user"></i><span>โปรไฟล์</span>
                    </Link>
                    <Link className="dropdown-item" to="/course/add">
                      <i className="bx bx-plus-circle"></i><span>สร้างคอร์ส</span>
                    </Link>
                    <Link className="dropdown-item" to="/profile" >
                      <i className="bx bx-grid"></i><span>คอร์สของฉัน</span>
                    </Link>
                    <Link className="dropdown-item" to="/appointment/list">
                      <i className="bx bx-list-ul"></i><span>รายการนัดหมาย</span>
                    </Link>
                    <Link className="dropdown-item" to="/coupon">
                      <i className="bx bx-money"></i><span>คูปองของฉัน</span>
                    </Link>
                    <div className="dropdown-divider mb-0"></div>
                    <a className="dropdown-item" onClick={e => this.logout(e)}>
                      <i className="bx bx-power-off"></i><span>ล็อกเอาท์</span>
                    </a>
                  </div>
                </li>
              </ul>
            }
          </div>
        </nav>
      </header>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
        </>
    }
}

export default Navbar