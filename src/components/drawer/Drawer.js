import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./drawer.css"
import home from "../../images/home_icon.svg"
import arrow from "../../images/arrow_icon.svg"

export default function Drawer() {
  const [toggleDrawer, setToggleDrawer] = useState(false)
  return (
    <div
      className={`drawer-wrap ${toggleDrawer ? "open-drawer" : "close-drawer"}`}
    >
      <div className='drawer-container'>
        <div className='top'>
          <ul className='drawer-list'>
            <NavLink activeClassName='active-drawer-link' exact to='/'>
              <li className='drawer-list-item'>
                <div className='lsit-item-wrap'>
                  <img src={home} alt='' />
                  <p className='list-item-title'>Home</p>
                </div>
              </li>
            </NavLink>
            <NavLink exact to='/'>
              <li className='drawer-list-item'>
                <div className='lsit-item-wrap'>
                  <img src={home} alt='' />
                  <p className='list-item-title'>My Projects</p>
                </div>
              </li>
            </NavLink>
            <NavLink exact to='/'>
              <li className='drawer-list-item'>
                <div className='lsit-item-wrap'>
                  <img src={home} alt='' />
                  <p className='list-item-title'>AI Modles</p>
                </div>
              </li>
            </NavLink>
            <NavLink exact to='/'>
              <li className='drawer-list-item'>
                <div className='lsit-item-wrap'>
                  <img src={home} alt='' />
                  <p className='list-item-title'>Settings</p>
                </div>
              </li>
            </NavLink>
            <NavLink exact to='/'>
              <li className='drawer-list-item'>
                <div className='lsit-item-wrap'>
                  <img src={home} alt='' />
                  <p className='list-item-title'>About</p>
                </div>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className='bottom'>
          <div
            className={`arrow-wrap ${toggleDrawer ? "rotate-icon" : ""}`}
            onClick={() => setToggleDrawer(!toggleDrawer)}
          >
            <img src={arrow} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}
