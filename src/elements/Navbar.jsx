import React, { useState } from 'react'
import MainNavbarBTN from './buttons/navbarbuttons/MainNavbarBTN'
import '../styles/Navbar.css'
import DestinationBTN from './buttons/navbarbuttons/DestinationBTN'
import CrewBTN from './buttons/navbarbuttons/CrewBTN'
import TechnologyBTN from './buttons/navbarbuttons/TechnologyBTN'
import { ReactComponent as Logo } from '../assets/shared/logo.svg';
import { crew, destinations, menu, tech } from '../data/getData'
import { Outlet } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../assets/shared/icon-hamburger.svg'
import { ReactComponent as Close } from '../assets/shared/icon-close.svg'

export function MainNavbar() {
  const [dropdown, setDropdown] = useState(false)
  const viewportWidth = window.innerWidth;
  
  const handleClick = ()=>{
    if(viewportWidth<=375){
      const dropdownId = document.getElementById('dropdown')
      dropdownId.style.display = dropdown ? 'none' : 'flex'
      setDropdown(!dropdown)
    }
  }

  return (
    <>
    <nav id='main-navbar'>
        <div id='logo'>
          <Logo/>
          <div id='line'></div>
        </div>
        <div id='navbar-buttons-container'>
          <button onClick={handleClick} id='menu'>
          {dropdown?<Close/>:<Hamburger/>}
          </button>
          <ul id='dropdown'>
            {menu.map(e=>(<li key={e.id}><MainNavbarBTN handleClick={handleClick} id={e.id} menuName={e.menuName} defaultName={e.defaultName}/></li>))}
          </ul>
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export function DestinationNavbar() {
  
  return (
    <nav id='destination-navbar'>
      <ul>
        {destinations.map((e, index)=>(<li key={index}><DestinationBTN destinationName={e.name}/></li>))}
      </ul>
    </nav>
  )
}

export function CrewNavbar() {
  return (
    <nav id='crew-navbar'>
      <ul>
        {crew.map((e, index)=>(<li key={index}> <CrewBTN memberRole={e.role}/> </li>))}
      </ul>
    </nav>
  )
}

export function TechnologyNavbar() {
  return (
    <nav id='tech-navbar'>
      <ul>
        {tech.map((e,index)=>(<li key={index}><TechnologyBTN techName={e.name} techNumber={index+1}/></li>))}
      </ul>
    </nav>
  )
}