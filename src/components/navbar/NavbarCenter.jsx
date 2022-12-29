import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

function NavbarCenter(props) {

  return (
    <div className="flex-grow-1 navbar-center">
      <ul className="navbar-nav justify-content-end">
        {props.isLoggedIn ? (
          <>
            <li className="nav-item">
              <Link to="/explore" className="nav-link py-0">
                สำรวจวิชาเรียน
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/appointment" className="nav-link py-0">
                รายการนัดหมาย
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/coupon" className="nav-link py-0">
                คูปอง
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/explore" className="nav-link py-0">
                สำรวจวิชาเรียน
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link py-0" href="https://m.me/tutorkrub" target="_blank">ติดต่อสอบถาม</a>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default NavbarCenter