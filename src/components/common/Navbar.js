import React from "react";
import Api from '../../Api'
import Cookie from '../../Cookie'
import Me from '../../Me'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          user:{},
          auth: false 
          
        };
        this.devlogin = this.devlogin.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        this.getUser()
    }
    
    getUser() {
      var that = this
      Api.get('/user/me').then(function(response) {
          that.setState({ user: response.data.data,auth:true })
        }).catch(function(error) {
        })
    }

    devlogin(e, userId = 'hNqOKzYwhJjZTIDLUkf5') {
      
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
        localStorage? localStorage.removeItem('accessToken', data.data.data.accessToken) :Cookie.erase('accessToken')
        /*Api.post("/authen/logout").then(function(data) {
            that.setState({auth: false})
        }).catch(function(xhr, error) {
            console.error( "error", xhr, error );
            alert("error34")
        })*/
    }


    render() {

        return <header className="top-header">
            <nav className="navbar navbar-expand">
                <div className="left-topbar d-flex align-items-center">
                    <div className="logo-white">
                    <a href="/">
                        <img src="/assets/images/logo1.png" className="logo-icon" alt=""/>
                        </a>
                    </div>
                    <div className="logo-dark">
                    <a href="/">
                        <img src="/assets/images/logo1.png" className="logo-icon2" alt=""/>
                        </a>
                    </div>
                </div>
                
                <div className="flex-grow-1">
                  
                  
                  <a className="pl-4" href="/course/explore">สำรวจวิชาเรียน <span class="sr-only">(current)</span></a>
                  

                
                
                </div>
                
                
                
                 <div className="right-topbar ml-auto">
                <ul class="navbar-nav">
                <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="bx bx-key"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                          <a class="dropdown-item" href="#" onClick={e => this.devlogin(e, 'hNqOKzYwhJjZTIDLUkf5')}>Login as Pun</a>
                          <a class="dropdown-item" href="#" onClick={e => this.devlogin(e, 'PIrlU8ZS7htHOwU0z9iS')}>Login as Bamboo</a>
                        </div>
                      </li>
                      
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
                    <img src={this.state.user.avatarUrl} className="user-img" width="48" height="48" />
                     </div>                   <span className="msg-count2" >8</span>

                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">	<a className="dropdown-item" href="/user"><i
                                className="bx bx-user"></i><span>โปรไฟล์</span></a>
                                <a className="dropdown-item" href="/course/add"><i
                                    className="bx bx-plus-circle"></i><span>
                                    สร้างคอร์ส
                                </span></a>
                                <a className="dropdown-item" href="/user" ><i
                                    className="bx bx-grid"></i><span>
                                    คอร์สของฉัน
                                </span></a>
                                <a className="dropdown-item" href="/appointment/list"><i
                                    className="bx bx-list-ul"></i><span>
                                    รายการนัดหมาย
                                </span></a>
                                <a className="dropdown-item" href="/coupon"><i
                                    className="bx bx-money"></i><span>
                                    คูปองของฉัน
                                </span></a>
                                <div className="dropdown-divider mb-0"></div>	<a className="dropdown-item" onClick={this.logout}><i
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
    }
}

export default Navbar