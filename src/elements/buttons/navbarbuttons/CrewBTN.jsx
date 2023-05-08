import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CrewBTN({memberRole}) {
  
  const role = memberRole.toLowerCase().replace(/ /g, "_");

  const handleClick = ()=>{
    const crewFig = document.getElementById('crew-img')
    const data = document.getElementById('crew-data')
    crewFig.classList.add('slide-rotate-vertical-right')
    data.classList.add('slide-rotate-vertical-left')
    
    setTimeout(()=>{
      data.classList.remove('slide-rotate-vertical-left') 
      crewFig.classList.remove('slide-rotate-vertical-right')
    }, 1000)
    
  }

  return (
    <NavLink to={`/crew-members/${role}`}>{
      ({isActive, isPending})=>(<div onClick={handleClick} className={isActive ? 'active-crew crew-btn': 'crew-btn'}></div>)
    }
    </NavLink>
  )
}
