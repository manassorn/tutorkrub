import React from "react";
import Api from '../../Api'
import Cookie from '../../Cookie'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          user:{},
          auth: false 
          
        };
        this.oneClickLogin = this.oneClickLogin.bind(this)
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

    oneClickLogin(e) {
      
      const that = this
      e.preventDefault();
      const storage = localStorage
        Api.get( "/authen/1clicklogin").then(function(data) {
            console.log('set token',Object.keys(data.data.data));
            localStorage? localStorage.setItem('accessToken', data.data.data.accessToken) :Cookie.set('accessToken', data.data.data.accessToken)
            
            that.setState({auth: true})
            that.getUser()
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
                { (!this.state.auth) && <div className="right-topbar ml-auto d-flex align-items-center">
                    <a className="btn btn-link" href="#" onClick={this.oneClickLogin}>
                        1คลิกล็อกอิน
                    </a>
                    <a className="btn btn-primary ml-2" href="#">
                        สมัครสมาชิก
                    </a>
                </div> }
                { this.state.auth &&  <div className="right-topbar ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown dropdown-user-profile">
                            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-toggle="dropdown">
                                <div className="media user-box align-items-center">
                                    <div className="media-body user-info">
                                        <p className="user-name mb-0">Jessica Doe</p>
                                        <p className="designattion mb-0">Available</p>
                                    </div>
                                    <div className="position-relative">
                                        <img src={this.state.user.avatarUrl} className="user-img" alt="user avatar"/> <span className="msg-count2" >8</span>

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
                    </ul>
                </div>
                }
            </nav>
        </header>
    }
}

export default Navbar