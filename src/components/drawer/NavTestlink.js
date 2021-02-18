import React from "react"

export default function NavTestlink({ src, title }) {
  return (
    <li className='drawer-list-item'>
      <div className='lsit-item-wrap'>
        <img src={src} alt='' />
        <p className='list-item-title'>{title}</p>
      </div>
    </li>
  )
}
