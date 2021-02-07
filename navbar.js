'use strict';

const e = React.createElement;

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  
  componentDidMount() { 
    
  }

  render() {
    if (this.state.data) {
      return 'You liked this.' + this.state.data.a;
    }

    return <header className="top-header">
      <nav className="navbar navbar-expand">
        <div className="left-topbar d-flex align-items-center">
          <a href="#" className="toggle-btn">	<i className="bx bx-menu"></i>
          </a>
          <div className="logo-white">
            <img src="assets/images/logo-white.png" className="logo-icon" alt=""/>
          </div>
          <div className="logo-dark">
            <img src="assets/images/logo-dark.png" className="logo-icon" alt=""/>
          </div>
        </div>
        <div className="flex-grow-1 search-bar">
          <div className="input-group">
            <div className="input-group-prepend search-arrow-back">
              <button className="btn btn-search-back" type="button"><i className="bx bx-arrow-back"></i>
              </button>
            </div>
            <input type="text" className="form-control" placeholder="search" />
            <div className="input-group-append">
              <button className="btn btn-search" type="button"><i className="lni lni-search-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="right-topbar ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item search-btn-mobile">
              <a className="nav-link position-relative" href="#">	<i className="bx bx-search vertical-align-middle"></i>
              </a>
            </li>
            <li className="nav-item dropdown dropdown-lg">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" data-toggle="dropdown">	<span className="msg-count">6</span>
                <i className="bx bx-comment-detail vertical-align-middle"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#">
                  <div className="msg-header">
                    <h6 className="msg-header-title">6 New</h6>
                    <p className="msg-header-subtitle">Application Messages</p>
                  </div>
                </a>
                <div className="header-message-list">
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-1.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Daisy Anderson <span className="msg-time float-right">5 sec
                          ago</span></h6>
                        <p className="msg-info">The standard chunk of lorem</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-2.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Althea Cabardo <span className="msg-time float-right">14
                          sec ago</span></h6>
                        <p className="msg-info">Many desktop publishing packages</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-3.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Oscar Garner <span className="msg-time float-right">8 min
                          ago</span></h6>
                        <p className="msg-info">Various versions have evolved over</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-4.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Katherine Pechon <span className="msg-time float-right">15
                          min ago</span></h6>
                        <p className="msg-info">Making this the first true generator</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-5.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Amelia Doe <span className="msg-time float-right">22 min
                          ago</span></h6>
                        <p className="msg-info">Duis aute irure dolor in reprehenderit</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-6.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Cristina Jhons <span className="msg-time float-right">2 hrs
                          ago</span></h6>
                        <p className="msg-info">The passage is attributed to an unknown</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-7.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">James Caviness <span className="msg-time float-right">4 hrs
                          ago</span></h6>
                        <p className="msg-info">The point of using Lorem</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-8.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Peter Costanzo <span className="msg-time float-right">6 hrs
                          ago</span></h6>
                        <p className="msg-info">It was popularised in the 1960s</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-9.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">David Buckley <span className="msg-time float-right">2 hrs
                          ago</span></h6>
                        <p className="msg-info">Various versions have evolved over</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-10.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Thomas Wheeler <span className="msg-time float-right">2 days
                          ago</span></h6>
                        <p className="msg-info">If you are going to use a passage</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="user-online">
                        <img src="assets/images/avatars/avatar-11.png" className="msg-avatar" alt="user avatar"/>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Johnny Seitz <span className="msg-time float-right">5 days
                          ago</span></h6>
                        <p className="msg-info">All the Lorem Ipsum generators</p>
                      </div>
                    </div>
                  </a>
                </div>
                <a href="#">
                  <div className="text-center msg-footer">View All Messages</div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown dropdown-lg">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="#" data-toggle="dropdown">	<i className="bx bx-bell vertical-align-middle"></i>
                <span className="msg-count">8</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right">
                <a href="#">
                  <div className="msg-header">
                    <h6 className="msg-header-title">8 New</h6>
                    <p className="msg-header-subtitle">Application Notifications</p>
                  </div>
                </a>
                <div className="header-notifications-list">
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="notify bg-light-primary text-primary"><i className="bx bx-group"></i>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">New Customers<span className="msg-time float-right">14 Sec
                          ago</span></h6>
                        <p className="msg-info">5 new user registered</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="notify bg-light-danger text-danger"><i className="bx bx-cart-alt"></i>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">New Orders <span className="msg-time float-right">2 min
                          ago</span></h6>
                        <p className="msg-info">You have recived new orders</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="notify bg-light-shineblue text-shineblue"><i className="bx bx-file"></i>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">24 PDF File<span className="msg-time float-right">19 min
                          ago</span></h6>
                        <p className="msg-info">The pdf files generated</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="notify bg-light-cyne text-cyne"><i className="bx bx-send"></i>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Time Response <span className="msg-time float-right">28 min
                          ago</span></h6>
                        <p className="msg-info">5.1 min avarage time response</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="notify bg-light-purple text-purple"><i className="bx bx-home-circle"></i>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">New Product Approved <span
                            className="msg-time float-right">2 hrs ago</span></h6>
                        <p className="msg-info">Your new product has approved</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="notify bg-light-warning text-warning"><i className="bx bx-message-detail"></i>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">New Comments <span className="msg-time float-right">4 hrs
                          ago</span></h6>
                        <p className="msg-info">New customer comments recived</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="notify bg-light-success text-success"><i className='bx bx-check-square'></i>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Your item is shipped <span className="msg-time float-right">5 hrs
                          ago</span></h6>
                        <p className="msg-info">Successfully shipped your item</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="notify bg-light-sinata text-sinata"><i className='bx bx-user-pin'></i>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">New 24 authors<span className="msg-time float-right">1 day
                          ago</span></h6>
                        <p className="msg-info">24 new authors joined last week</p>
                      </div>
                    </div>
                  </a>
                  <a className="dropdown-item" href="#">
                    <div className="media align-items-center">
                      <div className="notify bg-light-mehandi text-mehandi"><i className='bx bx-door-open'></i>
                      </div>
                      <div className="media-body">
                        <h6 className="msg-name">Defense Alerts <span className="msg-time float-right">2 weeks
                          ago</span></h6>
                        <p className="msg-info">45% less alerts last 4 weeks</p>
                      </div>
                    </div>
                  </a>
                </div>
                <a href="#">
                  <div className="text-center msg-footer">View All Notifications</div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown dropdown-user-profile">
              <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="#" data-toggle="dropdown">
                <div className="media user-box align-items-center">
                  <div className="media-body user-info">
                    <p className="user-name mb-0">Jessica Doe</p>
                    <p className="designattion mb-0">Available</p>
                  </div>
                  <img src="assets/images/avatars/avatar-1.png" className="user-img" alt="user avatar"/>
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-right">	<a className="dropdown-item" href="#"><i
                  className="bx bx-user"></i><span>Profile</span></a>
                <a className="dropdown-item" href="#"><i
                    className="bx bx-cog"></i><span>Settings</span></a>
                <a className="dropdown-item" href="#"><i
                    className="bx bx-tachometer"></i><span>Dashboard</span></a>
                <a className="dropdown-item" href="#"><i
                    className="bx bx-wallet"></i><span>Earnings</span></a>
                <a className="dropdown-item" href="#"><i
                    className="bx bx-cloud-download"></i><span>Downloads</span></a>
                <div className="dropdown-divider mb-0"></div>	<a className="dropdown-item" href="#"><i
                    className="bx bx-power-off"></i><span>Logout</span></a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  }
}

const domContainer = document.querySelector('#navbar');
ReactDOM.render(e(NavBar), domContainer);
