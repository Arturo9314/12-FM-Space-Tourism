import React from 'react'
import { NavLink } from 'react-router-dom'

export default function HomeBTN() {

  return (
    <>
      <NavLink id='link-home' to='/explore'>
        <button id='home-btn' className='heading4'>Explore</button>
        <div className='circle'></div>
      </NavLink>
    </>
  )
}
