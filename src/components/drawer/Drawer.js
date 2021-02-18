import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import "./drawer.css"
import home from "../../images/home_icon.svg"
import arrow from "../../images/arrow_icon.svg"
import NavTestlink from "./NavTestlink"

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
              <NavTestlink src={home} title={"Home"} />
            </NavLink>
            <NavLink exact to='/'>
              <NavTestlink src={home} title={"My Projects"} />
            </NavLink>
            <NavLink exact to='/'>
              <NavTestlink src={home} title={"AI Modles"} />
            </NavLink>
            <NavLink exact to='/'>
              <NavTestlink src={home} title={"Settings"} />
            </NavLink>
            <NavLink exact to='/'>
              <NavTestlink src={home} title={"About"} />
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
