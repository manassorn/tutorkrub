import React, {useEffect, useRef, useState} from "react";

function NavbarCenter(props) {

  return (
    <div className="flex-grow-1 search-bar">
      <ul className="navbar-nav justify-content-center">
        {props.isLoggedIn ? (
          <>
            <li className="nav-item mx-2"><a className="nav-link text-primaryx py-0" href="#">สำรวจวิชาเรียน <span
              className="sr-only">(current)</span></a></li>
            <li className="nav-item mx-2"><a className="nav-link text-primaryx py-0" href="#">รายการนัดหมาย</a></li>
            <li className="nav-item mx-2"><a className="nav-link text-primaryx py-0" href="#">คูปอง</a></li>
          </>
        ) : (
          <>
            <li className="nav-item mx-2"><a className="nav-link text-primaryx py-0" href="#">สำรวจวิชาเรียน <span
              className="sr-only">(current)</span></a></li>
            <li className="nav-item mx-2"><a className="nav-link text-primaryx py-0" href="#">ติดต่อสอบถาม</a></li>
          </>
        )}
      </ul>
    </div>
  )
}

export default NavbarCenter