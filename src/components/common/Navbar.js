import React from "react";
import {Link} from "react-router-dom";
import Api from '../../Api'
import Cookie from '../../Cookie'
import Auth from '../../Auth'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          user:{},
          auth: false 
          
        };
        this.devlogin = this.devlogin.bind(this)
        this.logout = this.logout.bind(this)
        this.activateSecretPanel = this.activateSecretPanel.bind(this)
        this.doScrolling = this.doScrolling.bind(this)
    }

    componentDidMount() {
      Auth.observeLogin((user)=>{
        if(!user) return
        this.setState({user,auth:true})
      })
    }

    devlogin(e, userId = 'fiSdcHz3FcLxZ0b2ienj') {
      
      const that = this
      e.preventDefault();
      const storage = localStorage
        Api.get( "/authen/devlogin2/" + userId).then(function(response) {
          const user = response.data.data
          Me.subject.next(user)
          that.setState({auth: true})
          that.setState({ user, auth:true })
            // console.log('set token',Object.keys(response.data.data));
            // localStorage? localStorage.setItem('accessToken', data.data.data.accessToken) :Cookie.set('accessToken', data.data.data.accessToken)
            //
            // that.setState({auth: true})
            // that.getUser()
        }).catch(function(xhr, error) {
            console.error( "error", xhr, error );
            alert("error");
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
    
    doScrolling(elementY, duration) { 
      var startingY = window.pageYOffset; 
      //var diff = elementY - startingY; 
      
      var diff = document.querySelector(elementY).getBoundingClientRect().top
      
      
      var start; // Bootstrap our animation - it will get called right before next frame shall be rendered. 
    window.requestAnimationFrame(function step(timestamp) { 
      if (!start) start = timestamp; // Elapsed milliseconds since start of scrolling. 
      var time = timestamp - start; // Get percent of completion in range [0, 1]. 
      var percent = Math.min(time / duration, 1); window.scrollTo(0, startingY + diff * percent); // Proceed with animation as long as we wanted it to. 
      if (time < duration) { 
        window.requestAnimationFrame(step)
      } 
    }) 
    }


    render() {

        return <><header className="top-header">
            <nav className="navbar navbar-expand">
                <div className="left-topbar d-flex align-items-center">
                    <div className="logo-white">
                    <Link to="/">
                        <img src="/assets/images/logo1.png" className="logo-icon" alt=""/>
                        </Link>
                    </div>
                    <div className="logo-dark">
                    <Link to="/">
                        <img src="/assets/images/logo1.png" className="logo-icon2" alt=""/>
                        </Link>
                    </div>
                </div>
                
                <div className="flex-grow-1" onClick={e => this.activateSecretPanel(e)}>

                  <Link className="pl-4" to="/explore">สำรวจวิชาเรียน <span class="sr-only">(current)</span></Link>

                </div>
                
                
                
                 <div className="right-topbar ml-auto">
                <ul class="navbar-nav">
                { !this.state.auth && <li class="nav-item dropdown">
                        <a className="nav-link dropdown-toggle dropdown-toggle-nocaret bx-md" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="bx bx-md bx-menu"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                          <a class="dropdown-item" href="#" onClick={e => this.devlogin(e, 'fiSdcHz3FcLxZ0b2ienj')}>วิธีใช้งาน</a>
                          <a class="dropdown-item" href="#" onClick={e => this.devlogin(e, 'fiSdcHz3FcLxZ0b2ienj')}>สำรวจวิชาเรียน</a>
                          <a class="dropdown-item" href="#" onClick={e => this.doScrolling('#home-contactus', 800)}>ติดต่อสอบถาม</a>
                        
                               <div className="dropdown-divider"></div>	
                          <Link className="dropdown-item" to="/register">
                                    สมัครสมาชิก
                                </Link>
                      <Link className="dropdown-item" to="/login">
                                    เข้าสู่ระบบ
                                </Link>
                        </div>

                           
                      </li>}
                      
            { this.state.auth && 
                <li className="nav-item dropdown dropdown-user-profile">
                  <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-toggle="dropdown">
                                <div className="media user-box align-items-center">
                                    <div className="media-body user-info">
                                        <p className="user-name mb-0">Jessica Doe</p>
                                        <p className="designattion mb-0">Available</p>
                                    </div>
                  <div className="position-relative">
                    <div style={{width:'48px', height:'48px'}}>
                    <img src={this.state.user.avatarUrl || '/assets/images/avatars/avatar-default.jpg'} className="user-img" width="48" height="48" />
                     </div>                   <span className="msg-count2" >8</span>

                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">	
                            
                                <Link className="dropdown-item" to="/user"><i
                                className="bx bx-user"></i><span>โปรไฟล์</span></Link>
                                
                                <Link className="dropdown-item" to="/course/add"><i
                                    className="bx bx-plus-circle"></i><span>
                                    สร้างคอร์ส
                                </span></Link>
                                <Link className="dropdown-item" to="/user" ><i
                                    className="bx bx-grid"></i><span>
                                    คอร์สของฉัน
                                </span></Link>
                                <Link className="dropdown-item" to="/appointment/list"><i
                                    className="bx bx-list-ul"></i><span>
                                    รายการนัดหมาย
                                </span></Link>
                                <Link className="dropdown-item" to="/coupon"><i
                                    className="bx bx-money"></i><span>
                                    คูปองของฉัน
                                </span></Link>
                                <div className="dropdown-divider mb-0"></div>	<a className="dropdown-item" onClick={e => this.logout(e)}><i
                                    className="bx bx-power-off"></i><span>
                                    ล็อกเอาท์
                                </span></a>
                            </div>
                        </li>
                      }
                      
                </ul>
                </div>
                
                
                
                { (this.state.authx) && <div className="right-topbar ml-auto d-flex align-items-center">
                    <a className="btn btn-link" href="#" onClick={this.devlogin}>
                        devlogin
                    </a>
                    <a className="btn btn-primary ml-2" href="#">
                        สมัครสมาชิก
                    </a>
                </div> }
                
                
            </nav>
            
        </header>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        </>
    }
}

export default Navbar