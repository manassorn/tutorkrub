import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import NavbarCenter from "./NavbarCenter";
import NavbarRight from "./NavbarRight";
import "./Navbar.scss"

function Navbar(props) {
  let secretCount = 0
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    document.addEventListener("keydown", checkSecretCode, true);

    return () => {
      document.removeEventListener("keydown", checkSecretCode, true);
    };
  }, [])

  function checkSecretCode(event) {
    if (event.metaKey) { 
      if(++secretCount == 3) {
        activateSecret()
        secretCount = 0
      }
      if(secretCount == 1) {
        setTimeout(() => {
          secretCount = 0
        }, 1000)
      }
    }
  }

  function activateSecret() {
    console.log('Secret activated!')
    setIsLoggedIn(isLoggedIn => !isLoggedIn)
  }

  return (
    <header className="top-header">
      <nav className="navbar navbar-expand">
        <div className="left-topbar d-flex align-items-center">
          <Link to="/">
            <div className="logo-white">
              <img src="/public/assets/images/logo3.png" width="60" alt=""/>
            </div>
            <div className="logo-dark">
              <img src="/public/assets/images/logo3.png" width="60" alt=""/>
            </div>
          </Link>
        </div>

        <NavbarCenter isLoggedIn={isLoggedIn}/>

        <NavbarRight isLoggedIn={isLoggedIn}/>
      </nav>
    </header>
  )
}

export default Navbar