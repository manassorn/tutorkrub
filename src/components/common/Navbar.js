import React from "react";
import {Link} from "react-router-dom";
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
        // this.getUser()
      if(Me.getUser()) {
        this.setState({ user: Me.getUser(), auth:true })
      } else {
        Me.subscribe((user)=>{
          if(!user) return
          console.log('user',user)
          this.setState({user,auth:true})
        })
      }
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
        Api.post("/authen/logout").then(function(data) {
            that.setState({auth: false})
        }).catch(function(xhr, error) {
        })
    }


    render() {

        return <header className="top-header">
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
                
                <div className="flex-grow-1">
                  
                  
                  <Link className="pl-4" to="/course/explore">สำรวจวิชาเรียน <span class="sr-only">(current)</span></Link>
                  

                
                
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
                                <div className="dropdown-divider mb-0"></div>	<a className="dropdown-item" onClick={e => this.logout}><i
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