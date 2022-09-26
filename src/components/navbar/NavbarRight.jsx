import React, {useEffect, useRef, useState} from "react";
import NavbarNotificationDropdown from "./NavbarNotificationDropdown";

function NavbarRight(props) {

  function loggedInMenu() {
    return (

      <ul className="navbar-nav">
        <li className="nav-item dropdown dropdown-lg">
          <a className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative" href="javaScript:;"
             data-toggle="dropdown" aria-expanded="false"> <i className="bx bx-bell vertical-align-middle"></i>
            <span className="msg-count">8</span>
          </a>
          <NavbarNotificationDropdown/>
        </li>
        <li className="nav-item dropdown dropdown-user-profile">
          <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javaScript:;" data-toggle="dropdown"
             aria-expanded="false">
            <div className="media user-box align-items-center">

              <img src="/public/assets/images/avatars/avatar-1.png" className="user-img" alt="user avatar"/>
            </div>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item d-block d-lg-none" href="javaScript:;">
              <i className="bx bx-search"></i><span>สำรวจวิชาเรียน</span>
            </a>
            <a className="dropdown-item d-block d-lg-none" href="javaScript:;">
              <i className="bx bx-list-ul"></i><span>รายการนัดหมาย</span>
            </a>
            <a className="dropdown-item d-block d-lg-none" href="javaScript:;">
              <i className="bx bx-money"></i><span>คูปอง</span>
            </a>
            <a className="dropdown-item" href="javaScript:;">
              <i className="bx bx-user"></i><span>โปรไฟล์</span>
            </a>
            <a className="dropdown-item" href="javaScript:;">
              <i className="bx bx-help-circle"></i><span>ติดต่อสอบถาม</span>
            </a>
            <div className="dropdown-divider mb-0"></div>
            <a className="dropdown-item" href="javaScript:;">
              <i className="bx bx-log-out"></i><span>ออกจากระบบ</span>
            </a>
          </div>
        </li>
      </ul>
    )
  }
  function nonLoggedInMenu() {
    return (
      <>
        <button className="btn btn-link d-none d-md-inline-block font-14">เข้าสู่ระบบ</button>
        <button className="btn btn-primary d-none d-md-inline-block font-14 mr-3">ลงทะเบียนฟรี</button>
        <ul className="navbar-nav d-block d-md-none">
          <li className="nav-item dropdown dropdown-user-profile">
            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javaScript:;" data-toggle="dropdown"
               aria-expanded="false">
              <i className="bx bx-menu bx-md"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="javaScript:;">
                <i className="bx bx-search"></i><span>สำรวจวิชาเรียน</span>
              </a>
              <a className="dropdown-item" href="javaScript:;">
                <i className="bx bx-help-circle"></i><span>ติดต่อสอบถาม</span>
              </a>
              <div className="dropdown-divider mb-0"></div>
              <a className="dropdown-item" href="javaScript:;">
                <button type="button" className="btn btn-outline-primary mt-2" style={{minWidth: '180px'}}>
                  <i className="bx bx-log-in"></i>เข้าสู่ระบบ
                </button>
              </a>
              <a className="dropdown-item" href="javaScript:;">
                <button type="button" className="btn btn-primary" style={{minWidth: '180px'}}>
                  <i className="bx bx-user"></i>ลงทะเบียนฟรี
                </button>
              </a>
            </div>
          </li>
        </ul>

      </>
    )
  }
  return (

    <div className="right-topbar ml-auto">
      {props.isLoggedIn? (
        loggedInMenu()
      ) : (
        nonLoggedInMenu()
      )}
    </div>
  )
}

export default NavbarRight