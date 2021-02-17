import React, { useState } from "react"
import "./drawer.css"
import home from "../../images/home_icon.svg"
import arrow from "../../images/arrow_icon.svg"

export default function Drawer() {
  const [toggleDrawer, setToggleDrawer] = useState(true)
  return (
    <div
      className={`drawer-wrap ${toggleDrawer ? "open-drawer" : "close-drawer"}`}
    >
      <div className='drawer-container'>
        <div className='top'>
          <ul className='drawer-list'>
            <li className='drawer-list-item'>
              <div className='lsit-item-wrap'>
                <img src={home} alt='' />
                <p className='list-item-title'>Home</p>
              </div>
            </li>
            <li className='drawer-list-item'>
              <div className='lsit-item-wrap'>
                <img src={home} alt='' />
                <p className='list-item-title'>Home</p>
              </div>
            </li>
            <li className='drawer-list-item'>
              <div className='lsit-item-wrap'>
                <img src={home} alt='' />
                <p className='list-item-title'>Home</p>
              </div>
            </li>
            <li className='drawer-list-item'>
              <div className='lsit-item-wrap'>
                <img src={home} alt='' />
                <p className='list-item-title'>Home</p>
              </div>
            </li>
            <li className='drawer-list-item'>
              <div className='lsit-item-wrap'>
                <img src={home} alt='' />
                <p className='list-item-title'>Home</p>
              </div>
            </li>
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
