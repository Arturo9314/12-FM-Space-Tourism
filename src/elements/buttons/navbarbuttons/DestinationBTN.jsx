import React from 'react'
import { NavLink } from 'react-router-dom'

export default function DestinationBTN({destinationName}) {
  const handleClick = ()=>{
    const destinationFig = document.getElementById('destination-img')
    const title = document.getElementById('title-place')

    title.classList.add('tracking-in-expand-forward-top')
    destinationFig.classList.add('rotate-scale-down')
    
    setTimeout(()=>{
      title.classList.remove('tracking-in-expand-forward-top') 
      destinationFig.classList.remove('rotate-scale-down')
    }, 1000)
    
  }
  return (
    <NavLink to={`/explore/${destinationName.toLowerCase()}`}>
      {({isActive, isPending})=>(
        <button onClick={handleClick} className={isActive? 'active-destination destination-btn nav-text': 'destination-btn nav-text'}>{destinationName}</button>
      )}
    </NavLink>
  )
}
