import React from "react";
import Api from '../../Api'

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { auth: false };
        this.oneClickLogin = this.oneClickLogin.bind(this)
        this.logout = this.logout.bind(this)
    }

    componentDidMount() {
        const that = this
        Api.get('/user/me').then(function(response) {
            that.setState({auth: true})
        }).catch(function(error) {
        })
    }

    oneClickLogin(e) {
        const that = this
        e.preventDefault();
        Api.get( "/authen/1clicklogin").then(function(data) {
            console.log(data);
            window.localStorage.setItem('accessToken', data.data.accessToken)
            that.setState({auth: true})
        }).catch(function(xhr, error) {
            console.error( "error", xhr, error );
            alert("error")
        })
    }

    logout(e) {
        const that = this
        e.preventDefault();
        Api.post("/authen/logout").then(function(data) {
            console.log(data);
            that.setState({auth: false})
        }).catch(function(xhr, error) {
            console.error( "error", xhr, error );
            alert("error")
        })
    }


    render() {

        return <header className="top-header">
            <nav className="navbar navbar-expand">
                <div className="left-topbar d-flex align-items-center">
                    <div className="logo-white">
                        <img src="assets/images/logo1.png" className="logo-icon" alt=""/>
                    </div>
                    <div className="logo-dark">
                        <img src="assets/images/logo1.png" className="logo-icon2" alt=""/>
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
                                        <img src="assets/images/avatars/avatar-1.png" className="user-img" alt="user avatar"/> <span className="msg-count2" >8</span>

                                    </div>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">	<a className="dropdown-item" href="user.html"><i
                                className="bx bx-user"></i><span>โปรไฟล์</span></a>
                                <a className="dropdown-item" href="course-add.html"><i
                                    className="bx bx-plus-circle"></i><span>
                                    สร้างคอร์ส
                                </span></a>
                                <a className="dropdown-item" href="user.html" ><i
                                    className="bx bx-grid"></i><span>
                                    คอร์สของฉัน
                                </span></a>
                                <a className="dropdown-item" href="appointment.html"><i
                                    className="bx bx-list-ul"></i><span>
                                    รายการนัดหมาย
                                </span></a>
                                <a className="dropdown-item" href="appointment.html"><i
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