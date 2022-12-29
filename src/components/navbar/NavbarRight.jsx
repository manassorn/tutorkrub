import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
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
            <Link to="/explore" className="dropdown-item dropdown-lg-collapse">
              <i className="bx bx-search"></i><span>สำรวจวิชาเรียน</span>
            </Link>
            <Link to="/appointment" className="dropdown-item dropdown-lg-collapse">
              <i className="bx bx-list-ul"></i><span>รายการนัดหมาย</span>
            </Link>
            <Link to="/coupon" className="dropdown-item dropdown-lg-collapse">
              <i className="bx bx-money"></i><span>คูปอง</span>
            </Link>
            <Link to="/profile" className="dropdown-item">
              <i className="bx bx-user"></i><span>โปรไฟล์</span>
            </Link>
            <a href="https://m.me/tutorkrub" className="dropdown-item" target="_blank">
              <i className="bx bx-search"></i><span>ติดต่อสอบถาม</span>
            </a>
            <div className="dropdown-divider mb-0"></div>
            <Link to="/logout" className="dropdown-item">
              <i className="bx bx-log-out"></i><span>ออกจากระบบ</span>
            </Link>
          </div>
        </li>
      </ul>
    )
  }
  function nonLoggedInMenu() {
    return (
      <>
        <Link to="/login" className="btn btn-link d-none d-md-inline-block font-14">เข้าสู่ระบบ</Link>
        <Link to="/register" className="btn btn-primary d-none d-md-inline-block font-14 mr-3">ลงทะเบียนฟรี</Link>
        <ul className="navbar-nav d-block d-md-none">
          <li className="nav-item dropdown dropdown-user-profile">
            <a className="nav-link dropdown-toggle dropdown-toggle-nocaret" href="javaScript:;" data-toggle="dropdown"
               aria-expanded="false">
              <i className="bx bx-menu bx-md"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
              <Link to="/explore" className="dropdown-item">
                <i className="bx bx-search"></i><span>สำรวจวิชาเรียน</span>
              </Link>
              <a href="https://m.me/tutorkrub" className="dropdown-item" target="_blank">
                <i className="bx bx-help-circle"></i><span>ติดต่อสอบถาม</span>
              </a>
              <div className="dropdown-divider mb-0"></div>
              <Link to="/login" className="dropdown-item">
                <button type="button" className="btn btn-outline-primary mt-2" style={{minWidth: '180px'}}>
                  <i className="bx bx-log-in"></i>เข้าสู่ระบบ
                </button>
              </Link>
              <Link to="/register" className="dropdown-item">
                <button type="button" className="btn btn-primary" style={{minWidth: '180px'}}>
                  <i className="bx bx-user"></i>ลงทะเบียนฟรี
                </button>
              </Link>
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