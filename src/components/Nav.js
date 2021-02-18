import React, { useState } from "react"
import "./nav.css"

import Button from "./Button"

import logo from "../images/ZEISS_Logo.svg"
import user from "../images/user_icon.svg"

export default function Nav() {
  const [logout, setLogout] = useState(false)
  return (
    <div className='nav-wrap'>
      <div className='left'>
        <div className='logo-wrap'>
          <img src={logo} alt='logo' />
        </div>
        <div className='title-wrap'>
          <p className='app-title'>Advance Research Tool </p>
        </div>
      </div>

      <div className={`right ${logout ? "logout-click" : ""}`}>
        <div className='user-details-wrap' onClick={() => setLogout(!logout)}>
          <div>
            <p className='user-title'>Doe, John</p>
          </div>
          <div className='user-icon-wrap'>
            <img src={user} alt='user-icon' />
          </div>
        </div>

        {logout ? (
          <div className='logout-wrap'>
            <div className='logout-title'>
              <p>Doe, John</p>
            </div>
            <div className='logout-email'>
              <p>john.doe@zeiss.com</p>
            </div>
            <Button />
            {/* <div
              className='logout-button'
              onClick={(e) => {
                console.log("logout!!!!")
                e.stopPropagation()
              }}
            >
              <button>Logout</button>
            </div> */}
          </div>
        ) : null}
      </div>
    </div>
  )
}
