import React from 'react'
import { NavLink } from 'react-router-dom'

export default function MainNavbarBTN({handleClick,id, menuName, defaultName}) {
  return (
    <NavLink to={menuName==='home'?'/':defaultName}>{
      ({ isActive, isPending })=>(<button onClick={handleClick} className={isActive ? 'main-btn nav-text active-section' : 'main-btn nav-text'} ><strong className='nav-text'>{id}</strong>  {menuName}</button>)
    }
    </NavLink>
  )
}
