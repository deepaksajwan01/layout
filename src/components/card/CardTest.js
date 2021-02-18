import React from "react"
import lableData from "../../images/label_data_icon.svg"
import { NavLink } from "react-router-dom"

export default function CardTest({ icon, title, content }) {
  return (
    <NavLink exact to='/'>
      <div className='card-wrap'>
        <div className='card-container'>
          <div className='icon-wrap'>
            <img src={icon} alt='icon' />
          </div>
          <div className='card-title'>
            <p>{title}</p>
          </div>
          <div className='card-content'>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </NavLink>
  )
}
