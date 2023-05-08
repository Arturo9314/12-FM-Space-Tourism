import React from 'react'
import { NavLink } from 'react-router-dom'

export default function TechnologyBTN({techName,techNumber}) {
  const tech = techName.toLowerCase().replace(/ /g, "_")

  const handleClick = ()=>{
    const techFig = document.getElementById('tech-img')
    const data = document.getElementById('tech-data')
    techFig.classList.add('blur-out-contract')
    data.classList.add('slide-rotate-vertical-left')
    
    setTimeout(()=>{
      data.classList.remove('slide-rotate-vertical-left') 
      techFig.classList.remove('blur-out-contract')
    }, 500)
    
  }

  return (
    <NavLink to={`/technology/${tech}`}>
      {
        ({isActive, isPending})=>(
          <button onClick={handleClick} className={isActive? 'active-tech tech-btn heading4': 'tech-btn heading4'}>{techNumber}</button>
        )
      }
    </NavLink>
  )
}
