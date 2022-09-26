import React from "react";

function NavbarNotificationDropdown(props) {

  return (
    <div className="dropdown-menu dropdown-menu-right">
      <a href="javaScript:;">
        <div className="msg-header">
          <h6 className="msg-header-title">8 New</h6>
          <p className="msg-header-subtitle">Application Notifications</p>
        </div>
      </a>
      <div className="header-notifications-list ps">
        <a className="dropdown-item" href="javaScript:;">
          <div className="media align-items-center">
            <div className="notify bg-light-primary text-primary"><i className="bx bx-group"></i>
            </div>
            <div className="media-body">
              <h6 className="msg-name">New Customers
                <span className="msg-time float-right text-right">
                  <span className="text-danger"><i className="bx bx-calendar-exclamation"></i></span><br/>
                  14 Sec ago
                </span>
              </h6>
              <p className="msg-info">5 new user registered</p>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="javaScript:;">
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
        <a className="dropdown-item" href="javaScript:;">
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
        <a className="dropdown-item" href="javaScript:;">
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
        <a className="dropdown-item" href="javaScript:;">
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
        <a className="dropdown-item" href="javaScript:;">
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
        <a className="dropdown-item" href="javaScript:;">
          <div className="media align-items-center">
            <div className="notify bg-light-success text-success"><i className="bx bx-check-square"></i>
            </div>
            <div className="media-body">
              <h6 className="msg-name">Your item is shipped <span className="msg-time float-right">5 hrs
													ago</span></h6>
              <p className="msg-info">Successfully shipped your item</p>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="javaScript:;">
          <div className="media align-items-center">
            <div className="notify bg-light-sinata text-sinata"><i className="bx bx-user-pin"></i>
            </div>
            <div className="media-body">
              <h6 className="msg-name">New 24 authors<span className="msg-time float-right">1 day
													ago</span></h6>
              <p className="msg-info">24 new authors joined last week</p>
            </div>
          </div>
        </a>
        <a className="dropdown-item" href="javaScript:;">
          <div className="media align-items-center">
            <div className="notify bg-light-mehandi text-mehandi"><i className="bx bx-door-open"></i>
            </div>
            <div className="media-body">
              <h6 className="msg-name">Defense Alerts <span className="msg-time float-right">2 weeks
													ago</span></h6>
              <p className="msg-info">45% less alerts last 4 weeks</p>
            </div>
          </div>
        </a>
        <div className="ps__rail-x" style={{left: 0, bottom: 0}}>
          <div className="ps__thumb-x" tabIndex="0" style={{left: 0, width: 0}}></div>
        </div>
        <div className="ps__rail-y" style={{top: 0, right: 0}}>
          <div className="ps__thumb-y" tabIndex="0" style={{top: 0, height: 0}}></div>
        </div>
      </div>
      <a href="javaScript:;">
        <div className="text-center msg-footer">View All Notifications</div>
      </a>
    </div>
  )
}

export default NavbarNotificationDropdown