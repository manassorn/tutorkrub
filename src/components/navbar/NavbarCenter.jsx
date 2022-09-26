import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

function NavbarCenter(props) {

  return (
    <div className="flex-grow-1 search-bar">
      <ul className="navbar-nav justify-content-center">
        {props.isLoggedIn ? (
          <>
            <li className="nav-item mx-2">
              <Link to="/explore" className="nav-link py-0">
                สำรวจวิชาเรียน
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/appointment" className="nav-link py-0">
                รายการนัดหมาย
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/coupon" className="nav-link py-0">
                คูปอง
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item mx-2">
              <Link to="/explore" className="nav-link py-0">
                สำรวจวิชาเรียน
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="https://m.me/tutorkrub" className="nav-link py-0">
                <a className="nav-link py-0" href="#">ติดต่อสอบถาม</a>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  )
}

export default NavbarCenter